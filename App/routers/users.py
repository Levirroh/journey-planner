from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..connection import get_connection
import bcrypt


router = APIRouter(
    prefix="/users",
    tags=["users"]
)

#region Classes
class LoginRequest(BaseModel):
    nickname: str
    password: str

class RegisterRequest(BaseModel):
    email: str
    nickname: str
    phone: str
    birth: str
    country: str
    state: str
    city: str
    password: str
    wishCountryOne: str
    wishCountryTwo: str
    wishCountryThree: str
    travelType: str


#endregion

@router.post("/login")
async def login_user(request: LoginRequest):
    conn = get_connection()
    if conn is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco")

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE user_email = %s OR user_nickname = %s", (request.nickname,))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")

    if bcrypt.checkpw(request.password.encode("utf-8"), user["user_password"].encode("utf-8")):
        return {"message": "Login bem-sucedido", "user_id": user["user_id"]}
    else:
        raise {"message": "usuário inválido"}

@router.post("/register")
async def login_user(request: RegisterRequest):
    conn = get_connection()
    if conn is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco")

    cursor = conn.cursor(dictionary=True)
    cursor.execute("INSERT INTO users (user_email, user_nickname, user_phone, user_birth, user_country, user_state, user_city, user_password, wish_country_one, wish_country_two, wish_country_three, travel_type) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)", 
                    (request.email, request.nickname, request.phone, request.birth, request.country, request.state, request.city, 
                    bcrypt.hashpw(request.password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8"), 
                    request.wishCountryOne, request.wishCountryTwo, request.wishCountryThree, request.travelType))
    conn.commit()
    cursor.execute("SELECT * FROM users WHERE user_email = %s OR user_nickname = %s", (request.nickname, request.nickname))
    user = cursor.fetchone()


    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=401, detail="Usuário não cadastrado")
    else:
        return {"message": "Registro bem-sucedido", "user_id": user["user_id"]}

@router.get("/")
def get_users():
    conn = get_connection()
    if conn is None:
        return {"error": "Não foi possível conectar ao banco de dados."}

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()

    cursor.close()
    conn.close()
    return result

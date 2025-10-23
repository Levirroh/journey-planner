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

#endregion

@router.post("/login")
def login_user(request: LoginRequest):
    conn = get_connection()
    if conn is None:
        raise HTTPException(status_code=500, detail="Erro de conexão com o banco")

    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM users WHERE user_nickname = %s", (request.nickname,))
    user = cursor.fetchone()

    cursor.close()
    conn.close()

    if not user:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")

    if bcrypt.checkpw(request.password.encode("utf-8"), user["user_password"].encode("utf-8")):
        return {"message": "Login bem-sucedido", "user_id": user["user_id"]}
    else:
        raise {"message": "usuário inválido"}



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

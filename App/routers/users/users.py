from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Users
from App.db.models.flight_model import Flights
from App.db.models.plane_model import Planes
from App.db.models.seat_model import Seats

router = APIRouter(
    prefix="/users",
    tags=["users"]
)

#region Classes

class GetFromUserId(BaseModel):
    user_id: int

class LoginRequest(BaseModel):
    nickname: str
    password: str

class RegisterRequest(BaseModel):
    fullName: str
    nickname: str
    email: str
    phone: str
    birth: str
    country: str
    state: str
    city: str
    language: str
    currency: str
    wishCountryOne: str
    wishCountryTwo: str
    wishCountryThree: str
    travelType: str
    password:str


#endregion

#region login register
@router.post("/login")
async def login_user(request: LoginRequest, session = Depends(get_session)):

    query = select(Users).where(
        (Users.user_email == request.nickname) | 
        (Users.user_nickname == request.nickname)
    )

    user = session.exec(query).first()

    if not user:
        raise HTTPException(status_code=401, detail="Usuário não encontrado")

    if bcrypt.checkpw(request.password.encode("utf-8"), user.user_password.encode("utf-8")):
        return {"message": "Login bem-sucedido", "user_id": user.user_id}
    else:
        raise HTTPException(status_code=401, detail="Usuário inválido")



@router.post("/register")
async def register_user(request: RegisterRequest, session = Depends(get_session)):

    hashed_password = bcrypt.hashpw(request.password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

    new_user = Users(
        user_name=request.fullName,
        user_email=request.email,
        user_nickname=request.nickname,
        user_phone=request.phone,
        user_birth=request.birth,
        user_country=request.country,
        user_state=request.state,
        user_city=request.city,
        user_password=hashed_password,
        wish_country_one=request.wishCountryOne,
        wish_country_two=request.wishCountryTwo,
        wish_country_three=request.wishCountryThree,
        travel_type=request.travelType,
    )

    session.add(new_user)
    session.commit()
    session.refresh(new_user)

    return {"message": "Registro bem-sucedido", "user_id": new_user.user_id}

#endregion

#region Get_FromUser

@router.post("/getFlightsFromUser")
async def login_user(request: GetFromUserId, session = Depends(get_session)):

    query = select(Flights).join(Planes, Planes.plane_id == Flights.plane).join(Seats, Seats.plane_id == Planes.plane_id).join(Users, Users.user_id == Seats.user_id).where(Users.user_id == request.user_id)

    response = session.exec(query)

    return response

#endregion


@router.get("/")
def get_users(session = Depends(get_session)):
    users = session.exec(select(Users)).all()
    return users

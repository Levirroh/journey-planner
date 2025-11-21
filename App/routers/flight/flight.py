from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Flight

router = APIRouter(
    prefix="/plane",
    tags=["plane"]
)

#region Classes
class seeFlight(BaseModel):
    flight_id: int

#endregion

#region Requests
@router.post("/seeFlight")
async def see_flight(request: seeFlight, session = Depends(get_session)):
    query = select(Flight).where(
        (Flight.flight_id == request.flight_id)
    )
    return query


@router.post("/")
async def all_flights(session = Depends(get_session)):
    query = select(Flight).all()
    return query
#endregion
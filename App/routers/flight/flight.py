from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Flights

router = APIRouter(
    prefix="/flights",
    tags=["flights"]
)

#region Classes
class seeFlight(BaseModel):
    flight_id: int


class newFlight(BaseModel):
    flight_id: int

#endregion

#region Requests
@router.post("/seeFlight")
async def see_flight(request: seeFlight, session = Depends(get_session)):
    query = select(Flights).where(
        (Flights.flight_id == request.flight_id)
    )
    return query

@router.post("/getFeed")
async def all_flights(session = Depends(get_session)):
    result = session.exec(select(Flights).joinedload(Flights.plane).joinedload(Flights.seats))
    flights = result.all()
    return flights


@router.post("/newFlight")
async def new_flight(request: newFlight , session = Depends(get_session)):
    #later, implement user based feed
    session.add(newFlight)
    query = select(Flights).where(
        (Flights.flight_id == request.flight_id)
    )
    return query



@router.post("/")
async def all_flights(session = Depends(get_session)):
    query = select(Flights).all()
    return query
#endregion
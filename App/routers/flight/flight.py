from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import aliased
from sqlalchemy import or_

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Flights
from App.db.models.city_model import Cities

router = APIRouter(
    prefix="/flights",
    tags=["flights"]
)

#region Classes
class seeFlight(BaseModel):
    flight_id: int

class seeFeed(BaseModel):
    destiny: str
    departure: str

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
async def all_flights(request: seeFeed, session = Depends(get_session)):
    DestinyCity = aliased(Cities)
    OriginCity = aliased(Cities)

    statement = (
        select(Flights)
        .join(Flights.plane)
        .join(DestinyCity, Flights.destinyId == DestinyCity.code)
        .join(OriginCity, Flights.originId == OriginCity.code)
        .where(
            or_(
                DestinyCity.name.ilike(f"%{request.destiny}%"),
                OriginCity.name.ilike(f"%{request.departure}%")
            )
        )
    )

    return session.exec(statement).all()


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
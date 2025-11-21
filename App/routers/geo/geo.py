from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Country
from App.db.models import State
from App.db.models import City

router = APIRouter(
    prefix="/geo",
    tags=["geo"]
)

#region Classes
class seeGeo(BaseModel):
    code: str

#endregion

#region Requests

#region General

@router.post("/seeGeo")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Country).join(State, State.country_code == Country.code).join(City, City.state_code == State.code).where(
        (Country.code == request.code)
    )
    return query
#endregion

#region Country

@router.post("/seeCountry")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Country).where(
        (Country.code == request.code)
    )
    return query

@router.post("/seeAllFromCountry")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Country).join(State, State.country_code == Country.code).join(City, City.state_code == State.code).where(
        (Country.code == request.code)
    )
    return query

#endregion

#region State

@router.post("/seeAllFromState")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(State).join(Country, State.country_code == Country.code).join(City, City.state_code == State.code).where(
        (Country.code == request.code)
    )
    return query


@router.post("/seeState")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(State).where(
        (State.code == request.code)
    )
    return query

#endregion

#region City

@router.post("/seeCity")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(City).where(
        (City.code == request.code)
    )
    return query

@router.post("/seeAllFromCity")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(City).join(State, State.country_code == City.code).join(Country, Country.code == State.country_code).where(
        (Country.code == request.code)
    )
    return query

#endregion

#region others

@router.post("/")
async def all_geo(session = Depends(get_session)):
    query = select(Country).all()
    return query

#endregion

#endregion

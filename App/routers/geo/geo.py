from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Countries
from App.db.models import States
from App.db.models import Cities

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
    query = select(Countries).join(States, States.country_code == Countries.code).join(Cities, Cities.state_code == States.code).where(
        (Countries.code == request.code)
    )
    return query
#endregion

#region Country

@router.post("/seeCountry")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Countries).where(
        (Countries.code == request.code)
    )
    return query

@router.post("/seeAllFromCountry")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Countries).join(States, States.country_code == Countries.code).join(Cities, Cities.state_code == States.code).where(
        (Countries.code == request.code)
    )
    return query

#endregion

#region State

@router.post("/seeAllFromState")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(States).join(Countries, States.country_code == Countries.code).join(Cities, Cities.state_code == States.code).where(
        (Countries.code == request.code)
    )
    return query


@router.post("/seeState")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(States).where(
        (States.code == request.code)
    )
    return query

#endregion

#region City

@router.post("/seeCity")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Cities).where(
        (Cities.code == request.code)
    )
    return query

@router.post("/seeAllFromCity")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Cities).join(States, States.country_code == Cities.code).join(Countries, Countries.code == States.country_code).where(
        (Countries.code == request.code)
    )
    return query

#endregion

#region others

@router.post("/")
async def all_geo(session = Depends(get_session)):
    query = select(Countries).all()
    return query

#endregion

#endregion

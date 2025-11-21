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
@router.post("/seeGeo")
async def see_geo(request: seeGeo, session = Depends(get_session)):
    query = select(Country).where(
        (Country.code == request.code)
    )
    return query


@router.post("/")
async def all_geo(session = Depends(get_session)):
    query = select(Country).all()
    return query

#endregion

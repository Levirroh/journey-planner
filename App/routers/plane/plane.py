from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import Planes

router = APIRouter(
    prefix="/plane",
    tags=["plane"]
)

#region Classes
class seePlane(BaseModel):
    plane_id: int

#endregion

#region Requests
@router.post("/seePlane")
async def see_plane(request: seePlane, session = Depends(get_session)):
    query = select(Planes).where(
        (Planes.plane_id == request.plane_id)
    )
    return query


@router.post("/")
async def all_plane(session = Depends(get_session)):
    query = select(Planes).all()
    return query
#endregion
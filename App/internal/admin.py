from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.models import User

router = APIRouter(
    prefix="/admin",
    tags=["admin"]
)

@router.post("/")
async def update_admin():
    return {"message": "Admin getting schwifty"}
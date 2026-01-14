from sqlmodel import Relationship, SQLModel, Field
from sqlalchemy import Column, Enum
from enum import Enum as PyEnum
from typing import Optional

from App.db.models.plane_model import Planes


class Seats(SQLModel, table=True):
    seat_id: Optional[int] = Field(default=None, primary_key=True)
    code: str
    location: str

    plane_id: Optional[int] = Field(foreign_key="planes.plane_id")
from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

from App.db.models.seat_model import Seats

class Planes(SQLModel, table=True):
    plane_id: Optional[int] = Field(default=None, primary_key=True)
    model: str
    total_seats: int

    seats: List["Seats"] = Relationship(back_populates="plane")
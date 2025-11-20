from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

class Plane(SQLModel, table=True):
    plane_id: Optional[int] = Field(default=None, primary_key=True)
    model: str
    total_seats: int

    seats: List["Seat"] = Relationship(back_populates="plane")
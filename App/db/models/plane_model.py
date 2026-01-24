from typing import Optional
from sqlmodel import SQLModel, Field, Relationship


class Planes(SQLModel, table=True):
    plane_id: Optional[int] = Field(default=None, primary_key=True)
    model: str
    total_seats: int

    flights: list["Flights"] = Relationship(back_populates="plane")

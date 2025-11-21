from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class Seat(SQLModel, table=True):
    seat_id: Optional[int] = Field(default=None, primary_key=True)
    code: str

    plane_id: Optional[int] = Field(foreign_key="plane.plane_id")
    plane: Optional["Plane"] = Relationship(back_populates="seats")
    user_id: Optional[int] = Field(foreign_key="user.plane_id")

from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class Seats(SQLModel, table=True):
    seat_id: Optional[int] = Field(default=None, primary_key=True)
    code: str

    plane_id: Optional[int] = Field(foreign_key="planes.plane_id")
    plane: Optional["Planes"] = Relationship(back_populates="seats")
    user_id: Optional[int] = Field(foreign_key="users.user_id")

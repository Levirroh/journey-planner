from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class ClassTypes(str):
    ECONOMY = "Economy"
    P_ECONOMY = "Premium Economy"
    BUSINESS = "Executive/Business"
    FIRST_CLASS = "First Class"

class SeatPlace(str):
    WINDOWS = "Window"
    CORRIDOR = "Corridor"
    MIDDLE = "Middle"
    EMERGENCY = "Emergency Exit"
    WING = "Wing"
    FRONT = "Front"


class Seats(SQLModel, table=True):
    seat_id: Optional[int] = Field(default=None, primary_key=True)
    code: str
    classname: ClassTypes
    location: SeatPlace
    location_especify: Optional[SeatPlace]

    plane_id: Optional[int] = Field(foreign_key="planes.plane_id")
    plane: Optional["Planes"] = Relationship(back_populates="seats")
    user_id: Optional[int] = Field(foreign_key="users.user_id")

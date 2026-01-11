from sqlmodel import Relationship, SQLModel, Field
from sqlalchemy import Column, Enum
from enum import Enum as PyEnum
from typing import Optional

from App.db.models.plane_model import Planes

class ClassTypes(str, PyEnum):
    ECONOMY = "Economy"
    P_ECONOMY = "Premium Economy"
    BUSINESS = "Executive/Business"
    FIRST_CLASS = "First Class"

class SeatPlace(str, PyEnum):
    WINDOWS = "Window"
    CORRIDOR = "Corridor"
    MIDDLE = "Middle"
    EMERGENCY = "Emergency Exit"
    WING = "Wing"
    FRONT = "Front"


class Seats(SQLModel, table=True):
    seat_id: Optional[int] = Field(default=None, primary_key=True)
    code: str
    weather: ClassTypes = Field(
        sa_column=Column(Enum(ClassTypes, name="class_types_enum"))
    )
    location: SeatPlace = Field(
        sa_column=Column(Enum(SeatPlace, name="seat_place_enum"))
    )
    location_especify: SeatPlace = Field(
        sa_column=Column(Enum(SeatPlace, name="seat_place_especify_enum"))
    )

    plane_id: Optional[int] = Field(foreign_key="planes.plane_id")
    plane: Optional["Planes"] = Relationship(back_populates="seats")
    user_id: Optional[int] = Field(foreign_key="users.user_id")

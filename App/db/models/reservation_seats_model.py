from sqlmodel import Column, Enum, SQLModel, Field
from typing import Optional
from enum import Enum as PyEnum

class ClassTypes(str, PyEnum):
    ECONOMY = "Economy"
    P_ECONOMY = "Premium Economy"
    BUSINESS = "Executive/Business"
    FIRST_CLASS = "First Class"


class Reservation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    reservation_id: int = Field(foreign_key="reservations.id")
    seat_id: int = Field(foreign_key="seats.id")
    type: ClassTypes = Field(
        sa_column=Column(Enum(ClassTypes, name="class_types_enum"))
    )
    price: float
    status: str
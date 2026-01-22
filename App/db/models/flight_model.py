from datetime import datetime
from decimal import Decimal
from enum import Enum as PyEnum
from typing import Optional, List

from sqlalchemy import Column, Enum, JSON, Numeric
from sqlmodel import SQLModel, Field, Relationship

from App.db.models.city_model import Cities
from App.db.models.plane_model import Planes


class EWeather(str, PyEnum):
    CHOVENDO = "Raining"
    ENSOLARADO = "Sunny"
    NUBLADO = "Cloudy"
    LIMPO = "Clear"
    TEMPESTADE = "Storm"


class ETypeFlight(str, PyEnum):
    DIRECT = "Direct"


class Flights(SQLModel, table=True):
    __tablename__ = "flights"

    flight_id: Optional[int] = Field(default=None, primary_key=True)
    title: str

    image: Optional[str]

    tags: Optional[List[str]] = Field(sa_column=Column(JSON))

    type: Optional[ETypeFlight]
    fare: Optional[str]

    price: Decimal = Field(sa_column=Column(Numeric(10, 2)))

    brand: str
    brandImage: Optional[str]

    destinyId: int = Field(foreign_key="cities.code")
    destiny: Optional["Cities"] = Relationship()

    originId: int = Field(foreign_key="cities.code")
    origin: Optional["Cities"] = Relationship()

    departureDate: datetime
    departure: Optional[str]
    arriving: datetime
    duration_min: int

    weather: EWeather = Field(
        sa_column=Column(Enum(EWeather, name="weather_enum"))
    )

    planeId: Optional[int] = Field(foreign_key="planes.plane_id")
    plane: Optional["Planes"] = Relationship(back_populates="flights")

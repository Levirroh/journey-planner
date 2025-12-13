from datetime import datetime, time
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, Enum
from enum import Enum as PyEnum
from typing import Optional

class WeatherEnum(PyEnum):
    CHOVENDO = "Raining"
    ENSOLARADO = "Sunny"
    NUBLADO = "Cloudy"
    LIMPO = "Clear"
    TEMPESTADE = "Storm"


class Flights(SQLModel, table=True):
    flight_id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    image: Optional[str]

    destiny: int = Field(foreign_key="cities.code")
    origin: int = Field(foreign_key="cities.code")

    departure: datetime
    arriving: datetime
    duration: time

    weather: WeatherEnum = Field(
        sa_column=Column(Enum(WeatherEnum))
    )

    plane: Optional[int] = Field(foreign_key="planes.plane_id")
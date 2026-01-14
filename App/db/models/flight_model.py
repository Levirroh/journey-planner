from datetime import datetime, time
from decimal import Decimal
from sqlmodel import SQLModel, Field
from sqlalchemy import Column, Enum
from enum import Enum as PyEnum
from typing import Optional

from App.db.models.city_model import Cities
from App.db.models.country_model import Countries
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
    flight_id: Optional[int] = Field(default=None, primary_key=True)
    title: str
    
    image: Optional[str]
    tags: Optional[list[str]]
    type: Optional[ETypeFlight]
    fare: Optional[str]
    price: Decimal
    
    brand: str
    brandImage: Optional[str]

    destinyId: int = Field(foreign_key="cities.code")
    destiny: Optional["Cities"]
    originId: int = Field(foreign_key="cities.code")
    origin: Optional["Cities"]
    


    departureDate: datetime
    departure: Optional[str]
    arriving: datetime
    duration_min: int

    weather: EWeather = Field(
        sa_column=Column(Enum(EWeather, name="weather_enum"))
    )
    

    planeId: Optional[int] = Field(foreign_key="planes.plane_id")
    plane: Optional["Planes"] = None
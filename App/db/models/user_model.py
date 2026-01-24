from sqlmodel import SQLModel, Field, Relationship
from typing import Optional
from datetime import date
from enum import Enum as PyEnum


class ETravelType(str, PyEnum):
    LEISURE = "Leisure"
    BUSINESS = "Business"
    ADVENTURE = "Adventure"
    CULTURE = "Culture"
    GASTRONOMY = "Gastronomy"


class Users(SQLModel, table=True):

    user_id: Optional[int] = Field(default=None, primary_key=True)

    user_name: str
    user_email: str
    user_nickname: str
    user_phone: str
    user_birth: date   

    user_countryId: str = Field(foreign_key="countries.code")
    user_country: Optional["Countries"] = Relationship()

    user_stateId: str = Field(foreign_key="states.code")
    user_state: Optional["States"] = Relationship(back_populates="users")

    user_cityId: int = Field(foreign_key="cities.code")
    user_city: Optional["Cities"] = Relationship(back_populates="users")

    user_password: str

    wish_country_one: Optional[str]
    wish_country_two: Optional[str] 
    wish_country_three: Optional[str]

    travel_type: Optional[ETravelType] = Field(default=None)
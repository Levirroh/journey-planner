from datetime import date
from sqlmodel import SQLModel, Field
from typing import Optional
from enum import Enum as PyEnum

from App.db.models.city_model import Cities
from App.db.models.country_model import Countries
from App.db.models.state_model import States

class ETravelType(str, PyEnum): # todo: make a table for travel types
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
    user_country: Optional["Countries"] 
    user_stateId: str = Field(foreign_key="states.code")
    user_state: Optional["States"] 
    user_cityId: int = Field(foreign_key="cities.code")
    user_city: Optional["Cities"] 

    user_password: str

    wish_country_one: Optional[str] = Field(default=None, foreign_key="countries.code")
    wish_country_two: Optional[str] = Field(default=None, foreign_key="countries.code")
    wish_country_three: Optional[str] = Field(default=None, foreign_key="countries.code")

    travel_type: ETravelType

from datetime import date
from sqlmodel import SQLModel, Field
from typing import Optional

class Users(SQLModel, table=True):
    user_id: Optional[int] = Field(default=None, primary_key=True)

    user_name: str
    user_email: str
    user_nickname: str
    user_phone: str
    user_birth: date   

    user_country: str = Field(foreign_key="country.code")
    user_state: str = Field(foreign_key="state.code")
    user_city: str = Field(foreign_key="city.code")

    user_password: str

    wish_country_one: Optional[str] = Field(default=None, foreign_key="country.code")
    wish_country_two: Optional[str] = Field(default=None, foreign_key="country.code")
    wish_country_three: Optional[str] = Field(default=None, foreign_key="country.code")

    travel_type: str

from sqlmodel import Relationship, SQLModel, Field
from typing import List, Optional

from App.db.models.city_model import Cities
from App.db.models.country_model import Countries

class States(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str

    country_code: str = Field(foreign_key="countries.code")
    
    country: Optional["Countries"] = Relationship(back_populates="states")
    cities: List["Cities"] = Relationship(back_populates="state")
from sqlmodel import Relationship, SQLModel, Field
from typing import List, Optional

class State(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str

    country_code: str = Field(foreign_key="country.code")
    
    country: Optional["Country"] = Relationship(back_populates="states")
    cities: List["City"] = Relationship(back_populates="state")
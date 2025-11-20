from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

class Country(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str

    states: List["State"] = Relationship(back_populates="country")
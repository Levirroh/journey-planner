from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class City(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str

    state_code: str = Field(foreign_key="state.code")

    state: Optional["State"] = Relationship(back_populates="cities")
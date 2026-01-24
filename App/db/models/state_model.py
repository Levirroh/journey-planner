from sqlmodel import Relationship, SQLModel, Field
from typing import Optional


class States(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str
    country_code: str = Field(foreign_key="countries.code")

    country: Optional["Countries"] = Relationship(back_populates="states")
    
    users: list["Users"] = Relationship(back_populates="user_state")
    cities: list["Cities"] = Relationship(back_populates="state")
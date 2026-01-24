from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class Cities(SQLModel, table=True):
    code: Optional[int] = Field(primary_key=True)
    name: str

    state_code: str = Field(foreign_key="states.code")

    state: Optional["States"] = Relationship(back_populates="cities")
    
    users: list["Users"] = Relationship(back_populates="user_city")
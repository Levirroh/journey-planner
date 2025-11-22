from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional

class Countries(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str

    states: List["States"] = Relationship(back_populates="country")
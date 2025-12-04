from sqlmodel import SQLModel, Field, Relationship
from typing import Optional

class Aeroports(SQLModel, table=True):
    aeroport_id: Optional[int] = Field(default=None, primary_key=True)
    name: str
    adress: str

    state: str = Field(foreign_key="states.code")
    city: int = Field(foreign_key="cities.code")

from sqlmodel import SQLModel, Field
from typing import Optional


class Flight_Tags(SQLModel, table=True):
    id = Field(default=None, primary_key=True)
    flight_id: Optional[int] = Field(default=None, foreign_key="flights.flight_id")
    tag_id: Optional[int] = Field(default=None, foreign_key="tags.id")
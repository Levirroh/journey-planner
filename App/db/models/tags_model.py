from sqlmodel import SQLModel, Field
from typing import Optional


class Tags(SQLModel, table=True):
    id: int = Field(default=None, primary_key=True)
    description: str
    color: Optional[str]
    
import datetime
from sqlmodel import SQLModel, Field
from typing import Optional


class Reservation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="users.user_id")
    status: str
    total_price: float
    created_at: datetime
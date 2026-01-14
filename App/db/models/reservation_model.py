from datetime import date
import datetime
from sqlmodel import SQLModel, Field
from typing import Optional
from enum import Enum as PyEnum

from App.db.models.city_model import Cities
from App.db.models.country_model import Countries
from App.db.models.state_model import States

class Reservation(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: int = Field(foreign_key="users.user_id")
    status: str
    total_price: float
    created_at: datetime
from sqlmodel import SQLModel, Field, Relationship

class Countries(SQLModel, table=True):
    code: str = Field(primary_key=True)
    name: str
    
    users: list["Users"] = Relationship(back_populates="user_country")
    states: list["States"] = Relationship(back_populates="country")
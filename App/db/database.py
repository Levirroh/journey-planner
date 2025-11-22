# database.py
from sqlmodel import SQLModel, create_engine, Session

DATABASE_URL = "mysql+pymysql://root:root@localhost:3306/journey_planner"

engine = create_engine(DATABASE_URL, echo=True)

def get_session():
    with Session(engine) as session:
        yield session
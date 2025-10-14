from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import users
from database import Base, engine

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Journey Planner API")

# permitir requisições do frontend TypeScript
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # depois restrinja ao seu domínio
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
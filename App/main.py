from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers import users

app = FastAPI()

origins = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclui apenas os routers que têm endpoints
app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}

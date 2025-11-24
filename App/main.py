from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routers.users import users
from .routers.geo import geo
from .routers.plane import plane
from .routers.flight import flight
from .routers.general import general

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://localhost:5173/",
    "http://127.0.0.1:5173",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:8000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)



# Inclui apenas os routers que têm endpoints
app.include_router(users.router)
app.include_router(flight.router)
app.include_router(plane.router)
app.include_router(geo.router)
app.include_router(general.route)

@app.get("/")
async def root():
    return {"message": "Hello Bigger Applications!"}

from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import bcrypt

from sqlmodel import select

from App.db.database import get_session
from App.db.database import get_session
from App.db.models.country_model import Countries
from App.db.models.state_model import States
from App.db.models.city_model import Cities
from App.db.models.user_model import Users
from App.db.models.aeroport_model import Aeroports
from App.db.models.plane_model import Planes
from App.db.models.seat_model import Seats
from App.db.models.flight_model import Flights, WeatherEnum

router = APIRouter(
    prefix="/general",
    tags=["general"]
)

#region Classes

#endregion

#region Requests
@router.get("/insertBaseData")
async def insert_base_data(session = Depends(get_session)):
    # -------------------------------
    # COUNTRIES
    # -------------------------------
    countries = [
        Countries(name="Brazil", code="BR"),
        Countries(name="United States of America", code="US"),
        Countries(name="Japan", code="JP"),
        Countries(name="Portugal", code="PT"),
    ]
    session.add_all(countries)
    session.commit()  # garante IDs para FK posteriores

    # -------------------------------
    # STATES
    # -------------------------------
    states = [
        States(name="Santa Catarina", code="BR-SC", country_code="BR", country=countries[0]),
        States(name="California", code="US-CA", country_code="US", country=countries[1]),
        States(name="Hokkaidô", code="JP-01", country_code="JP", country=countries[2]),
        States(name="Lisboa", code="PT-11", country_code="PT", country=countries[3]),
    ]
    session.add_all(states)
    session.commit()

    # -------------------------------
    # CITIES
    # -------------------------------
    cities = [
        Cities(name="Joinville", code=1, state=states[0], state_code="BR-SC"),
        Cities(name="San Diego", code=2, state=states[1], state_code="US-CA"),
        Cities(name="Sapporo", code=3, state=states[2], state_code="JP-01"),
        Cities(name="Montijo", code=4, state=states[3], state_code="PT-11"),
    ]
    session.add_all(cities)
    session.commit()

    # -------------------------------
    # USERS
    # -------------------------------
    users = [
        Users(
            user_name="Johann Gossen Ruth",
            user_email="johann@gmail.com",
            user_nickname="Levirroh",
            user_phone="47 99999-9999",
            user_birth="2006-10-14",
            user_country="BR",
            user_state="BR-SC",
            user_city=1,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="US",
            wish_country_two="PT",
            wish_country_three="JP",
            travel_type="Business",
        ),
        Users(
            user_name="Gustavo Floriano",
            user_email="gustavo@gmail.com",
            user_nickname="Peba",
            user_phone="47 99999-9999",
            user_birth="2006-09-07",
            user_country="US",
            user_state="US-CA",
            user_city=2,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="BR",
            wish_country_two="PT",
            wish_country_three="JP",
            travel_type="Business",
        ),
        Users(
            user_name="Vitor Hugo da Cunha",
            user_email="vh@gmail.com",
            user_nickname="Mini Veiga",
            user_phone="47 99999-9999",
            user_birth="2006-01-01",
            user_country="JP",
            user_state="JP-01",
            user_city=3,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="BR",
            wish_country_two="PT",
            wish_country_three="US",
            travel_type="Business",
        ),
        Users(
            user_name="João Caetano Constantino",
            user_email="jcc@gmail.com",
            user_nickname="Python constantino",
            user_phone="47 99999-9999",
            user_birth="2006-02-02",
            user_country="PT",
            user_state="PT-11",
            user_city=4,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="BR",
            wish_country_two="JP",
            wish_country_three="US",
            travel_type="Business",
        ),
    ]

    session.add_all(users)
    session.commit()

    # -------------------------------
    # AEROPORTS
    # -------------------------------
    aeroports = [
        Aeroports(name="Aeroporto de Joinville",
                  adress="Rua do Aeroporto de Joinville",
                  state="BR-SC",
                  city=1),
        Aeroports(name="San Diego Airport",
                  adress="Yes",
                  state="US-CA",
                  city=2),
        Aeroports(name="Aeroporto do Japão",
                  adress="No",
                  state="JP-01",
                  city=3),
        Aeroports(name="Aeroporto das",
                  adress="Maybe",
                  state="PT-11",
                  city=4),
    ]

    session.add_all(aeroports)
    session.commit()

    # -------------------------------
    # PLANES
    # -------------------------------
    planes = [
        Planes(model="Boeing 747", total_seats=410),
        Planes(model="Airbus A380", total_seats=368),
        Planes(model="Airbus A330-300", total_seats=305),
        Planes(model="Caravan da Azul", total_seats=9),
    ]

    session.add_all(planes)
    session.commit()

    # -------------------------------
    # SEATS
    # -------------------------------
    seats = [
        # Plane 1
        Seats(code="A1", plane_id=1),
        Seats(code="A2", plane_id=1),
        Seats(code="B1", plane_id=1),
        Seats(code="B2", plane_id=1),

        # Plane 2
        Seats(code="A1", plane_id=2),
        Seats(code="A2", plane_id=2),
        Seats(code="B1", plane_id=2),
        Seats(code="B2", plane_id=2),

        # Plane 3
        Seats(code="A1", plane_id=3),
        Seats(code="A2", plane_id=3),

        # Plane 4
        Seats(code="B1", plane_id=4),
        Seats(code="B2", plane_id=4),
    ]

    session.add_all(seats)
    session.commit()

    # -------------------------------
    # FLIGHTS
    # -------------------------------
    flights = [
        Flights(
            title="Voo 1",
            destiny=1,
            origin=2,
            departure="2025-12-12 12:12",
            arriving="2025-12-12 16:12",
            duration="04:00",
            weather=WeatherEnum.LIMPO,
            plane=1,
        ),
        Flights(
            title="Voo 2",
            destiny=2,
            origin=3,
            departure="2025-12-12 12:12",
            arriving="2025-12-12 16:12",
            duration="04:00",
            weather=WeatherEnum.ENSOLARADO,
            plane=2,
        ),
        Flights(
            title="Voo 3",
            destiny=3,
            origin=4,
            departure="2025-12-12 12:12",
            arriving="2025-12-12 16:12",
            duration="04:00",
            weather=WeatherEnum.TEMPESTADE,
            plane=3,
        ),
        Flights(
            title="Voo 4",
            destiny=4,
            origin=1,
            departure="2025-12-12 12:12",
            arriving="2025-12-12 16:12",
            duration="04:00",
            weather=WeatherEnum.CHOVENDO,
            plane=4,   # corrigido! antes era 6
        ),
    ]

    session.add_all(flights)
    session.commit()

    return {"success": True}


@router.delete("/dropBaseData")
async def drop_base_data(session = Depends(get_session)):
    # Ordem correta: remover entidades filhas → pais

    # Flights depende de seats, planes, aeroportos...
    session.query(Flights).delete()
    session.commit()

    session.query(Seats).delete()
    session.commit()

    session.query(Planes).delete()
    session.commit()

    session.query(Aeroports).delete()
    session.commit()

    session.query(Users).delete()
    session.commit()

    session.query(Cities).delete()
    session.commit()

    session.query(States).delete()
    session.commit()

    session.query(Countries).delete()
    session.commit()

    return {"success": True, "message": "Base data removida com sucesso."}



#endregion
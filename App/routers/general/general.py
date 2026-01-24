from datetime import date, datetime
from decimal import Decimal
from fastapi import APIRouter, Depends
import bcrypt


from App.db.database import get_session
from App.db.database import get_session
from App.db.models.country_model import Countries
from App.db.models.state_model import States
from App.db.models.city_model import Cities
from App.db.models.tags_model import Tags
from App.db.models.user_model import ETravelType, Users
from App.db.models.aeroport_model import Aeroports
from App.db.models.plane_model import Planes
from App.db.models.seat_model import Seats
from App.db.models.flight_model import ETypeFlight, EWeather, Flights

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
        Countries(code="BR", name="Brazil"),
        Countries(code="US", name="United States of America"),
        Countries(code="JP", name="Japan"),
        Countries(code="PT", name="Portugal"),
        Countries(code="FR", name="France"),
    ]
    session.add_all(countries)
    session.commit()

    # -------------------------------
    # STATES
    # -------------------------------
    states = [
        States(code="BR-SC", name="Santa Catarina", country_code="BR"),
        States(code="US-CA", name="California", country_code="US"),
        States(code="JP-01", name="Hokkaido", country_code="JP"),
        States(code="PT-11", name="Lisboa", country_code="PT"),
        States(code="FR-IDF", name="Île-de-France", country_code="FR"),
    ]
    session.add_all(states)
    session.commit()

    # -------------------------------
    # CITIES
    # -------------------------------
    cities = [
        Cities(code=1, name="Joinville", state_code="BR-SC"),
        Cities(code=2, name="San Diego", state_code="US-CA"),
        Cities(code=3, name="Sapporo", state_code="JP-01"),
        Cities(code=4, name="Montijo", state_code="PT-11"),
        Cities(code=5, name="Paris", state_code="FR-IDF"),
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
            user_birth=date(2006, 10, 14),
            user_countryId="BR",
            user_stateId="BR-SC",
            user_cityId=1,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="US",
            wish_country_two="PT",
            wish_country_three="JP",
            travel_type=ETravelType.BUSINESS,
        ),
        Users(
            user_name="Gustavo Floriano",
            user_email="gustavo@gmail.com",
            user_nickname="Peba",
            user_phone="47 99999-9999",
            user_birth=date(2006, 9, 7),
            user_countryId="US",
            user_stateId="US-CA",
            user_cityId=2,
            user_password=bcrypt.hashpw("senha".encode(), bcrypt.gensalt()).decode(),
            wish_country_one="BR",
            wish_country_two="PT",
            wish_country_three="JP",
            travel_type=ETravelType.BUSINESS,
        ),
    ]
    session.add_all(users)
    session.commit()

    # -------------------------------
    # AEROPORTS
    # -------------------------------
    aeroports = [
        Aeroports(
            name="Aeroporto de Joinville",
            address="Rua do Aeroporto de Joinville",
            iata_code="JOI",
            icao_code="SBJV",
            state="BR-SC",
            city=1,
        ),
        Aeroports(
            name="San Diego International Airport",
            address="North Harbor Drive",
            iata_code="SAN",
            icao_code="KSAN",
            state="US-CA",
            city=2,
        ),
        Aeroports(
            name="New Chitose Airport",
            address="Chitose",
            iata_code="CTS",
            icao_code="RJCC",
            state="JP-01",
            city=3,
        ),
        Aeroports(
            name="Lisbon Airport",
            address="Alameda das Comunidades Portuguesas",
            iata_code="LIS",
            icao_code="LPPT",
            state="PT-11",
            city=4,
        ),
        Aeroports(
            name="Charles de Gaulle Airport",
            address="Roissy-en-France",
            iata_code="CDG",
            icao_code="LFPG",
            state="FR-IDF",
            city=5,
        ),
    ]
    session.add_all(aeroports)
    session.commit()

    # -------------------------------
    # PLANES
    # -------------------------------
    planes = [
        Planes(model="Boeing 747", total_seats=410),
        Planes(model="Airbus A320", total_seats=180),
        Planes(model="Boeing 737", total_seats=160),
    ]
    session.add_all(planes)
    session.commit()

    # -------------------------------
    # SEATS
    # -------------------------------
    seats = [
        Seats(code="A1", location="Window", plane_id=1),
        Seats(code="A2", location="Middle", plane_id=1),
        Seats(code="B1", location="Window", plane_id=2),
        Seats(code="B2", location="Middle", plane_id=2),
        Seats(code="C1", location="Aisle", plane_id=3),
    ]
    session.add_all(seats)
    session.commit()

    # -------------------------------
    # FLIGHTS
    # -------------------------------
    flights = [
        Flights(
            title="Joinville → San Diego",
            type=ETypeFlight.DIRECT,
            fare="Economy",
            price=Decimal("2500.00"),
            brand="PacknGo",
            destinyId=2,
            originId=1,
            departureDate=datetime(2025, 12, 12, 12, 12),
            departure="Gate 21",
            arriving=datetime(2025, 12, 12, 22, 12),
            duration_min=600,
            weather=EWeather.LIMPO,
            planeId=1,
        ),
    ]
    session.add_all(flights)
    session.commit()

    # -------------------------------
    # TAGS
    # -------------------------------
    tags = [
        Tags(description="Disponível", color="#22c55e"),
        Tags(description="Lotado", color="#ef4444"),
        Tags(description="Últimos assentos", color="#f97316"),
        Tags(description="Desconto", color="#3b82f6"),
        Tags(description="Em destaque", color="#a855f7"),
    ]
    session.add_all(tags)
    session.commit()

    return {"success": True}


@router.delete("/dropBaseData")
async def drop_base_data(session = Depends(get_session)):

    session.query(Tags).delete()
    session.commit()

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

    return {
        "success": True,
        "message": "Base data removida com sucesso."
    }



#endregion
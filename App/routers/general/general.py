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
@router.post("/insertBaseData")
async def insert_base_data(session = Depends(get_session)):
    #region inserts
    #region geo
    #region countries
    country1 = Countries(
        name="Brazil",
        code="BR",
    )
    country2 = Countries(
        name="United States of America",
        code="US",
    )
    country3 = Countries(
        name="Japan",
        code="JP",
    )
    country4 = Countries(
        name="Portugal",
        code="PT",
    )
    
    session.add(country1, country2, country3, country4)
    #endregion
    #region states
    state1 = States(
        name="Santa Catarina",
        code="BR-SC",
        country_code="BR",
        country="BR"
    )
    state2 = States(
        name="California",
        code="US-CA",
        country_code="US",
        country="US"
    )
    state3 = States(
        name="Hokkaidô",
        code="JP-01",
        country_code="JP",
        country="JP"
    )
    state4 = States(
        name="Lisboa",
        code="PT-11",
        country_code="PT",
        country="PT"
    )
    
    session.add(state1, state2, state3, state4)
    #endregion
    #region cities
    city1 = Cities(
        name="Joinville",
        code=1,
        state="BR-SC",
        state_code="BR-SC"
    )
    city2 = Cities(
        name="San Diego",
        code=2,
        state="US-CA",
        state_code="US-CA",
    )
    city3 = Cities(
        name="Sapporo",
        code=3,
        state="JP-01",
        state_code="JP-01",
    )
    city4 = Cities(
        name="Montijo",
        code=4,
        state="PT-11",
        state_code="PT-11",
    )
    
    session.add(city1, city2, city3, city4)
    #endregion
    #endregion
    #region users
    user1 = Users(
        user_name="Johann Gossen Ruth",
        user_email="johann@gmail.com",
        user_nickname="Levirroh",
        user_phone="47 99999-9999",
        user_birth="2006/14/10",
        user_country="BR",
        user_state="BR-SC",
        user_city=1,
        user_password=bcrypt.hashpw("senha".encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
        wish_country_one="US",
        wish_country_two="PT",
        wish_country_three="JP",
        travel_type="Business",
    )
    user2 = Users(
        user_name="Gustavo Floriano",
        user_email="gustavo@gmail.com",
        user_nickname="Peba",
        user_phone="47 99999-9999",
        user_birth="2006/07/09",
        user_country="US",
        user_state="US-CA",
        user_city=2,
        user_password=bcrypt.hashpw("senha".encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
        wish_country_one="BR",
        wish_country_two="PT",
        wish_country_three="JP",
        travel_type="Business",
    )
    user3 = Users(
        user_name="Vitor Hugo da Cunha",
        user_email="vh@gmail.com",
        user_nickname="Mini Veiga",
        user_phone="47 99999-9999",
        user_birth="2006/01/01",
        user_country="JP",
        user_state="JP-01",
        user_city=3,
        user_password=bcrypt.hashpw("senha".encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
        wish_country_one="BR",
        wish_country_two="PT",
        wish_country_three="US",
        travel_type="Business",
    )
    user4 = Users(
        user_name="João Caetano Constantino",
        user_email="jcc@gmail.com",
        user_nickname="Python constantino",
        user_phone="47 99999-9999",
        user_birth="2006/02/02",
        user_country="PT",
        user_state="PT-11",
        user_city=4,
        user_password=bcrypt.hashpw("senha".encode("utf-8"), bcrypt.gensalt()).decode("utf-8"),
        wish_country_one="BR",
        wish_country_two="JP",
        wish_country_three="US",
        travel_type="Business",
    )
    session.add(user1, user2, user3, user4)
    #endregion
    #region aeroports
    aeroport1 = Aeroports(
        name="Aeroporto de Joinville",
        adress= "Rua: Rua do Aeroporto de Joinville, Bairro: Bairro do Aeroporto de Joinville",
        state="BR-SC",
        city=1
    )
    aeroport2 = Aeroports(
        name="San Diego Airport",
        adress= "Yes",
        state="US-CA",
        city=2
    )
    aeroport3 = Aeroports(
        name="Aeroporto do Japão",
        adress= "No",
        state="JP-01",
        city=3
    )
    aeroport4 = Aeroports(
        name="Aeroporoto das",
        adress= "Maybe",
        state="PT-11",
        city=4
    )
    session.add(aeroport1, aeroport2, aeroport3, aeroport4)
    #endregion
    #region planes
    plane1 = Planes(
        model = "Boeing 747",
        total_seats = 410 
    )
    plane2 = Planes(
        model = "Airbus A380",
        total_seats = 368  
    )
    plane3 = Planes(
        model = "Airbus A330-300",
        total_seats = 305  
    )
    plane4 = Planes(
        model = "Caravan da Azul",
        total_seats = 9 
    )
    session.add(plane1, plane2, plane3, plane4)
    #endregion
    #region seats
    #plane 1
    seat1_1 = Seats(
        code = "A1",
        plane_id = 1,
    )
    seat1_2 = Seats(
        code = "A2",
        plane_id = 1,
    )
    seat1_3 = Seats(
        code = "B1",
        plane_id = 1,
    )
    seat1_4 = Seats(
        code = "B2",
        plane_id = 1,
    )
    session.add(seat1_1, seat1_2, seat1_3, seat1_4)
    #plane 2
    seat2_1 = Seats(
        code = "A1",
        plane_id = 2,
    )
    seat2_2 = Seats(
        code = "A2",
        plane_id = 2,
    )
    seat2_3 = Seats(
        code = "B1",
        plane_id = 2,
    )
    seat2_4 = Seats(
        code = "B2",
        plane_id = 2,
    )
    session.add(seat2_1, seat2_2, seat2_3, seat2_4)
    
    #plane 3
    seat3_1 = Seats(
        code = "A1",
        plane_id = 3,
    )
    seat3_2 = Seats(
        code = "A2",
        plane_id = 3,
    )
    #plane 4
    seat4_1 = Seats(
        code = "B1",
        plane_id = 4,
    )
    seat4_2 = Seats(
        code = "B2",
        plane_id = 4,
    )
    session.add(seat3_1, seat3_2, seat4_1, seat4_2)
    
    
    #endregion
    #region flights
    flights1 = Flights(
        title = "Voo 1",
        destiny = 1,
        origin = 2,
        departure = "2025/12/12 12:12",
        arriving = "2025/12/12 16:12",
        duration = "04:00",
        weather = WeatherEnum.LIMPO,
        plane = 1,
    )
    flights2 = Flights(
        title = "Voo 2",
        destiny = 2,
        origin = 3,
        departure = "2025/12/12 12:12",
        arriving = "2025/12/12 16:12",
        duration = "04:00",
        weather = WeatherEnum.ENSOLARADO,
        plane = 2,
    )
    flights3 = Flights(
        title = "Voo 3",
        destiny = 3,
        origin = 4,
        departure = "2025/12/12 12:12",
        arriving = "2025/12/12 16:12",
        duration = "04:00",
        weather = WeatherEnum.TEMPESTADE,
        plane = 3,
    )
    flights4 = Flights(
        title = "Voo 3",
        destiny = 4,
        origin = 1,
        departure = "2025/12/12 12:12",
        arriving = "2025/12/12 16:12",
        duration = "04:00",
        weather = WeatherEnum.CHOVENDO,
        plane = 6,
    )
    session.add(flights1, flights2, flights3, flights4)
    #endregion
    #endregion

    return {200}


#endregion
from .country_model import Countries
from .state_model import States
from .city_model import Cities
from .user_model import Users
from .aeroport_model import Aeroports
from .flight_model import Flights
from .plane_model import Planes
from .seat_model import Seats

Users.model_rebuild()
Countries.model_rebuild()
States.model_rebuild()
Cities.model_rebuild()
Aeroports.model_rebuild()
Flights.model_rebuild()
Planes.model_rebuild()
Seats.model_rebuild()
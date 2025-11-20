from .country_model import Country
from .state_model import State
from .city_model import City
from .user_model import User
from .aeroport_model import Aeroport
from .flight_model import Flight
from .plane_model import Plane
from .seat_model import Seat

User.model_rebuild()
Country.model_rebuild()
State.model_rebuild()
Aeroport.model_rebuild()
Flight.model_rebuild()
Plane.model_rebuild()
Seat.model_rebuild()
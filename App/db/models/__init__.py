from .country_model import Country
from .state_model import State
from .city_model import City
from .user_model import User

User.model_rebuild()
Country.model_rebuild()
State.model_rebuild()
City.model_rebuild()
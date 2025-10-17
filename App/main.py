from fastapi import Depends, FastAPI

from .dependencies import get_query_token, get_token_header

from .routers.users import users
## or from .routers import users  #this will import everything, that can create a colision with names, e.g. the above especifies

app = FastAPI(dependencies=[Depends(get_query_token)])

app.include_router(users.router)
# e. g. app.include_router(items.router) ...
# app.include_router(
#     admin.router,
#     prefix="/admin",
#     tags=["admin"],
#     dependencies=[Depends(get_token_header)],
#     responses={418: {"description": "I'm a teapot"}},
# )


'''
@app.post   : to create data.
@app.get    : to read data.
@app.put    : to update data.
@app.delete : to delete data.
'''

@app.get("/")
async def root():
    return {"message": "Hello World"}
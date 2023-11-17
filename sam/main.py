from fastapi import FastAPI, HTTPException, Depends, Form
import crud, models, schemas
from database import Session, engine
from fastapi.middleware.cors import CORSMiddleware

models.Base.metadata.create_all(bind=engine)

app = FastAPI()


def get_db():
    db = Session()
    try:
        yield db
    finally:
        db.close()


# Solucion al Cors
app.add_middleware(
    CORSMiddleware,
    # Aca se puede crear un array con la url de los origenes permitidos y darle ese valor a esta variable, el * es para q acepte todos los origenes
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#### FUNCIONES PACIENTES #####

###registrar cto
@app.post("/paciente/registrar", response_model=schemas.Pacientes)
def create_paciente(Pacientes: schemas.PacientesCreate, db: Session = Depends(get_db)):
    return crud.create_paciente(db=db, Pacientes=Pacientes)
@app.get("/x", response_model=schemas.Pacientes)
def s(Pacientes: schemas.PacientesCreate, db: Session = Depends(get_db)):
    return crud.x(db=db)
###inicia sesion
@app.post("/paciente/login/", response_model=schemas.Pacientes)
def login(
    nombre: str = Form(...), contrasena: str = Form(...), db: Session = Depends(get_db)
):
    login = crud.login(db=db, nombre=nombre, contrasena=contrasena)
    if login is None:
        raise HTTPException(status_code=404, detail="false")
    return login

########## FUNCIONES RECETAS #################################

@app.post("/recetas/crear/{id_doctor}", response_model=schemas.Recetas)
def create_receta(id_doctor: int, Receta: schemas.RecetasCreate, db: Session = Depends(get_db)):
    doc = crud.get_doc(db=db, id=id_doctor)
    if doc is None:
        raise HTTPException(status_code=404, detail="doctor inexistente")
    else:
        return crud.create_receta(db=db, Receta=Receta, id=id_doctor)

@app.get("/")
def home():
    return "First FastAPI app"

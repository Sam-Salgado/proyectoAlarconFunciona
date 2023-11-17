from pydantic import BaseModel
from datetime import date


### esquemas pydantic vara validar tipo de datos antes de entrar a la base de datos
class PacientesBase(BaseModel):
    nombre: str
    apellido: str
    gmail: str
    contrasena: str
    dni: int


class PacientesCreate(PacientesBase):
    pass


class Pacientes(PacientesBase):
    ID: int

    class Config:
        orm_mode = True
        
###########DOCTORES####################

class DoctoresBase(BaseModel):
    nombre: str
    apellido: str
    especialidad: str


class DoctoresCreate(DoctoresBase):
    pass


class Doctores(DoctoresBase):
    ID: int

    class Config:
        orm_mode = True
        
##############RECETAS################

class RecetasBase(BaseModel):
    medicamentos: str
    fecha: date
    recomendaciones: str
    


class RecetasCreate(RecetasBase):
    pass


class Recetas(RecetasBase):
    ID: int
    ID_DOCTOR: int

    class Config:
        orm_mode = True
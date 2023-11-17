from sqlalchemy.orm import Session
import models, schemas

#########FUNCIONES CON SQLALCHEMY PARA HACER PETICIONES A LA BD

###crea un paciente
def create_paciente(db: Session, Pacientes: schemas.PacientesCreate):
    new_paciente = models.Pacientes(nombre=Pacientes.nombre,apellido=Pacientes.apellido,gmail=Pacientes.gmail,contrasena=Pacientes.contrasena, dni=Pacientes.dni)
    db.add(new_paciente)
    db.commit()
    db.refresh(new_paciente)
    return new_paciente


####funcion inicio sesion
def login(db: Session, nombre: str, contrasena: str):
    return (
        db.query(models.Pacientes)
        .filter(models.Pacientes.nombre == nombre, models.Pacientes.contrasena == contrasena)
        .first()
    )
    
    
############funciones doctores#############
 
def get_doc(db: Session, id: int):
    return db.query(models.Doctor).filter(models.Doctor.ID== id).first()
    
   
##########funciones recetas##########


def create_receta(db: Session, Receta: schemas.RecetasCreate, id: int):
    new_receta = models.Recetas(medicamentos=Receta.medicamentos, fecha=Receta.fecha, recomendaciones=Receta.recomendaciones, ID_Doctor=id)
    db.add(new_receta)
    db.commit()
    return new_receta

def x(db:Session):
    return db.query(models.Pacientes).all()
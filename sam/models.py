from sqlalchemy import Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


###### estas son las clases definifas con sqlalchemy(desde aca se anaden las tablas para la BD)
class Pacientes(Base):
    __tablename__ = "Pacientes"

    ID = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String)
    apellido = Column(String)
    gmail = Column(String)
    contrasena = Column(String)
    dni = Column(Integer)
    

class Doctor(Base):
    __tablename__ = 'Doctor'
    
    ID = Column(Integer, primary_key=True, autoincrement=True)
    nombre = Column(String)
    apellido = Column(String)
    especialidad = Column(String)
    
    doctor = relationship("Recetas", back_populates="recetas")
    
class Recetas(Base):
    __tablename__ = 'Recetas'
    
    ID = Column(Integer, primary_key=True, autoincrement=True)
    medicamentos = Column(String)
    fecha = Column(Date)
    recomendaciones = Column(String)
    ID_Doctor = Column(Integer, ForeignKey("Doctor.ID"))
    
    recetas = relationship("Doctor", back_populates="doctor")
    
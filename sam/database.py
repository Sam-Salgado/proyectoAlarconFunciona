from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

# Crear una instancia de SQLAlchemy Engine para la conexión a la base de datos $$$$$$$$$$
engine = create_engine("sqlite:///samdatabase.db")

# Crear una sesión para interactuar con la base de datos $$$$$$$$
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()
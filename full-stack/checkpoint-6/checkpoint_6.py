""" 
    EJERCICIO CHECKPOINT 6
"""
#   Importamos colorama para dar formato a la salida
from colorama import Fore, Style, init

 # Inicializamos colorama 
init() 


#   Definimos la clase usuario
class Usuario:
    #   Generamos el usuario y la contraseña
    def __init__(self, nombre_usuario, pasw):
        self.nombre_usuario = nombre_usuario
        self.pasw = pasw

    def mostrar_info(self):
        print(f"\n\tNOMBRE DE USUARIO:\t {Fore.MAGENTA}{self.nombre_usuario}{Style.RESET_ALL}")
        print(f"\tPASSWORD:\t\t{Fore.RED} {self.pasw}{Style.RESET_ALL}\n")

# Creamos un objeto de la clase Usuario
usuario1 = Usuario("Israel", "checkpoint6")

# Mostramos la información(nombre,contraseña) del usuario
usuario1.mostrar_info()

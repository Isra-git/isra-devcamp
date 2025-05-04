""" 
Prueba de scrapper web 
     https://quotes.toscrape.com/
"""

#   Importaciones
import requests
from bs4 import BeautifulSoup

 
from colorama import init, Fore, Style

#Inicializa colorama para dar formato al texto de salida
init()

#   Constantes -> direccion, texto y autor
URL = 'https://quotes.toscrape.com/'
TAG_TEXTO = 'texto'
TAG_AUTOR = 'author'

#   Hace la peticion
peticion = requests.get(URL)

#   Formatea el html con beautiful soup
formateo_html = BeautifulSoup(peticion.text, 'html.parser')

#   Busca los enlaces de texto de las citas (span class='text') y las guarda
citas_spans = [cita.text for cita in formateo_html.find_all('span', class_='text')]

#   Busca los autores de las citas (small class='author') y las guarda
autores_smalls = [autor.text for autor in formateo_html.find_all('small', class_='author')]

#   Junta las dos listas para obtener una lista de listas(cita,autor)
citas_autores = list(zip(citas_spans, autores_smalls))

#    Imprime la cabecera del rograma
print(f'\n\tPROGRAMA QUE OBTIENE UNA LISTA DE CITAS Y AUTORES DE LA PAGINA:'
      f'\n\t\t {URL}\n')
#   Da formato e imprime la lista de citas con sus autores
for cita,autor in citas_autores:
    print(
     f'\tCita:{Fore.BLUE} {cita.strip('“”"')}{Style.RESET_ALL}\n'
     f'\tAutor:{Fore.GREEN}{autor.upper()}{Style.RESET_ALL}\n\n'
     )

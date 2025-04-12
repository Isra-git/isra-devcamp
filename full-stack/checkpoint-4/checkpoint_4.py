#Checkpoint 4

import math
from decimal import Decimal

#Exercise 1: Create a list, tuple, float, integer, decimal, and dictionary.
lista = ['yo','tu','el','nosotros','vostros']
tupla = ('tupla1','tupla2','tupla3','tupla4')
flotante = 9.25
entero = 16
numero_dec = Decimal('19.25')
diccionario = {
    'clave1' : 'valor1',
    'clave2' : 'valor2',
    'clave3' : 'valor3',
    'clave4' : 'valor4',
    }


#Exercise 2: Round your float up.
redondeado_up = math.ceil(flotante) 
print(f'El numero {flotante}, redondeado haci arriba es {redondeado_up}')


#Exercise 3: Get the square root of your float
cuadrado_flotante = math.sqrt(flotante)
print(f'La raiz cuadrada de {flotante} es: {cuadrado_flotante}')


#Exercise 4: Select the first element from your dictionary
#Si es referido al primer par [clave]:[valor]
primero =next(iter(diccionario.items()))
print(f'El primer par clave:valor del diccionario es: {primero}')

#Si es referido al primer valor
primer_valor = diccionario.get('clave1')
print(f'El valor de la primera clave es: {primer_valor}')


#Exercise 5: Select the second element from your tuple.
tupla_dos = tupla[1]
print(f'El segundo elemento de la tupla es: {tupla_dos}')

#Exercise 6: Add an element to the end of your list.
lista.append('ellos')
print(f'El ultimo elemento añadido a la lista es: {lista[-1].capitalize()}')


#Exercise 7: Replace the first element in your list.
lista[0] = 'aquellos'
print(f'El primer valor de la lista es {lista[0].capitalize()}')

#Exercise 8: Sort your list alphabetically.
lista.sort()
print(f'El resultado de la lista ordenada alfabeticamente es:\n{lista}')


#Exercise 9: Use reassignment to add an element to your tuple.
tupla = tupla + ('tupla5',)
print(f'El contenido de tupla ahora es:\n {tupla}')
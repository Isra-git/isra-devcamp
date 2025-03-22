"""
Ejercicion CheckPoint 3
"""

#1
string = 'Cadena de texto'

numero = 15

lista = ['item_1','item_2','item_3', 'item_4']

booleano = True


#2
string_index_3 = string[:3]
print (f'Los tres primeros elementos son: {string_index_3}')

#3
string_first_element = string[0]
print (f'El primer elemento es: {string_first_element}')

#4
nuevo_numero = numero + 10
print (f'El resultado de sumar 10 a {numero} es: {nuevo_numero}')

#5
string_last_element = string[-1]
print(f'El ultimo elemento de  {string} es: {string_last_element}')

#6
names = 'harry,alex,susie,jared,gail,conner'
tranformed_list = names.split(',')
print('Elementos de la lista: ')
for indice in tranformed_list:
    print(f'NOMBRE: {indice}')

#7
primera_palabra = string.split()[0].upper()
print (f'La primera palabra de {string} es: {primera_palabra}')
palabra_completa = string + ' '+primera_palabra
print(palabra_completa)

#8
print(f'El numero que hay en la variable es: {numero}')

#9
print('hola mundo')

#Reemplazo de cadenas
cadena = 'Hola buenos dias'
cadena_buscada = cadena.find('Hola')
if cadena_buscada >= 0 :
    cadena_encontrada = cadena[cadena_buscada:(len('Hola'))]
    print(f'Cadena encontrada: {cadena_encontrada}')
    
    cadena_reemplazada = cadena.replace('Hola','adios')
    print(f'Cadena modificada: {cadena_reemplazada}')
else:
    cadena_encontrada = 'Lo siento no la encontre..'
 

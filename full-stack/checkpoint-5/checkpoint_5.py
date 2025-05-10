""" 
    CHECKPOINT 5
"""
# Cree un bucle For de Python.
for contador in range(1,11):
    print(contador)


# Cree una función de Python llamada suma que tome 3 argumentos y devuelva la 
# suma de los 3
def suma(num1, num2, num3):
    return num1+num2+num3

sumar = suma(1,2,3)
print(f'La suma de los numeros da:\t {sumar}')


# Cree una función lambda con la misma funcionalidad que la función de suma que 
# acaba de crear.
sumador = lambda num1, num2, num3: num1+num2+num3

sumar = suma(1, 2, 3)
print(f'La suma de los números da:\t {sumar}')


# Utilizando la siguiente lista y variable, determine si el valor de la variable 
# coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un
# bucle for in y el operador in.


nombre = 'Enrique'
lista_nombre = 'Jessica', 'Paul', 'George', 'Henry', 'Adán'

if nombre in lista_nombre:
    print(f' El nombre: {nombre}, esta contenido en la lista')
else:
        print(f' El nombre: {nombre}, NO esta contenido en la lista')

# Con bucle for...
esta = False
for name in lista_nombre:
    if name == lista_nombre:
        esta = True
        break

if esta:
    print ('El nombre esta en la lista')
else:
    print('El nombre no esta en la lista')
        

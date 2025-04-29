"""
Programa FizzBuzz (sin bucle while interactivo)
"""
def fizzbuzz(max_num):
    for contador in range(1, (max_num + 1)):
        if contador % 15 == 0:
            print('FizzBuzz')
        elif contador % 5 == 0:
            print('Buzz')
        elif contador % 3 == 0:
            print('Fizz')
        else:
            print(contador)


try:
    numero = input('Introduzca un numero: ') # Puedes reemplazar 15 con otro número
    numero = int(numero)
except:
    numero = 16    

print('\n')

if numero >= 1:
    fizzbuzz(numero)
else:
    print('Por favor...introduzca un número válido')
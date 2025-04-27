""" 
Programa FizzBuzz
"""
def fizzbuzz(max_num):

    for contador in range(1,(max_num+1)):
        if contador % 15 == 0:
            print('FizzBuzz')
            continue
        elif contador % 5 == 0:
            print('Buzz')
            continue
        elif contador % 3 == 0:
            print('Fizz')
            continue
        else:
            print(contador)

while True:
    numero = input('Introduce un numero (q para salir): ')
    if numero == 'q':
        break
    else: 
        numero=int(numero)
        if numero >=1:
            fizzbuzz(numero)
        else:
            print('Introduzca un numero valido¡¡')
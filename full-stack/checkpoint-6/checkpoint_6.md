# <mark> CHECKPOINT 6</mark>

# 1) **¿Para qué usamos Clases en Python?**<img title="" src="ICONO.png" alt="" width="50">

### ¿Qué es una clase?

Una **clase** es como una plantilla que usamos para **crear objetos**. Nos permite <u>representar conceptos del mundo real</u> en código, como una persona, un auto o un libro.

Las clases **proveen** una forma de empaquetar **datos (atributos) y funcionalidad ( metodos)** juntos. Al crear una nueva clase, se crea un nuevo *tipo* de objeto, permitiendo crear nuevas *instancias* de ese tipo.

### ¿Para qué se usa?

- Para representar los problemas del mundo real, transladandolos al código.

- Para organizar y reutilizar el código.

- Para almacenar tanto datos como funciones que actúan sobre esos datos.

Las **definiciones de clases**, al igual que las definiciones de funciones (instrucciones [`def`](https://docs.python.org/es/3.13/reference/compound_stmts.html#def)) <u>deben ejecutarse antes de que tengan efecto alguno</u>.

### ¿De que partes se compone?

- [ ] Definicion de la clase:  Para crear una nueva clase, se utiliza la palabra reservada  **`class`** :
  
  ```python
  class MiPrimeraClase:
      #Codigo de la clase
  ```

- [ ] Definimos los  **atributos** (variables) necesarios
  
  ```python
  class MiPrimeraClase:
      # Definimos los atributos 
      variable_1 = 'valor variable 1'
      variable_2 = 'valor variable 2'
  ```

- [ ] Definimos el **metodo constructor** de la clase: Se utiliza el metodo especial **__init___**:
  
  ```python
  class MiPrimeraClase:
      # Definimos el constructor
     __init__(self, argumento_1):
          #inicializamos el atributo
          self.argumento_1 = argumento_1
  ```

- [ ] Definimos los **metodos** (funciones) de la clase:
  
  ```python
  class MiPrimeraClase:
   atributo_1 = "valor 1"
   atributo_2 = "valor 2"
   def __init__(self, argumento_1):
       self.argumento_1 = argumento_1
   def metodo_1(self):
       print("Este es el primer metodo de la clase")
       print(f"El valor del argumento_1 es: {self.argumento_1}")
       print(f"El valor del argumento_2 es: {self.argumento_2}")
  ```

- [ ] Creamos una **instancia de la clase** ( creamos una ficha individual a la que llamaremos primera_instancia, de la plantilla MiPrimeraClase):
  
  ```python
    class MiPrimeraClase:
        atributo_1 = "valor 1"
        atributo_2 = "valor 2"
  
        def __init__(self, argumento_1):
            self.argumento_1 = argumento_1
  
        def metodo_1(self):
            print("Este es el primer metodo de la clase")
            print(f"El valor del argumento_1 es: {self.argumento_1}")
            print(f"El valor del argumento_2 es: {self.argumento_2}")
  
        # Creamos la instancia de la clase
        primera_instancia = MiPrimeraClase()
  ```

- [ ] Utilizamos la instancia de la clase, para acceder al metodo_1:
  
  ```python
  class MiPrimeraClase:
     atributo_1 = "valor 1"
     atributo_2 = "valor 2"
     def __init__(self, argumento_1):
         self.argumento_1 = argumento_1
     def metodo_1(self):
         print("Este es el primer metodo de la clase")
         print(f"El valor del argumento_1 es: {self.argumento_1}")
         print(f"El valor del argumento_2 es: {self.argumento_2}")
  
  # Creamos la instancia de la clase
  primera_instancia = MiPrimeraClase()
  
  # Accedemos al metodo_1
  primera_instancia.metodo_1() 
  ```

### Representación visual:

```
Clase: MiPrimeraClase
---------------
Atributos:
- atributo_1
- atributo_2
Métodos:
- metodo_1()
```

## **EN RESUMEN:**

Las **clases** nos sirven **para poder llevar a un plano abstracto** o imaginario, **objetos de la vida real**; pueden tener atributos (tamaño, nombre, color...), métodos (Modificar algo, borrar algo, o hacer algo en general) y creas objetos de ellos (Osea, creas una nueva instancia de esa clase, con diferentes atributos).

---

# 2) ¿Qué método se ejecuta Automáticamente cuando se crea una instancia de una clase? <img title="" src="ICONO.png" alt="" width="50">

El método que se ejecuta automáticamente al crear una instancia de una clase es el **método especial** **__init__()**.

### ¿Qué es `__init__()`?

`__init__` es un método **dunder** (abreviatura de "double underscore") que actúa como el **constructor** de la clase. Esto significa que se ejecuta **automáticamente** cada vez que se crea un nuevo objeto (instancia) a partir de la clase.

### ¿Para qué se utiliza?

Se utiliza principalmente para **inicializar** el nuevo objeto, asignandole a los atributos valores específicos. Sirve para configurar el estado inicial del objeto.

### Sintaxis básica

```python
class NombreDeLaClase: 
    def __init__(self, parametros):
```

- `self`: hace referencia al objeto que se está creando. Hace referencia a si mismo.

- Los parámetros después de `self` son los que se usan para pasar información al objeto al momento de su creación.

### Ejemplo básico

```python
class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre  
        self.edad = edad      

persona1 = Persona("Carlos", 25)
print(persona1.nombre)  
print(persona1.edad)
```

### Explicación paso a paso:

1. Se define la clase `Persona`.

2. El método `__init__()` toma los parámetros `nombre` y `edad`.

3. Dentro del método se asignan estos valores a los atributos `self.nombre` y `self.edad`.

4. Cuando se crea `persona1`, Python llama automáticamente al método `__init__()`.

### Ejemplo con impresión en pantalla:

```python
class Animal:  
    def __init__(self, especie):
        print("Creando un nuevo animal...")
        self.especie = especie
        print(f"Este animal es un {self.especie}.")


animal1 = Animal("León")
```

**Salida:**

```python
Creando un nuevo animal...Este animal es un León.
```

### ¿Qué pasa si no defino `__init__()`?

Si no lo defines, Python usará un constructor por defecto. Pero no podrás pasar valores al crear el objeto.

```python
class Vehiculo:   
    pass

v = Vehiculo()  # Funciona, pero no puedes pasar parámetros
```

### ¿Se puede sobrecargar `__init__()`?

Python no permite sobrecarga directa de métodos como otros lenguajes. Pero puedes usar valores por defecto:

```python
class Usuario:  
  def __init__(self, nombre="Invitado"):  
    self.nombre = nombre

u1 = Usuario("Laura")
u2 = Usuario()

print(u1.nombre)  # Salida -> Laura
print(u2..nombre) # Salida-> Invitado
```

### Conclusión

El método `__init__()` es<u> fundamental para trabajar con clases en Python</u>, ya que permite **establecer el estado inicial de cada objeto** de forma automática y personalizada

```python
    class Animal:
        def __init__(self, especie):
            self.especie = especie
            print("Objeto creado")

    perro = Animal("Perro") # Se ejecuta **init**
```

Pero a parte de inicializar atributos y configurar valores predeterminados tambien **permite realizar otro tipo de operaciones**, que pueden resultar interesantes:

-  **Realizar validaciones**: Puedes comprobar si los argumentos pasados cumplen ciertas condiciones antes de asignarlos a los atributos.

```python
class Animal:
    def __init__(self, especie):
        if not isinstance(especie, str) or not especie.strip():
            raise ValueError("La especie debe ser una cadena de texto no vacía")

        self.especie = especie
        print("Objeto creado")

# Casos de prueba
perro = Animal("Perro")  # Se ejecuta correctamente
gato = Animal("  ")      # Lanza una excepción
numero = Animal(123)     # Lanza una excepción
```

- **Ejecutar lógica de inicialización**: Si necesitas realizar cálculos o configurar conexiones, __init__() es un buen lugar para hacerlo.

```python
import math

class Circulo:
    def __init__(self, radio):
        if radio <= 0:
            raise ValueError("El radio debe ser un número positivo")

        self.radio = radio
        self.area = math.pi * radio ** 2  # Cálculo del área en la inicialización
        print(f"Objeto creado con radio {radio} y área {self.area:.2f}")

# Creando instancias
c1 = Circulo(5)  # Salida: Objeto creado con radio 5 y área 78.54
c2 = Circulo(10)  # Salida: Objeto creado con radio 10 y área 314.16
```

- **Puedes ejecutar otros métodos** al momento de crear la instancia.

```python
  class Persona:
    def __init__(self, nombre):
        self.nombre = nombre
        self.saludar()  # Llamamos al método saludar al crear la instancia

    def saludar(self):
        print(f"Hola, mi nombre es {self.nombre}")

    # Crear una instancia de la clase ejecutará el método saludar automáticamente
    persona1 = Persona("Carlos")  
```

---

# **3) ¿Cuáles son los tres verbos principales de una API?** <img title="" src="ICONO.png" alt="" width="50">

Las **APIs** REST (Representational State Transfer) utilizan **métodos HTTP** para permitir la comunicación entre clientes y servidores. Entre estos métodos, <u>hay tres fundamentales </u>que representan las acciones básicas en la manipulación de datos: **GET, POST y DELETE**. A continuación, exploraremos cada uno en detalle.

## GET: Obtener datos

El método GET se usa para **recuperar información** desde el servidor. **No modifica** datos, solo los solicita y los devuelve en formato como JSON, XML o HTML, dependiendo de la configuración de la API.

<u>Ejemplo práctico</u>
Si tenemos una API de usuarios, podríamos hacer una petición GET para obtener la lista de todos los usuarios:

```python
GET /usuarios
```

El servidor respondería con un JSON que contiene los datos de los usuarios:

```python
[
  {"id": 1, "nombre": "Carlos"},
  {"id": 2, "nombre": "Ana"},
  {"id": 3, "nombre": "Luis"}
]
```

El uso de **GET** es fundamental para que los clientes **accedan a los datos existentes sin riesgo de alterarlos**.

## **POST: Crear o enviar datos**

El método POST se usa para **agregar nueva información** a la base de datos. A diferencia de GET, este método** implica la creación de recursos** y generalmente requiere un cuerpo de solicitud con los datos a enviar.

<u>Ejemplo práctico</u>
Si queremos agregar un nuevo usuario a nuestra API, enviaríamos la siguiente petición:

```python
POST /usuarios
```

Con el siguiente contenido en el cuerpo de la solicitud:

```python
{
  "nombre": "María"
}
```

El servidor procesaría la petición y respondería con el nuevo usuario creado:

```python
{
  "id": 4,
  "nombre": "María"
}
```

Este método se usa normalmente para **formularios en sitios web**, donde **los usuarios pueden enviar información.**

## **DELETE: Eliminar datos**

El método DELETE se emplea para **eliminar recursos del servidor**. Una vez ejecutado, los datos ya no estarán disponibles.

<u>Ejemplo práctico</u>
Si queremos eliminar un usuario con ID 5, haríamos la siguiente petición:

```python
DELETE /usuarios/5
```

Si la **operación es exitosa**, el servidor podría responder con un **código 204** No Content, indicando que el recurso ha sido eliminado.

Este método debe <u>**usarse con precaución**</u>, ya que **borra** datos **de manera permanente.**

Para visualizar cómo funcionan estos métodos en una API, aqui te eneño un esquema de su funcionamiento:

```
Cliente -----> [GET] -----> API -----> Base de datos (Recupera información)
Cliente -----> [POST] ----> API -----> Base de datos (Crea nuevo registro)
Cliente -----> [DELETE] --> API -----> Base de datos (Elimina registro)
```

## 

## **Conclusión**

Los métodos GET, POST y DELETE <u> constituyen la **base del funcionamiento** de una API REST</u>. Mientras que GET permite acceder a los datos sin modificarlos, POST facilita la creación de nuevos registros y DELETE los elimina. Estos métodos son fundamentales para cualquier aplicación web que necesite manejar información entre el cliente y el servidor.

---

# 

# **4) ¿Qué es una API?** <img title="" src="ICONO.png" alt="" width="50">

Una **API** (*Application Programming Interface*, en español **Interfaz de Programación de Aplicaciones**) es un conjunto de reglas y mecanismos que permite que diferentes programas o sistemas se comuniquen entre sí. En esencia, actúa como un puente (conexion) entre aplicaciones, facilitando el intercambio de información y funcionalidades sin necesidad de conocer los detalles internos de cómo están implementadas. Es decir, añade una capa de abstracciòn entre las aplicaciones, permitiendo centrarse mayormente en la lògica de programaciòn.

Las APIs permiten que los desarrolladores **utilicen funcionalidades de otros sistemas** sin tener que construirlas desde cero, lo que ahorra tiempo y esfuerzo en el desarrollo de software.

## **¿Para qué sirve una API?**

Las APIs tienen múltiples usos, pero los principales son:

- **Acceso a servicios externos**: Permiten conectarse a plataformas como sistemas de pago, datos meteorológicos, almacenamiento en la nube, redes sociales, mapas, entre otros.
  
  <u>Ejemplo:</u> Si estás creando una aplicación meteorológica, puedes usar la API de OpenWeather para obtener datos del clima sin necesidad de desarrollar tu propio sistema de recolección de información.

```python
import requests

  url = "https://api.openweathermap.org/data/2.5/weather?q=Irun&appid=TU_CLAVE_API"
  respuesta = requests.get(url)
  print(respuesta.json())
```

- **Conectar aplicaciones**: Ayudan a integrar distintos sistemas para que trabajen juntos de manera fluida.
  
  <u>Ejemplo:</u> Un e-commerce puede conectarse con una API de pago como PayPal o Stripe para procesar compras en línea sin implementar su propio sistema de transacciones.

```python
import stripe

stripe.api_key = "TU_CLAVE_API"
charge = stripe.Charge.create(
    amount=5000,
    currency="eur",
    source="tok_visa",
    description="Compra en tienda"
)
print(charge)
```

- **Automatización de tareas**: Se pueden utilizar para que los programas interactúen sin intervención humana, reduciendo procesos repetitivos.
  
  <u>Ejemplo:</u> Un sistema de gestión empresarial puede utilizar la API de Google Sheets para actualizar automáticamente informes financieros sin intervención manual.

```python
import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds"]
creds = ServiceAccountCredentials.from_json_keyfile_name("credenciales.json", scope)
cliente = gspread.authorize(creds)

hoja = cliente.open("Reporte Financiero").sheet1
hoja.update_cell(2, 3, "Ingresos Actualizados")
```

- **Facilitar el desarrollo**: Muchos sistemas ofrecen APIs para que los desarrolladores creen aplicaciones basadas en sus servicios, como las APIs de Google Maps o Twitter.
  
  <u>Ejemplo:</u> Si estás desarrollando una aplicación móvil con mapas, en lugar de crear tu propio sistema de geolocalización, puedes utilizar la API de Google Maps para mostrar ubicaciones.

```python
import requests

url = "https://maps.googleapis.com/maps/api/geocode/json?address=Irun&key=TU_CLAVE_API"
respuesta = requests.get(url)
print(respuesta.json())
```

- **Intercambio de datos estructurados**: En aplicaciones empresariales, las APIs permiten compartir datos entre distintas plataformas sin depender de formatos específicos.
  
  <u>Ejemplo:</u> En un sistema de recursos humanos, una API interna puede permitir que diferentes módulos (nómina, beneficios, asistencia) compartan información sin depender de bases de datos separadas.

```python
import requests

url = "https://api.empresa.com/empleados/1234"
headers = {"Authorization": "Bearer TU_TOKEN"}
respuesta = requests.get(url, headers=headers)
print(respuesta.json())
```

## **Funcionamiento básico de una API**

Cuando un programa necesita obtener información de otro sistema, utiliza una API enviando una solicitud, generalmente mediante **HTTP**. El servidor procesa la solicitud y responde con los datos solicitados en un formato estructurado como **JSON** o **XML**.

Ejemplo de cómo funciona una solicitud API:

1. El cliente envía una solicitud a la API (por ejemplo, obtener el clima de una ciudad).
2. La API interpreta la solicitud y accede a la base de datos o servicio correspondiente.
3. La API devuelve una respuesta con los datos requeridos en formato JSON o XML.
4. El cliente utiliza esos datos para mostrarlos en la aplicación.

**Diagrama de flujo de una API:**

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\api.png)

---

# 5) **¿Qué es Postman?** <img title="" src="ICONO.png" alt="" width="50">

**Postman** es una herramienta gráfica diseñada para **probar, desarrollar y documentar APIs**. Permite a los desarrolladores enviar solicitudes HTTP, inspeccionar respuestas y automatizar pruebas sin necesidad de escribir código desde cero.

Postman es especialmente útil para **verificar el comportamiento de una API** antes de integrarla en una aplicación,<u> asegurando que los endpoints funcionen </u>correctamente y que <u>los datos se envíen y reciban en el formato adecuado.</u>

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\postman1.svg)

## **¿Por qué se usa Postman?**

Postman facilita el desarrollo y prueba de APIs gracias a sus múltiples funciones, como:

- **Enviar solicitudes HTTP** (`GET`, `POST`, `PUT`, `DELETE`, etc.), lo que permite interactuar con una API sin necesidad de escribir código en un lenguaje de programación.
- **Visualizar respuestas** en formatos como JSON, XML o texto plano, facilitando el análisis de los datos recibidos desde el servidor.
- **Automatizar pruebas** mediante scripts que validan respuestas y flujos de trabajo de la API.
- **Simular llamadas a APIs** sin necesidad de tener una implementación completa de la aplicación.
- **Autenticación y manejo de tokens** para probar APIs que requieren credenciales de acceso.
- **Generación de documentación** para compartir y organizar endpoints de manera sencilla con otros desarrolladores.
- **Entornos configurables**, permitiendo cambiar entre distintas configuraciones de API (producción, desarrollo, pruebas) sin alterar la lógica del código.

## **Instalación y configuración de Postman**

### **1. Instalación**

Postman está disponible para Windows, macOS y Linux. Para instalarlo:

1. Ve al sitio oficial: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
2. Descarga la versión correspondiente a tu sistema operativo.
3. Instala la aplicación siguiendo los pasos del asistente de instalación.
4. Abre Postman y crea una cuenta gratuita para sincronizar tus pruebas y configuraciones.

## **Ejemplo de uso de Postman**

### **1. Enviar una solicitud `GET` a una API**

Supongamos que queremos obtener una lista de usuarios de un servicio externo:

1. **Abrir Postman**.

2. **Elegir el método `GET`** en el menú de selección de métodos.

3. **Escribir la URL de la API**, por ejemplo:
   
   https://api.ejemplo.com/usuarios

4. **Hacer clic en "Send"** para enviar la solicitud al servidor.

5. **Visualizar la respuesta JSON**, que podría verse así:

```json
[
{"id": 1, "nombre": "Carlos"},
{"id": 2, "nombre": "Ana"},
{"id": 3, "nombre": "Luis"}
]
```

### 

### **2. Enviar una solicitud POST para agregar un usuario**

Si queremos enviar datos a la API para registrar un nuevo usuario:

Seleccionar el método POST.

Escribir la URL, por ejemplo:

https://api.ejemplo.com/usuarios
Ir a la pestaña "Body" y elegir raw + JSON.

Ingresar los datos en formato JSON:

```json
{
  "nombre": "María",
  "email": "maria@example.com"
}
```

Hacer clic en "Send" y observar la respuesta del servidor, que podría ser:

```json
{
  "id": 4,
  "nombre": "María",
  "email": "maria@example.com",
  "mensaje": "Usuario creado exitosamente"
}
```

### **3. Enviar una solicitud DELETE para eliminar un usuario**

 Si queremos borrar un usuario específico:

Seleccionar el método DELETE.

Escribir la URL con el ID del usuario a eliminar, por ejemplo:

[https://api.ejemplo.com/usuarios/4]()
Hacer clic en "Send" y revisar la respuesta, que podría ser:

```json
{
  "mensaje": "Usuario eliminado correctamente"
}
```

### **Automatización de pruebas en Postman**

Postman permite escribir ***pequeños scripts en JavaScript*** para validar respuestas y automatizar pruebas. Por ejemplo, si queremos asegurarnos de que la respuesta de una API incluya un código HTTP 200, podemos agregar este script en la pestaña "Tests":

```javascript
pm.test("El estado de la respuesta es 200", function () {
    pm.response.to.have.status(200);
});
```

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\postman2.svg)

## **Conclusión**

Postman es una **herramienta esencial** para cualquier desarrollador que trabaja con APIs. Permite **probar endpoints** de manera sencilla, **visualizar respuestas**, **automatizar pruebas** y **documentar APIs **de forma organizada. Su interfaz intuitiva y sus diversas funciones lo convierten en un recurso imprescindible en el desarrollo moderno.

---

# 6)**¿Qué es el polimorfismo?**  <img title="" src="ICONO.png" alt="" width="50">

El **polimorfismo** es un principio fundamental de la programación orientada a objetos (POO) que permite que **diferentes clases compartan un mismo método**, pero cada una **lo implemente de manera distinta**. Esto permite escribir código más flexible y reutilizable.

Polimorfismo significa "**muchas formas**", y en la programación se refiere a la <u>capacidad de llamar un mismo método en objetos de distintas clases y que cada uno responda de manera diferente.</u>

## **Tipos de polimorfismo**

Existen <u>dos formas principales</u> de polimorfismo en POO:

1. **Polimorfismo de sobrecarga** (no disponible en todos los lenguajes): Se define el mismo nombre de método con distintos parámetros dentro de una misma clase.
2. **Polimorfismo de sobreescritura** (el más común): Se define el mismo método en distintas clases, pero con diferentes implementaciones.

---

## **Ejemplo básico de polimorfismo en Python**

En este ejemplo, creamos dos clases (`Perro` y `Gato`), ambas tienen un método `hablar()`, pero cada clase lo implementa de forma diferente.

```python
class Perro:
    def hablar(self):
        return "Guau"

class Gato:
    def hablar(self):
        return "Miau"

# Lista de animales
animales = [Perro(), Gato()]

# Llamada al método hablar en distintos objetos
for animal in animales:
    print(animal.hablar())
```

Resultado esperado:

```
  Guau
  Miau
```

Aquí vemos que, aunque Perro y Gato tienen el mismo método ***hablar()*** , cada uno lo implementa de **manera diferente**.

## Polimorfismo con herencia

El polimorfismo suele aprovechar la herencia. Aquí hay un ejemplo con una clase base Animal y varias clases hijas que sobrescriben el método hacer_sonido().

```python
class Animal:
    def hacer_sonido(self):
        pass  # Método vacío, se implementará en clases hijas

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"

class Vaca(Animal):
    def hacer_sonido(self):
        return "Muu"

# Lista de animales

animales = [Perro(), Gato(), Vaca()]

# Todos los objetos comparten el método hacer_sonido, pero responden diferente

for animal in animales:
    print(animal.hacer_sonido())
```

```
Resultado esperado:
Guau
Miau
Muu
```

Aquí **cada clase hija sobrescribe** hacer_sonido() con su propia implementación.

## Polimorfismo con clases abstractas

<u>Las clases abstractas definen estructuras comunes</u>, pero dejan que las clases hijas implementen los detalles específicos.

```python
from abc import ABC, abstractmethod

class Animal(ABC):
    @abstractmethod
    def hacer_sonido(self):
        pass

class Perro(Animal):
    def hacer_sonido(self):
        return "Guau"

class Gato(Animal):
    def hacer_sonido(self):
        return "Miau"

# Crear una lista de animales polimórficos

animales = [Perro(), Gato()]

for animal in animales:
    print(animal.hacer_sonido())
```

Resultado esperado:

```
Guau
Miau
```

Aquí usamos la librería abc para crear una clase abstracta (Animal) que obliga a sus clases hijas a implementar hacer_sonido().

## Polimorfismo con funciones

Las funciones pueden recibir objetos de diferentes tipos y llamarlos de manera polimórfica.

```python
def reproducir_sonido(animal):
    print(animal.hacer_sonido())

# Instancias de diferentes clases

perro = Perro()
gato = Gato()

# Llamada a la función de forma polimórfica

reproducir_sonido(perro)
reproducir_sonido(gato)
```

```
Resultado esperado:
Guau
Miau
```

La función reproducir_sonido() recibe objetos de distintas clases y llama al método hacer_sonido(), sin importar qué tipo de objeto sea.

## Beneficios del polimorfismo

El polimorfismo aporta grandes ventajas al desarrollo de software:

**Código reutilizable:** Permite usar un mismo método en diferentes clases sin modificarlo.

**Escalabilidad:** Se pueden agregar nuevas clases sin alterar el código existente.

**Mayor organización:** Facilita la implementación de estructuras limpias y modulares.

**Flexibilidad:** Permite escribir funciones y estructuras que trabajen con múltiples tipos de objetos.

## **Conclusión**

El polimorfismo es una<u> técnica clave en la programación orientada a objetos.</u> Permite **usar el mismo método en diferentes clases**, haciendo que el código sea más flexible y reutilizable. A través de herencia, clases abstractas y funciones polimórficas, podemos crear sistemas escalables y eficientes.

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\poli.jpeg)

Aprender y aplicar el polimorfismo correctamente es fundamental para escribir software limpio, estructurado y fácil de mantener.

---

# 7) ¿Qué es un método dunder? <img title="" src="ICONO.png" alt="" width="50">

Los **métodos dunder** (abreviación de *"double underscore"*, doble guión bajo) son métodos especiales que Python reconoce automáticamente. Se escriben con doble guión bajo al inicio y al final, como `__init__`, `__str__`, `__len__`, etc.

Estos métodos permiten definir **comportamientos específicos** en una clase, como la forma en que se inicializan los objetos, cómo se representan en cadena de texto o cómo se comparan.

Los métodos dunder son fundamentales en la **Programación Orientada a Objetos (POO)** en Python y facilitan la personalización del comportamiento de los objetos de una clase.

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\dunder.png)

## **Características principales de los métodos dunder**

1. Se identifican por el doble guión bajo antes y después del nombre (`__nombre__`).
2. Python los ejecuta automáticamente en ciertos contextos.
3. Se usan para sobrecargar operadores (`+`, `-`, `*`, etc.).
4. Facilitan la interacción entre objetos de distintas clases.

## **Ejemplo básico de un método dunder: `__init__`**

El método `__init__` es el **constructor** de una clase en Python. Se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

```python
class Libro:
    def __init__(self, titulo, autor):
        self.titulo = titulo
        self.autor = autor

    def mostrar_info(self):
        return f"{self.titulo}, escrito por {self.autor}"

# Crear una instancia de la clase
libro1 = Libro("Python para principiantes", "Israel")

# Llamar a un método de la instancia
print(libro1.mostrar_info())
```

Salida esperada:

```
Python para principiantes, escrito por Israel
```

Aquí vemos que __init__ inicializa los atributos titulo y autor automáticamente cuando se crea el objeto libro1.

## Ejemplo de  `__str__` : Representación legible de un objeto

El método __str__ permite definir cómo se mostrará un objeto cuando se llame a print(objeto).

```python
class Libro:
    def __init__(self, titulo):
        self.titulo = titulo

    def __str__(self):
        return f"Libro: {self.titulo}"

# Crear una instancia
libro2 = Libro("Python Básico")

# Imprimir el objeto directamente
print(libro2)
```

<u>Salida esperada:</u>

```python
Libro: Python Básico
```

Sin __str__, Python mostraría un identificador de objeto poco legible, como <__main__.Libro object at 0x...>.

## Ejemplo de `__len__` : Definir longitud de un objeto

El método __len__ permite especificar cómo se obtiene la longitud de un objeto cuando se usa len(objeto).

```python
class Biblioteca:
    def __init__(self, libros):
        self.libros = libros

    def __len__(self):
        return len(self.libros)

# Crear una biblioteca con 3 libros
biblioteca = Biblioteca(["Python", "Java", "C++"])

# Obtener el número de libros usando len()
print(len(biblioteca))
```

<u>Salida esperada:</u>

```
3
```

## Ejemplo de `__add__` : Sobre carga del operador +

El método __add__ permite personalizar el comportamiento de la suma entre objetos.

```python
class Dinero:
    def __init__(self, cantidad):
        self.cantidad = cantidad

    def __add__(self, otro):
        return Dinero(self.cantidad + otro.cantidad)

    def __str__(self):
        return f"Saldo: ${self.cantidad}"

# Instancias de dinero
dinero1 = Dinero(50)
dinero2 = Dinero(75)

# Sumar objetos usando +
total = dinero1 + dinero2
print(total)
```

Salida esperada:

```
Saldo: $125
```

Aquí __add__ permite sumar objetos Dinero y obtener un nuevo objeto con la cantidad total.

                           ***Lista de métodos dunder comunes***

| Método         | Propósito                                        |
|:--------------:|:------------------------------------------------:|
| __init__       | Constructor de clase (inicializa atributos).     |
| __str__        | Representación amigable de un objeto.            |
| __repr__       | Representación oficial de un objeto.             |
| __len__        | Define la longitud de un objeto.                 |
| __add__        | Personaliza la suma (+) entre objetos.           |
| __sub__        | Personaliza la resta (-) entre objetos.          |
| __mul__        | Personaliza la multiplicación (*) entre objetos. |
| __eq__         | Define igualdad entre objetos (==).              |
| __lt__, __gt__ | Definen comparaciones (<, >).                    |

## Conclusión

Los **métodos dunder** son esenciales en la programación orientada a objetos en Python.  ***Permiten personalizar cómo los objetos se inicializan, se representan, se comparan y se operan matemáticamente***.

---

# 8) ¿Qué es un decorador en Python?  <img title="" src="ICONO.png" alt="" width="50">

Los decoradores en Python son una herramienta que ***permite modificar el comportamiento de una función sin alterar su código original***. Son ampliamente utilizados para añadir funcionalidades como logging, validaciones, caching y más.

### a) Concepto básico: Definiciòn y funcionamiento

Un decorador <u>es una función que recibe otra función como argumento y devuelve una nueva función </u>con comportamiento extendido.

```python
def mi_decorador(funcion):
    def envoltura():
        print("Antes de ejecutar la función")
        funcion()
        print("Después de ejecutar la función")
    return envoltura

@mi_decorador
def saludar():
    print("Hola, mundo!")

saludar()
```

<u>Salida:</u>

```
Antes de ejecutar la función
Hola, mundo!
Después de ejecutar la función
```

![](C:\Users\villa\Desktop\html-css\Full-stack\Proyectos\Ejercicios\checkpoint_6\decorador.png)

### b) Decoradores con parámetros

Si una función decorada requiere parámetros, podemos modificar el decorador para aceptarlos.

```python
def decorador_con_parametros(funcion):
    def envoltura(*args, **kwargs):
        print("Preparando ejecución...")
        resultado = funcion(*args, **kwargs)
        print("Ejecución finalizada.")
        return resultado
    return envoltura

@decorador_con_parametros
def sumar(a, b):
    return a + b

print(sumar(5, 3))
```

<u>Salida:</u>

```
Preparando ejecución...
Ejecución finalizada.
8
```

### c) Uso de decoradores en clases

Los decoradores también ***pueden usarse dentro de clases para modificar métodos***.

```python
def decorador_mensaje(mensaje):
    def decorador(funcion):
        def envoltura(*args, **kwargs):
            print(f"{mensaje}: Antes de la ejecución")
            resultado = funcion(*args, **kwargs)
            print(f"{mensaje}: Después de la ejecución")
            return resultado
        return envoltura
    return decorador

class Persona:
    def __init__(self, nombre):
        self.nombre = nombre

    @decorador_mensaje("Saludo personalizado")
    def saludar(self):
        print(f"Hola, soy {self.nombre}!")

persona = Persona("Israel")
persona.saludar()
```

<u>Salida:</u>

```
Saludo personalizado: Antes de la ejecución
Hola, soy Israel!
Saludo personalizado: Después de la ejecución
```

### d) Decoradores integrados en Python

Python incluye varios ***decoradores incorporados,*** como `@staticmethod`, `@classmethod` y `@property`.

Ejemplo de `@staticmethod`

```python
class Utilidades:
    @staticmethod
    def saludar():
        print("Hola desde un método estático!")

Utilidades.saludar()
```

Ejemplo de `@property`

```python
class Coche:
    def __init__(self, marca):
        self._marca = marca

    @property
    def marca(self):
        return self._marca

coche = Coche("Toyota")
print(coche.marca) 
```

### e) Aplicaciones prácticas de decoradores

Los decoradores **se utilizan en numerosos escenarios**, por ejemplo:

Logging de funciones – Registrar cuándo y cómo se ejecutan las funciones.

Autenticación – Verificar permisos antes de ejecutar funciones en una API.

Memoization (caching) – Almacenar resultados para evitar cálculos repetitivos.

Validación – Asegurar que los datos pasados a una función son correctos.

*Ejemplo de decorador para logging*

```python
def log(funcion):
    def envoltura(*args, **kwargs):
        print(f"Llamando a {funcion.__name__} con argumentos {args}, {kwargs}")
        resultado = funcion(*args, **kwargs)
        print(f"{funcion.__name__} se ejecutó con resultado: {resultado}")
        return resultado
    return envoltura

@log
def multiplicar(a, b):
    return a * b

print(multiplicar(4, 5))
```

<u>Salida:</u>

```
Llamando a multiplicar con argumentos (4, 5), {}
multiplicar se ejecutó con resultado: 20
20
```

## Conclusión

Los decoradores son una herramienta fundamental en Python que facilita la ***reutilización de código y la extensión de funcionalidades sin modificar el código***  original.

---

// Menu restaurante curso devcamp -isradev-

"use strict";
const readline = require("readline");

// CLASES -----------
class Menu {
  constructor(principales, guarniciones) {
    this.principales = principales;
    this.guarniciones = guarniciones;
  }

  mostrarMenu() {
    console.log("\nMenú del día Restaurante DevCamp:");
    console.log("\nPlatos principales:");
    this.principales.forEach((plato, index) => {
      console.log(`${index + 1}. ${plato.nombre} - €${plato.precio}`);
    });

    console.log("\nGuarniciones:");
    this.guarniciones.forEach((guarnicion, index) => {
      console.log(`${index + 1}. ${guarnicion.nombre} - €${guarnicion.precio}`);
    });
  }
}

class Cliente {
  constructor(nombre, pedidoPrincipal, pedidoGuarnicion) {
    this.nombre = nombre;
    this.pedidoPrincipal = pedidoPrincipal;
    this.pedidoGuarnicion = pedidoGuarnicion;
    this.total = 0;
  }

  calcularTotal() {
    const precioPrincipal = this.pedidoPrincipal.precio;
    const precioGuarniciones = this.pedidoGuarnicion.reduce((acc, g) => acc + g.precio, 0);
    this.total = precioPrincipal + precioGuarniciones;
  }

  mostrarPedido() {
    const principal = this.pedidoPrincipal.nombre;
    const guarniciones = this.pedidoGuarnicion.map(g => g.nombre).join(" y ");
    console.log(`\n${this.nombre} has pedido ${principal} con ${guarniciones}.`);
    //console.log(`Total a pagar: €${this.total.toFixed(2)}\n`);
  }
}

class Mesera {
  constructor(nombre) {
    this.nombre = nombre;
    this.comentariosBaul = [
      "Buena elección, ese plato es muy popular.",
      "¡Te va a encantar!",
      "Eres de buen comer eh¡"
    ];
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}, hoy voy a ser tu camarero.`);
  }

  comentar(plato) {
    const comentario = plato.comentarios?.[Math.floor(Math.random() * plato.comentarios.length)]
      || this.comentariosBaul[Math.floor(Math.random() * this.comentariosBaul.length)];
    console.log(`${this.nombre}: ${comentario}`);
  }

  mostrarPrecio(cliente) {
    console.log(`${this.nombre}: El total de tu pedido es €${cliente.total.toFixed(2)}.`);
  }
}

// DATOS DEL MENÚ ----------
const principales = [
  { nombre: "Pollo al horno", precio: 15.5, comentarios: ["El pollo al horno es una delicia.", "Perfecto para una comida saludable."] },
  { nombre: "Pasta carbonara", precio: 9.0, comentarios: ["La pasta carbonara es un clásico italiano.", "Te encantará la salsa carbonara!"] },
  { nombre: "Ensalada César", precio: 8.5, comentarios: ["La ensalada César es clásica.", "Ideal para los días calurosos."] },
  { nombre: "Merluza en salsa verde", precio: 18.5, comentarios: ["Un clásico de la cocina vasca.", "Te estás cuidando eh."] },
];

const guarniciones = [
  { nombre: "Papas fritas", precio: 4.0, comentarios: ["Buena idea acompañar con un hidrato de carbono.", "Son un vicio."] },
  { nombre: "Piperrada", precio: 5.5, comentarios: ["Guarnición típica vasca.", "Los pimientos son de Km 0."] },
  { nombre: "Patata panadera", precio: 6.0, comentarios: ["Están riquísimas.", "Buena combinación."] },
  { nombre: "Verduras al vapor", precio: 5.0, comentarios: ["Estupendo, son de nuestra huerta.", "Hoy toca cuidarse..."] },
];

// LOGICA DEL PROGRAMA ----------

//crear una interfaz de entrada/salida en la terminal usando Node.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = new Menu(principales, guarniciones);
const mesera = new Mesera("Israel");

mesera.saludar();

rl.question("¿Cuál es tu nombre? ", nombre => {
  console.log(`Encantado, ${nombre}. Aquí tienes el menú:\n\nDebes seleccionar un plato principal y dos guarniciones`);
  menu.mostrarMenu();

  rl.question("\nElige el número del plato principal: ", principalIndex => {
    const platoPrincipal = principales[parseInt(principalIndex) - 1];
    if (!platoPrincipal) {
      console.log("Opción no válida, te quedas sin comer.");
      rl.close();
      return;
    }
    mesera.comentar(platoPrincipal);

    rl.question("\nElige el número de tu primera guarnición: ", guarn1Index => {
      const guarn1 = guarniciones[parseInt(guarn1Index) - 1];
      if (!guarn1) {
        console.log("Opción no válida, te quedas sin comer.");
        rl.close();
        return;
      }
      mesera.comentar(guarn1);

      rl.question("\nElige el número de tu segunda guarnición: ", guarn2Index => {
        const guarn2 = guarniciones[parseInt(guarn2Index) - 1];
        if (!guarn2) {
          console.log("Opción no válida.");
          rl.close();
          return;
        }
        mesera.comentar(guarn2);

        const cliente = new Cliente(nombre, platoPrincipal, [guarn1, guarn2]);
        cliente.calcularTotal();
        cliente.mostrarPedido();
        mesera.mostrarPrecio(cliente);

        rl.close();
      });
    });
  });
});
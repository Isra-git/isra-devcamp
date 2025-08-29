//      Programa restaurante --devcamp curso--

// Definimos la clase restaurante que tiene los menus y la logica del programa
class Restaurante {
 
    constructor() {
     
     // Definimos los mensages que se van a mostrar (aleatorio)   
    this.baulMensajes = [
      "Excelente elección, un clásico.",
      "Ese plato nunca falla.",
      "Buena elección para esta hora del día.",
      "Te va a encantar, casi seguro...",
      "Un clásico que no te puedes perder.",
      "Bien elegido"
    ];

    //Definimos los menus de desayuno-comida-cena y sus precios
    this.menus = {
      desayuno: {
        Principal: { cafe: 1.50, infusion: 1.40, colacao: 1.60 },
        Segundo: { tostadas: 2.00, croissant: 2.20, napolitana: 1.80 },
        Postre: { yogurt: 1.90, fruta: 2.10, flan: 2.30 }
      },
      comida: {
        Principal: { paella: 6.50, pasta: 5.90, ensalada: 5.50 },
        Segundo: { pollo: 7.20, pescado: 7.80, hamburguesa: 6.90 },
        Postre: { helado: 3.00, tarta: 3.50, mousse: 3.20 }
      },
      cena: {
        Principal: { sopa: 4.50, crema: 4.70, tortilla: 5.00 },
        Segundo: { verduras: 6.80, calamares: 8.90, filete: 10.20 },
        Postre: { natillas: 2.80, bizcocho: 3.10, fruta: 2.50 }
      }
    };

    // Definimos los extras y sus precios que se muestran al final del pedido (opcionales)
    this.extras = {
      pan: 0.80,
      bebida: 1.50,
      salsa: 0.60,
      chupito: 1.20
    };

    // Creamos el contenedor para guardar la selecciones del cliente
    this.seleccion = [];
  }

  // Metodo principal para inciar el programa
  iniciar() {
    let hora = this.pedirHora();
    
    // Si se pulsa cancelar, sale del programa 
    if (hora === null) return this.cancelar();

    // Decide el tipo de menu segun la hora
    let tipoMenu = this.obtenerTipoMenu(hora);
    
    //Repetimos hasta que la hora sea valida (entre las 6am y 23pm)
    while (!tipoMenu) {
      alert("Lo sentimos, el restaurante está cerrado. Intenta con otra hora.");
      hora = this.pedirHora();
      if (hora === null) return this.cancelar();
      tipoMenu = this.obtenerTipoMenu(hora);
    }

    // Mostramos el tipo de menu que se puede pedir
    const menu = this.menus[tipoMenu];
    for (let categoria in menu) {
      const plato = this.pedirOpcion(categoria, menu[categoria]);
      if (plato === null) return this.cancelar();
      this.seleccion.push(plato);
    }

    const extra = this.pedirExtra();
    if (extra === null && confirm("¿Seguro que no quieres añadir ningún extra?") === false) {
      return this.cancelar();
    }
    if (extra) this.seleccion.push(extra);

    this.mostrarFactura();
  }

  pedirHora() {
    let hora;
    do {
      let entrada = prompt("Bienvenido al restaurante. ¿Dime una hora? (formato HH, 0-23)");
      if (entrada === null) return null;
      hora = parseInt(entrada);
    } while (isNaN(hora) || hora < 0 || hora > 23);
    return hora;
  }

  obtenerTipoMenu(hora) {
    if (hora >= 6 && hora < 11) return "desayuno";
    if (hora >= 11 && hora < 17) return "comida";
    if (hora >= 17 && hora < 23) return "cena";
    return null;
  }

  pedirOpcion(categoria, opciones) {
    const nombres = Object.keys(opciones);
    let entrada, nombreValido;

    do {
      entrada = prompt(
        `Elige tu ${categoria}:\n` +
        nombres.map(n => `${n} (${opciones[n].toFixed(2)}€)`).join("\n")
      );
      if (entrada === null) return null;
      entrada = this.normalizarEntrada(entrada);
      nombreValido = nombres.find(n => this.normalizarEntrada(n) === entrada);
      if (!nombreValido) alert("Opción no válida. Intenta de nuevo.");
    } while (!nombreValido);

    this.mostrarMensajeAleatorio();
    return { nombre: nombreValido, precio: opciones[nombreValido] };
  }

  pedirExtra() {
    const nombres = Object.keys(this.extras);
    let respuesta = prompt(
      `¿Quieres añadir un extra?\n` +
      nombres.map(n => `${n} (${this.extras[n].toFixed(2)}€)`).join("\n") +
      `\nEscribe el nombre o deja vacío para no añadir.`
    );
    if (respuesta === null) return null;
    respuesta = this.normalizarEntrada(respuesta);
    if (respuesta === "") return null;
    if (!nombres.map(n => this.normalizarEntrada(n)).includes(respuesta)) {
      alert("Extra no válido. No se añadirá.");
      return null;
    }
    const nombreOriginal = nombres.find(n => this.normalizarEntrada(n) === respuesta);
    return { nombre: nombreOriginal, precio: this.extras[nombreOriginal] };
  }

  mostrarFactura() {
    let total = 0;
    let factura = "FACTURA:\n";
    this.seleccion.forEach(item => {
      factura += `${item.nombre}: ${item.precio.toFixed(2)}€\n`;
      total += item.precio;
    });
    factura += `\nTOTAL: ${total.toFixed(2)}€\n\nGracias por elegirnos`;
    alert(factura);
  }

  mostrarMensajeAleatorio() {
    const mensaje = this.baulMensajes[Math.floor(Math.random() * this.baulMensajes.length)];
    alert(mensaje);
  }

  normalizarEntrada(texto) {
    return texto.trim().toLowerCase();
  }

  cancelar() {
    alert("Has cancelado el pedido. Agur!");
  }
}

// Ejecutar el programa
const restaurante = new Restaurante();
restaurante.iniciar();
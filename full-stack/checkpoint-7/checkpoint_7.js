//      CHECKPOINT 7
// Ejercicio Practico

// Creamos la funcion
function evaluarOperacion(primerNumero, segundoNumero, tercerNumero, cuartoNumero) {
  
  //Sumamos el primer grupo  
  const sumaInicial = primerNumero + segundoNumero;
  
  //Sumamos el segundo grupo
  const sumaFinal = tercerNumero + cuartoNumero;
  
  //Multiplicamos la suma de los dos grupos
  const resultadoMultiplicacion = sumaInicial * sumaFinal;

  //Comprobamos el resultado para mostrar el mensage correspondiente 
  if (resultadoMultiplicacion > 50) {
    console.log("¡El número es mayor que 50!");
  } else {
    console.log("¡El número es menor que 50!");
  }
}


// Mostramos algun resultado mayor que 50
evaluarOperacion(10, 5, 3, 2);

// Mostramos algun resultado menor que 50
evaluarOperacion(4, 6, 2, 1);


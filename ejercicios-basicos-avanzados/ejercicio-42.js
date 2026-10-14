// Ejercicio 42
// swap: recibe un array y dos índices e intercambia los valores de esas posiciones.
// Retorna el array resultante.

const fantasticFour = ["La antorcha humana", "Mr. Fantástico", "La mujer invisible", "La cosa"];

function swap(array, index1, index2) {
  const aux = array[index1];
  array[index1] = array[index2];
  array[index2] = aux;
  return array;
}

console.log(swap(fantasticFour, 0, 3));

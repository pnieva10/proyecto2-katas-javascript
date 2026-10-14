// Ejercicio 11
// Calcular promedio mezclado: función que recibe un array y, cuando el valor es
// un number, lo suma y, si no, cuenta la longitud del string y la suma.

const mixedElements = [6, 1, "Marvel", 1, "hamburguesa", "10", "Prometeo", 8, "Hola mundo"];

function averageWord(list) {
  let total = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "number") {
      total += list[i];
    } else {
      total += list[i].length;
    }
  }
  return total;
}

console.log(averageWord(mixedElements));

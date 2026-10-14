// Ejercicio 41
// rollDice(): recibe el número de caras del dado, simula una tirada
// y retorna el resultado.

function rollDice(faces) {
  return Math.floor(Math.random() * faces) + 1;
}

console.log(rollDice(6));
console.log(rollDice(20));

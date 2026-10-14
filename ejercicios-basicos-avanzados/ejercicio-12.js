// Ejercicio 12
// Valores únicos: devuelve un array sin los elementos duplicados.

const duplicates = [
  "sushi", "pizza", "burger", "potatoe", "pasta", "ice-cream",
  "pizza", "chicken", "onion rings", "pasta", "soda",
];

function removeDuplicates(list) {
  const uniques = [];
  for (let i = 0; i < list.length; i++) {
    if (!uniques.includes(list[i])) {
      uniques.push(list[i]);
    }
  }
  return uniques;
}

console.log(removeDuplicates(duplicates));

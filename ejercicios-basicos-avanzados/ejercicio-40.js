// Ejercicio 40
// findArrayIndex: devuelve la posición del texto dentro del array.
// removeItem: usa findArrayIndex y .splice() para eliminar el elemento
// y retorna el array sin él.

function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }
  return -1;
}

const mainCharacters = ["Luke", "Leia", "Han Solo", "Chewbacca", "Rey", "Anakin", "Obi-Wan"];

console.log(findArrayIndex(mainCharacters, "Luke"));
console.log(findArrayIndex(mainCharacters, "Rey"));
console.log(findArrayIndex(mainCharacters, "Yoda"));

function removeItem(array, text) {
  const index = findArrayIndex(array, text);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

console.log(removeItem(mainCharacters, "Han Solo"));
console.log(removeItem(mainCharacters, "Obi-Wan"));
console.log(removeItem(mainCharacters, "Yoda"));

// Ejercicio 13
// Buscador de nombres: recibe un array y el valor a buscar. Si existe devuelve
// true y su posición; si no, devuelve false.

const names = [
  "Peter", "Steve", "Tony", "Natasha", "Clint", "Logan",
  "Xabier", "Bruce", "Peggy", "Jessica", "Marc",
];

function nameFinder(nameList, name) {
  for (let i = 0; i < nameList.length; i++) {
    if (nameList[i] === name) {
      return [true, i];
    }
  }
  return false;
}

console.log(nameFinder(names, "Natasha"));
console.log(nameFinder(names, "Wanda"));

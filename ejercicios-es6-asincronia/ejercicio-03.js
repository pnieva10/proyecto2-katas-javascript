// Ejercicio 3

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

// 3.1 Devuelve un array con sus nombres utilizando .map().
const names = users.map((user) => user.name);
console.log(names);

// 3.2 Devuelve una lista con los valores de la propiedad .name y cambia el nombre
// a 'Anacleto' en caso de que empiece por 'A'.
const namesWithAnacleto = users.map((user) => {
  if (user.name.startsWith("A")) {
    return "Anacleto";
  }
  return user.name;
});
console.log(namesWithAnacleto);

// 3.3 Devuelve una lista con los valores de la propiedad .name y añade el string
// ' (Visitado)' cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const cityNames = cities.map((city) => {
  if (city.isVisited) {
    return city.name + " (Visitado)";
  }
  return city.name;
});
console.log(cityNames);

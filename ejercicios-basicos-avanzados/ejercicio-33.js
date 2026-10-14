// Ejercicio 33
// Función que recibe un país y devuelve su capital.
// Si el país no está en la lista, devuelve un mensaje adecuado.

const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  if (capitals[country]) {
    return capitals[country];
  } else {
    return "El país " + country + " no está en la lista";
  }
}

console.log(getCapital("Spain"));
console.log(getCapital("Japan"));

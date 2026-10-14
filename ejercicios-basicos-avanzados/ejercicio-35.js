// Ejercicio 35
// Función que busca mutantes con un poder concreto y retorna un mensaje
// indicando si se ha encontrado o no. Tiene en cuenta que varios mutantes
// pueden tener el mismo poder.

const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutants, power) {
  const found = [];
  for (const mutant of mutants) {
    if (mutant.power === power) {
      found.push(mutant.name);
    }
  }

  if (found.length > 0) {
    return "Mutantes con el poder " + power + ": " + found.join(", ");
  } else {
    return "No se ha encontrado ningún mutante con el poder " + power;
  }
}

console.log(findMutantByPower(mutants, "telepathy"));
console.log(findMutantByPower(mutants, "flight"));

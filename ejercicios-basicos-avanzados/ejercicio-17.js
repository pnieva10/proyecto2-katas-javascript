// Ejercicio 17
// For...in: imprime los datos del alienígena con el formato
// "La propiedad ____ tiene cómo valor: ____"

const alien = {
  name: "Xenomorph",
  species: "Xenomorph XX121",
  origin: "Unknown",
  weight: 180,
};

for (const key in alien) {
  console.log("La propiedad " + key + " tiene cómo valor: " + alien[key]);
}

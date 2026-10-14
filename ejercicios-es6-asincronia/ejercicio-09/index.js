// Ejercicio 9
// Al entrar en la página se muestra la imagen de un Pokemon aleatorio
// de la primera generación (del 1 al 151). Cada recarga, un Pokemon nuevo.

const randomImage = document.querySelector(".random-image");

const randomId = Math.floor(Math.random() * 151) + 1;

fetch("https://pokeapi.co/api/v2/pokemon/" + randomId)
  .then((response) => response.json())
  .then((pokemon) => {
    randomImage.src = pokemon.sprites.other["official-artwork"].front_default;
    randomImage.alt = pokemon.name;
  })
  .catch((error) => {
    console.log("Error al obtener el Pokemon:", error);
  });

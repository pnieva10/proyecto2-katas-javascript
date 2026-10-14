// Ejercicio 8
// Select con todos los personajes de Game of Thrones. Al seleccionar un nombre
// se muestra su imagen en el medio de la página.

const characterList = document.getElementById("character-list");
const characterImage = document.querySelector(".character-image");

fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((characters) => {
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "Selecciona un personaje";
    defaultOption.value = "";
    characterList.appendChild(defaultOption);

    for (const character of characters) {
      const option = document.createElement("option");
      option.textContent = character.fullName;
      option.value = character.imageUrl;
      characterList.appendChild(option);
    }
  })
  .catch((error) => {
    console.log("Error al obtener los personajes:", error);
  });

characterList.addEventListener("change", (event) => {
  characterImage.src = event.target.value;
});

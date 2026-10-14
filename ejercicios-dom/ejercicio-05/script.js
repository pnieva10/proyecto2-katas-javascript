// Ejercicio 5
// Crea una lista ul > li dinámicamente en el html que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const albumsMain = document.getElementById("albums");
const albumsList = document.createElement("ul");

for (const album of albums) {
  const li = document.createElement("li");
  li.textContent = album;
  albumsList.appendChild(li);
}

albumsMain.appendChild(albumsList);

// Ejercicio 3

// 1.1 Basandote en el array siguiente, crea una lista ul > li
// dinámicamente en el html que imprima cada uno de los paises.
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
const countriesList = document.createElement("ul");
for (const country of countries) {
  const li = document.createElement("li");
  li.textContent = country;
  countriesList.appendChild(li);
}
document.body.appendChild(countriesList);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
document.querySelector(".fn-remove-me").remove();

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
// en el div de html con el atributo data-function="printHere".
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];
const printHere = document.querySelector('[data-function="printHere"]');
const carsList = document.createElement("ul");
for (const car of cars) {
  const li = document.createElement("li");
  li.textContent = car;
  carsList.appendChild(li);
}
printHere.appendChild(carsList);

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
// h4 para el titulo y otro elemento img para la imagen.
const countriesWithImages = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

const cardsContainer = document.createElement("div");
document.body.appendChild(cardsContainer);

for (const item of countriesWithImages) {
  const card = document.createElement("div");

  const h4 = document.createElement("h4");
  h4.textContent = item.title;

  const img = document.createElement("img");
  img.src = item.imgUrl;
  img.alt = item.title;

  card.appendChild(h4);
  card.appendChild(img);

  // 1.6 Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar este";
  deleteButton.addEventListener("click", () => {
    card.remove();
  });
  card.appendChild(deleteButton);

  cardsContainer.appendChild(card);
}

// 1.5 Crea un botón que elimine el último elemento de la serie de divs.
const removeLastButton = document.createElement("button");
removeLastButton.textContent = "Eliminar el último";
removeLastButton.addEventListener("click", () => {
  const cards = cardsContainer.querySelectorAll("div");
  if (cards.length > 0) {
    cards[cards.length - 1].remove();
  }
});
document.body.insertBefore(removeLastButton, cardsContainer);

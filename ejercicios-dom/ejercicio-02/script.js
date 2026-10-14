// Ejercicio 2

// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const emptyDiv = document.createElement("div");
document.body.appendChild(emptyDiv);

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const divWithP = document.createElement("div");
const p = document.createElement("p");
divWithP.appendChild(p);
document.body.appendChild(divWithP);

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const divWithSixP = document.createElement("div");
for (let i = 0; i < 6; i++) {
  const newP = document.createElement("p");
  divWithSixP.appendChild(newP);
}
document.body.appendChild(divWithSixP);

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const dynamicP = document.createElement("p");
dynamicP.textContent = "Soy dinámico!";
document.body.appendChild(dynamicP);

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector("h2.fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];
const ul = document.createElement("ul");
for (const app of apps) {
  const li = document.createElement("li");
  li.textContent = app;
  ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const removeElements = document.querySelectorAll(".fn-remove-me");
for (const element of removeElements) {
  element.remove();
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
const divs = document.querySelectorAll("div");
const middleP = document.createElement("p");
middleP.textContent = "Voy en medio!";
document.body.insertBefore(middleP, divs[1]);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertDivs = document.querySelectorAll("div.fn-insert-here");
for (const div of insertDivs) {
  const insideP = document.createElement("p");
  insideP.textContent = "Voy dentro!";
  div.appendChild(insideP);
}

// TODO: Create a list with every learner of your group.
const learners = ["Lucas", "Kilian", "Alec", "Mohamed", "Pieter", "Rebecca", "Alessandro", "Josué", "Thibault", "Eduarda", "Mohammed", "Funda", "Luis", "Alexandru", "Andrej", "Danté", "jonasi", "Kelsey", "Rana", "Jana", "Sieglinde", "Gustave", "Sezin", "Thierry", "Sylvie", "Anaïs"]
// TODO: Create a new <section> with a random background-color for each learner in your group.
learners.forEach(element => {
  const sectionElement = document.createElement("section");

  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);

  const bgColor = "rgb(" + r + "," + g + "," + b + ")";
  
  sectionElement.style.backgroundColor = bgColor;
  console.log(sectionElement);
// TODO: This section should contain a paragraph with the name of the learner.
const pElement = document.createElement("p");
let pTextNode = document.createTextNode(element);

pElement.appendChild(pTextNode);
sectionElement.append(pElement);
});
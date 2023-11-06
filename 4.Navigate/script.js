// TODO: Select the last child of the `<ol>` tag and put it at the beginning of the list.
const parentElement = document.querySelector("ol");
const lastChild = parentElement.children[4]; // why does .lastChild property not work here to select the last child of Ol??
parentElement.insertBefore(lastChild, parentElement.firstChild);

// TODO: Move the `<h2>` of the third section in the second one and vice-versa.
const section2 = document.querySelectorAll("section")[1];
const section3 = document.querySelectorAll("section")[2];

const section2H2 = section2.children[0];
const section3H2 = section3.children[0].children[0];
const section3div = section3.children[0];

section2.insertBefore(section3H2, section2.children[0]);
section3div.insertBefore(section2H2, section3div.children[0]); 
// // Why does this way not work ?? ---> section3.insertBefore(section2H2, section3.children[0].children[0]);


// TODO: Delete the last section from the DOM, we don't need it anyways.
const lastSection = document.querySelectorAll("section")[2];
lastSection.remove();
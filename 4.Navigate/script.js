// TODO: Select the last child of the `<ol>` tag and put it at the beginning of the list.
const parentElement = document.querySelector("ol");
const lastChild = parentElement.children[4]; // why does .lastChild property not work here to select the last child of Ol??
parentElement.insertBefore(lastChild, parentElement.firstChild);

// TODO: Move the `<h2>` of the third section in the second one and vice-versa.


// TODO: Delete the last section from the DOM, we don't need it anyways.
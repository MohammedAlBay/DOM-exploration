// TODO: Display the document title in the console
const Title = document.getElementsByTagName("title")[0];
console.log(Title); // Or just: console.log(document.title); ??

// TODO: Change the document title to "Modifying the DOM"
Title.innerText = "Modifying the DOM"; // Or just: document.title = "Modifying the DOM"; ??

// TODO: Change the background color of the body to hot pink (#FF69B4)
document.body.style.backgroundColor = "#FF69B4";
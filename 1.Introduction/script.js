// TODO: Display the document title in the console
const Title = document.getElementsByTagName("title")[0];
console.log(Title); // Or just: console.log(document.title); ??

// TODO: Change the document title to "Modifying the DOM"
Title.innerText = "Modifying the DOM"; // Or just: document.title = "Modifying the DOM"; ??

// TODO: Change the background color of the body to hot pink (#FF69B4)
// document.body.style.backgroundColor = "#FF69B4";

// TODO: Try with a random color as an extra challenge. 
//      (tip: You can use the rgb() notation and 3 random-generated numbers between 0 and 255).

const RandomBgColor = () =>{
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
document.body.style.backgroundColor = RandomBgColor; // Not showing any random background color , why ?



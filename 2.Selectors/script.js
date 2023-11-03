/* TODO: Add a title attribute to every element that has the important class, stating This is an important item. 
Tip: adding a title attribute to an element is different from changing the title of a document.*/
const importantElements = document.getElementsByClassName("important");

for (const element of importantElements){
  element.setAttribute("title","This is an important item");
}

/* TODO: Select all the img tags and loop through them. 
If they have no important class, turn their display property to none.*/
const imgCollection = document.querySelectorAll("img");

for(const img of imgCollection){
  if (!img.classList.contains("important")){
    img.style.display = "none";
  }
}


/* TODO: Loop through all the paragraphs and display their content in the console.
If the paragraph has a class, display its classname as well.*/




// TODO: Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is.
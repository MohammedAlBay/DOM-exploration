const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

// TODO: Create a new `<div>` with a class `.displayedsquare`
  const newSquareDiv = document.createElement("div");
  newSquareDiv.classList.add("displayedsquare");

// TODO: Add the corresponding clicked color to the new div
newSquareDiv.classList.add(e.target.classList[1]);

// TODO: Add the new div in the wrapper div with class '.displayedsquare-wrapper'
const wrapperDiv = document.querySelector(".displayedsquare-wrapper");
wrapperDiv.appendChild(newSquareDiv);

// TODO: Create a new <li> in the log below to state when the action was done
const newListItem = document.createElement("li");
let text = document.createTextNode("[" + getElapsedTime() + "]" + " Created a new" + e.target.classList[1] + "square.");
newListItem.appendChild(text);


}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

// TODO: Create a system so that when a user clicks on a generated square an alert pops-up with the color of that square
const clickOnDisplayedSquare = (e) => {
  console.log(alert(e.target.classList[1]));
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

// TODO: Create a new `<div>` with a class `.displayedsquare`
  const newSquareDiv = document.createElement("div");
  newSquareDiv.classList.add("displayedsquare");
  newSquareDiv.addEventListener('click', clickOnDisplayedSquare);

// TODO: Add the corresponding clicked color to the new div
newSquareDiv.classList.add(e.target.classList[1]);

// TODO: Add the new div in the wrapper div with class '.displayedsquare-wrapper'
const wrapperDiv = document.querySelector(".displayedsquare-wrapper");
wrapperDiv.appendChild(newSquareDiv);

// TODO: Create a new <li> in the log below to state when the action was done
const newListItem = document.createElement("li");
let text = document.createTextNode("[" + getElapsedTime() + "]" + " Created a new " + e.target.classList[1] + " square.");
newListItem.appendChild(text);

// TODO: Add the new li in the ul to show te log
const logList = document.querySelector("ul");
logList.appendChild(newListItem);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}
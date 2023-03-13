const gameContainer = document.getElementById("game");
const openContainer = document.getElementById("OpenCount");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
    for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
  
    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
let openCount = 1;
let clickCount = 0;
let currColor = '';
let tempColor = '';
let prevEvent = '';
let sndfilped = false;
let fstfilped = false;

function handleCardClick(event) {
   // 세번째 클릭이면 리턴
   if (sndfilped) return;
   // 같은 것을 두번 클릭하면 리턴
   //???????
   // you can use event.target to see which element was clicked
   //첫번재 클릭이면
   
    if (!fstfilped) {
      console.log(event.target.className);
      currColor = event.target.className;
      event.target.style.background = currColor;  
    }

    // if it is second click
    if (fstfilped) {
      sndfilped = true;
          // 첫번째 색과 두번째 색이 같지 않다면
          // console.log(tempColor);
          if (tempColor != currColor) {
            setTimeout(() => {
              event.target.style.background = "white";
              prevEvent.style.background    = "white";
              prevEvent = '';      
            }, 1000)
          } else {
            openContainer.innerHTML = openCount++;
            prevEvent = '';      
          }
          tempColor = '';
          currColor = '';      
          clickCount = 0;
      } else {
        // setTimeout(() => {
          prevEvent = event.target;
          tempColor = currColor;
          // console.log(tempColor);
        // }, 1000)

      }  
      // console.log(clickCount);
      
   
}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */  
document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');

let stickyPosition = stickyItem.offsetTop;

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixPosition = fixItem.offsetTop;

let allFix = document.getElementsByClassName('allStickyPuzzle')


// Make Square


    



function getCumulativePosition(element) {
    let x = 0;
    let y = 0;
    let currentElement = element;
  
    while (currentElement) {
      x += currentElement.offsetLeft;
      y += currentElement.offsetTop;
      currentElement = currentElement.offsetParent;
    }
  
    return { x, y };
  }
  const element = document.getElementById('stickyPuzzlePiece');
  const position = getCumulativePosition(element);
  
  console.log("Cumulative position:", position);

// Display 
//console.log(isFixed);
//console.log(fixedCount);
//console.log("Total Puzzle Height:",fixedTotalHeight);

// Element positioning

let navElement = document.getElementById("stickyNavBar");
console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("stickyPuzzlePiece");
console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

// Adding Sticky Heights

// function addToTotalHeight() {fixedTotalHeight + (element);}
var fixedTotalHeight = 0;


// var count = 0;
// let fixedCount = [0]


let isFixed = false;


function addToArray(array, element) {
    array.push(element);
  }

  //console.log(fixedCount);

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}

//stickyPuzzlePiece
function addOrRemoveFix() {
    if (window.scrollY >= fixPosition) {
        fixItem.classList.add('puzzleFixed');
        //fixItem.style.top.add(navElement.offsetHeight);
        fixItem.style.top = navElement.offsetHeight + "px"; 
        isFixed = true;
    } else {
        fixItem.classList.remove('puzzleFixed');
        isFixed = false;
    }
   
    //if (isFixed = true) {addToArray(fixedCount, + puzzleElement.offsetHeight + "px");}
    if (isFixed = true) {
        fixedTotalHeight =  puzzleElement.offsetHeight + "px";
        //{fixedTotalHeight + (element);}
       // addToTotalHeight(puzzleElement.offsetHeight + "px");
    }
    console.log("Total Puzzle Height:",fixedTotalHeight);
}

window.onscroll = () => {
    addOrRemoveSticky();
    addOrRemoveFix();

}

//resize update

window.onresize = function(){ 
    navElement = document.getElementById("stickyNavBar");
    console.log("NavBar Width: " + navElement.offsetWidth + "px");
    console.log("Navbar Height: " + navElement.offsetHeight + "px");

    puzzleElement = document.getElementById("stickyPuzzlePiece");
    console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
    console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

    fixItem.style.top = navElement.offsetHeight + "px"; 
}

});
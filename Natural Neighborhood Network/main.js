document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;

// must fix by class .puzzle-piece - see new function
//must fix position based on nav height and Array ID
// array is const elementData

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixPosition = fixItem.offsetTop;



// // make array node?


// var nodelistToArray;
// function puzzleNodeArray() {
//     Array.from(document.querySelectorAll('.puzzle-piece'))
// }
// // nodelistToArray.map(el => console.log(el))
// //   nodelistToArray.map(el => el.getBoundingClientRect());

// // nodelistToArray

// Puzzle Class Array Generation
function getElementsData() {
    const elements = document.querySelectorAll('.puzzle-piece'); 
    const dataArray = [];
    elements.forEach(element => {
      dataArray.push({
        name: element.className,
        // height: element.offsetHeight, 
        // width: element.offsetWidth,
        // FromTop: element.offsetTop,
        containerHeight: element.getBoundingClientRect(),
      });
    });
    return dataArray;
  }

  const elementData = getElementsData();
  console.log(elementData);


// function getPuzzBox() {
//     const elements = document.querySelectorAll('.puzzle-piece');
//     const puzzBox = Array.from(elements.getBoundingClientRect(elements))
//     return puzzBox;
// }
// const puzzData = getPuzzBox();
//   console.log(puzzData);
  
// // New function to make new fix height 
// (fix is relative to screen)
// trigger fix at height relative to curent:
// NavHeight
// Puzzle piece height
// number of puzzle peices (array ID!)
// array is const elementData

function changeFixHeight(elementData,newFixHeight) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].hasOwnProperty('height')) {
          array[i].height = newHeight;
        }
      } 
}

// function changeHeight(array, newFixHeight) {
//     for (let i = 0; i < array.length; i++) {
//       if (array[i].hasOwnProperty('height')) {
//         array[i].height = newHeight;
//       }
//     }
//   }

// Set the fix hight setAttribute
// function getFixHeight(params) {
    
// }

// Make string, then setAttribute() of increasing offset top - or multiply x index #

//to do:
// make the svg square
// count puzzle pieces
// add # id to each peice
// sum of puzzle offsetheight x puzzle #



// Display Element Positioning

let navElement = document.getElementById("stickyNavBar");
console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("stickyPuzzlePiece");
console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");




// Sticky add function

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
        
        // This adds the nav height, but it relates to container, and offests in container
        // fixItem.style.top = navElement.offsetHeight + "px"; 

        // ACTUNG! This adds to top in the container too! no good, gotta add to offset?

        //fixItem.style.top.add(navElement.offsetHeight);
        //fixItem.style.top = navElement.offsetHeight + "px"; 
        isFixed = true;
    } else {
        fixItem.classList.remove('puzzleFixed');
        isFixed = false;
    }

}

window.onscroll = () => {
    addOrRemoveSticky();
    addOrRemoveFix();
}

//resize update

window.onresize = function(){ 
    // navElement = document.getElementById("stickyNavBar");
    // console.log("NavBar Width: " + navElement.offsetWidth + "px");
    // console.log("Navbar Height: " + navElement.offsetHeight + "px");

    // puzzleElement = document.getElementById("stickyPuzzlePiece");
    // console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
    // console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

    // ACTUNG! This adds to top in the container too! no good, gotta add to offset?
    //fixItem.style.top = navElement.offsetHeight + "px"; 
}

});
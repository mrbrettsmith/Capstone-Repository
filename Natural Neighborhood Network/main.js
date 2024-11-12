document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixOffset = fixItem.offsetTop;



// must fix by class .puzzle-piece - see new function
//must fix position based on nav height and Array ID
// array is const elementData

// Call and Display Element Dimensions

let navElement = document.getElementById("stickyNavBar");
// console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("stickyPuzzlePiece");
// console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
// console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

// Get NavBar Margin (to remove from offset trigger)
const style = getComputedStyle(navElement);
let nMargin = parseInt(style.marginTop);
// Create new hieght
let nHieght = navElement.offsetHeight ;
let pHeight = puzzleElement.offsetHeight;

// THIS IS ALMOST WORKING! JUST NEED TO FIX PADDING
// work from initial puzzle offset hieght, then remove nav
// and remove puzze height x number of puzzle!!

let fixStop = fixOffset - nMargin;

console.log('nav margin: ' + nMargin + "px")
console.log('nav plus puzzle height: ' + fixStop + "px")


let fixPosition = fixStop;


// let puzContainerUnfix = document.getElementsByClassName('puzzle-container');
// let puzContainerUnfixWidth = puzContainerUnfix.offsetWidth;

// let puzContainerFix = document.getElementsByClassName('fixed-puzzle-container');
// let puzContainerFixWidth = puzContainerFix.offsetWidth;


// console.log('Puzzle container width Unfixed ' + puzContainerUnfixWidth + "px");
// console.log('Puzzle container width Fixed ' + puzContainerFixWidth + "px");
// new stratagy:
// get article offset top = (A)
// pair puzzle offset top with (A)
// get cumulative freeze point (F) adds nav & previous puzzles
// freeze at freeze point (F)

// step 1 get data

// step 2 make puzzle and article class stay in same height Test (new function below)

// step 3 add freeze data

// let basisHeight = document.getElementById('rain');
// let synchHieght = basisHeight.offsetTop;

// let subjectPuzzle = document.getElementById('rainpuz');

// console.log('Article offset: ' + synchHieght + "px");

// function topDistancePush (puzzleElement,newStop) {
//     puzzleElement.style.offsetTop = newStop + "px";
// }

// topDistancePush(subjectPuzzle,synchHieght);

function getArticleOffset() {
    const elements = document.querySelectorAll('.article'); 
    const dataArray = [];
    elements.forEach(element => {
      dataArray.push({
        name: element.className,
        id: element.id,
        height: element.offsetHeight, 
        // width: element.offsetWidth,
        FromTop: element.offsetTop,
        //containerHeight: element.getBoundingClientRect(),
      });
    });
    return dataArray;
}
const articleData = getArticleOffset();
console.log(articleData);

// so, i can call an id or class, can i call both?
// can i apply data from article offset to puzz offset of same class?


// let nHieght = ;
// let pHeight = ;

// let fixStop = nHieght + pHeight;

// // make array node?


// var nodelistToArray;
// function puzzleNodeArray() {
//     Array.from(document.querySelectorAll('.puzzle-piece'))
// }
// // nodelistToArray.map(el => console.log(el))
// //   nodelistToArray.map(el => el.getBoundingClientRect());

// // nodelistToArray

// // Puzzle Class Array Generation
// function getElementsData() {
//     const elements = document.querySelectorAll('.puzzle-piece'); 
//     const dataArray = [];
//     elements.forEach(element => {
//       dataArray.push({
//         name: element.className,
//         // height: element.offsetHeight, 
//         // width: element.offsetWidth,
//         // FromTop: element.offsetTop,
//         containerHeight: element.getBoundingClientRect(),
//       });
//     });
//     return dataArray;
//   }

//   const elementData = getElementsData();
//   console.log(elementData);



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

// function changeFixHeight(elementData,newFixHeight) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i].hasOwnProperty('height')) {
//           array[i].height = newHeight;
//         }
//       } 
// }

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






// Push new Height also works, but still offsests in parent


//topDistancePush(fixStop);

// // test function

// function changeHeight(elementId, newHeight) {
//     document.getElementById(elementId).style.height = newHeight;
//   }

// // Change the height of an element with the id "myDiv" to 200px
// changeHeight("myDiv", "200px"); 



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
        isFixed = true;

        // This adds the nav height, but it relates to container, and offests in container
        // fixItem.style.top = navElement.offsetHeight + "px"; 

        // ACTUNG! This adds to top in the container too! no good, gotta add to offset?

        // fixItem.style.top.add(navElement.offsetHeight);
        fixItem.style.top = navElement.offsetHeight + "px"; 
        
    } else {
        fixItem.classList.remove('puzzleFixed');
        isFixed = false;
    }

}

// SCROLL LISTENER 

window.onscroll = () => {
//    topDistancePush(fixStop);

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
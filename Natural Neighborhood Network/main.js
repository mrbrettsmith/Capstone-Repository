document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;

let fixAbout = document.getElementById('about');
let fixOffsetAbout = fixAbout.offsetTop;

let fixRain = document.getElementById('rain');
let fixOffsetRain = fixRain.offsetTop;

let fixPrarie = document.getElementById('prairie');
let fixOffsetPrarie = fixPrarie.offsetTop;

let fixPollen = document.getElementById('pollen');
let fixOffsetPollen= fixPollen.offsetTop;

let fixForest = document.getElementById('rain');
let fixOffsetForest = fixForest.offsetTop;

let fixSeed = document.getElementById('prairie');
let fixOffsetSeed = fixSeed.offsetTop;


// must fix by class .puzzle-piece - see new function
//must fix position based on nav height and Array ID
// array is const elementData

// Call and Display Element Dimensions

let navElement = document.getElementById("stickyNavBar");
// console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("about");
// console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
// console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");
// let puzzleElementTwo = document.getElementById("rain");


// Get NavBar Margin (to remove from offset trigger)
const style = getComputedStyle(navElement);
let nMargin = parseInt(style.marginTop);
// Create new hieght
let nHieght = navElement.offsetHeight ;
let pHeight = puzzleElement.offsetHeight;

// THIS IS ALMOST WORKING! JUST NEED TO FIX PADDING
// work from initial puzzle offset hieght, then remove nav
// and remove puzze height x number of puzzle!!

// Use fixStop?

let fixStopAbout = fixOffsetAbout - nHieght;
let fixStopRain = fixOffsetRain - nHieght + pHeight;
let fixStopPrarie = fixOffsetPrarie - nHieght + (pHeight * 2);
let fixStopPollen = fixOffsetPollen - nHieght + (pHeight * 3);
let fixStopForest = fixOffsetForest - nHieght + (pHeight * 4);
let fixStopSeed = fixOffsetSeed - nHieght + (pHeight * 5);

console.log('nav margin: ' + nMargin + "px")
console.log('nav plus puzzle height: ' + fixStopAbout + "px")


// let fixPosition = fixStop;
// let fixPositionTwo = fixStopRain;

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




// Sticky add function

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}


// Fix Puzzle Peices

function addOrRemoveFixAbout() {
    if (window.scrollY >= fixStopAbout) {
        fixAbout.classList.add('puzzleFixed');
        isFixed = true;
        fixAbout.style.top = navElement.offsetHeight + "px"; 
    } else {
        fixAbout.classList.remove('puzzleFixed');
        isFixed = false;
    }
}

function addOrRemoveFixRain() {
    if (window.scrollY >= fixStopRain) {
        fixRain.classList.add('puzzleFixed');
        isFixed = true;
        fixRain.style.top = navElement.offsetHeight + fixAbout.offsetHeight +  "px"; 
    } else {
        fixRain.classList.remove('puzzleFixed');
        isFixed = false;
    }
}

function addOrRemoveFixPrairie() {
    if (window.scrollY >= fixStopPrarie) {
        fixPrarie.classList.add('puzzleFixed');
        isFixed = true;
        fixPrarie.style.top = navElement.offsetHeight + (fixAbout.offsetHeight * 2) +  "px"; 
    } else {
        fixPrarie.classList.remove('puzzleFixed');
        isFixed = false;
    }
}

function addOrRemoveFixPollen() {
    if (window.scrollY >= fixStopPollen) {
        fixPollen.classList.add('puzzleFixed');
        isFixed = true;
        fixPollen.style.top = navElement.offsetHeight + (fixAbout.offsetHeight * 3) +  "px"; 
    } else {
        fixPollen.classList.remove('puzzleFixed');
        isFixed = false;
    }
}

function addOrRemoveFixForest() {
    if (window.scrollY >= fixStopForest) {
        fixForest.classList.add('puzzleFixed');
        isFixed = true;
        fixForest.style.top = navElement.offsetHeight + (fixAbout.offsetHeight * 4) +  "px"; 
    } else {
        fixForest.classList.remove('puzzleFixed');
        isFixed = false;
    }
}

// function addOrRemoveFixSeed() {
//     if (window.scrollY >= fixStopSeed) {
//         fixSeed.classList.add('puzzleFixed');
//         isFixed = true;
//         fixSeed.style.top = navElement.offsetHeight + (fixAbout.offsetHeight * 5) +  "px"; 
//     } else {
//         fixSeed.classList.remove('puzzleFixed');
//         isFixed = false;
//     }
// }
// Generic Function not working

// function addOrRemoveFix(placeToFix, itemToFix) {
//     var fixPosition = placeToFix;
//     var fixItem = itemToFix;

//     if (window.scrollY >= fixPosition) {
//         fixItem.classList.add('puzzleFixed');
//         isFixed = true;
//         fixItem.style.top = navElement.offsetHeight + "px"; 
        
//     } else {
//         fixItem.classList.remove('puzzleFixed');
//         isFixed = false;
//     }
// }

// addOrRemoveFix("fixStopAbout", "fixAbout");
// addOrRemoveFix("fixStopRain", "fixRain");


// SCROLL LISTENER 

window.onscroll = () => {
    addOrRemoveSticky();
    // addOrRemoveFix();
    addOrRemoveFixAbout();
    addOrRemoveFixRain();
    addOrRemoveFixPrairie();
    addOrRemoveFixPollen();
    // addOrRemoveFixForest();
    // addOrRemoveFixSeed();
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




// GAVEYARD OF MANY HOURS BELOW //

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

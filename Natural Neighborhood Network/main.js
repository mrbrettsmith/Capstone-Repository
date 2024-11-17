document.addEventListener("DOMContentLoaded", function(event) { 
    
let fixAbout = document.getElementById('about');
let fixOffsetAbout = fixAbout.offsetTop;
var basePuzzSize = fixAbout.offsetWidth;


let puzzContianer = document.getElementById('puzzle-container-width');
let puzzContianerWidth = puzzContianer.offsetWidth;

let puzzSvg = document.getElementById('Svg-Height');
let pHeight = puzzSvg.offsetHeight;

let ViewWindow = window.innerHeight;

// NAV BAR DETAILS - Create dimension for Nav element (to remove from puzzle offset trigger)
let navElement = document.getElementById("stickyNavBar");
const navStyle = getComputedStyle(navElement);
let nMargin = parseInt(navStyle.marginTop); // offset and margin are same for Nav - probably delete one!
let nOffset = navElement.offsetTop;
let nHieght = navElement.offsetHeight;

console.log("Navbar Body Height: " + nHieght + "px", "top Margin: " + nMargin, "offset height: " + nOffset);

// MAKE NAV STICKY
let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;


// Sticky add function

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}

function addUnifiedPuzzStyle() {

    var elements = document.getElementsByClassName(".fixed-puzzle-container");
    // let fixOffset = elements[i] - nHieght + (basePuzzSize * i);
    // var fixStop = fixOffset - nHieght + (basePuzzSize * i);

// Set Universal Puzzle Width for i
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width=(basePuzzSize + "px");
    }
}

function addUnifiedPuzzTop() {
// set margin/stopheight for i (should it be top, or margin?)
    var elements = document.getElementsByClassName(".fixed-puzzle-container");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.top=(navElement.offsetHeight + i * basePuzzSize + "px");
    }
}



function triggerFix() {
    const puzzClass = document.getElementsByClassName('.fixed-puzzle-container');
    const puzzArray = [];

    for (let i = 0; i < puzzClass.length; i++) {
        const puzzPiece = puzzClass [i];
        
        const rect = puzzPiece.getBoundingClientRect();
            puzzArray.push({
            width: rect.width,
            height: rect.height,
            offset: rect.offsetTop,
            top: rect.top,
            });
      }
}
const puzzdata = triggerFix();
console.log(puzzdata);

// // Puzzle Class Array Generation

function getElementsData() {
    const elements = document.querySelectorAll('.puzzle-piece'); 
    const dataArray = [];

    elements.forEach(element => {
      dataArray.push({
        FromTop: element.offsetTop,
        containerHeight: element.getBoundingClientRect().y,
        // height: element.getBoundingClientRect().height, 
      });
    });
    return dataArray;
  }

  const elementData = getElementsData();
  console.log(elementData);


// new try
// function addFixTrigger() {
//     var elements = document.getElementsByClassName(".fixed-puzzle-container");
//     const fixOff = (elements.offsetTop + "px");
//     for (var i = 0; i < elements.length; i++){
//         if (window.scrollY >= fixOff) {
//             elements[i].classList.add('.triggered');
//         } else {
//             elements[i].classList.remove('.triggered');
//         }
//     }
// }


// OLD Fix Puzzle Peices - but worked

// function addOrRemoveFixAbout() {
//     if (window.scrollY >= fixStopAbout) {
//         fixAbout.classList.add('puzzleFixed');
//         isFixed = true;
//         // fixAbout.style.top = navElement.offsetHeight + "px"; 
//     } else {
//         fixAbout.classList.remove('puzzleFixed');
//         isFixed = false;
//     }
// }


// SCROLL LISTENER 

window.onscroll = () => {
    addOrRemoveSticky();

}


// RESIZE LISTENER 

window.onresize = function(){ 

    navElement = document.getElementById("stickyNavBar");
    // console.log("NavBar Width: " + navElement.offsetWidth + "px");
    console.log("Navbar Height: " + navElement.offsetHeight + "px");

    puzzleElement = document.getElementById("about");
    // console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
    console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

}

});




// GAVEYARD OF MANY HOURS BELOW //


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



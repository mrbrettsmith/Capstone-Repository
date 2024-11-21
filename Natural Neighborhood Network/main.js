document.addEventListener("DOMContentLoaded", function(event) { 
    
let fixAbout = document.getElementById('about');
let fixOffsetAbout = fixAbout.offsetTop;
var basePuzzSize = fixAbout.offsetWidth;


let puzzContianer = document.getElementById('puzzle-container-width');
let puzzContianerWidth = puzzContianer.offsetWidth;

let puzzSvg = document.getElementById('Svg-Height');
let pHeight = puzzSvg.offsetHeight;


// Garden Card Location Data - offsethieght or bounding box?



const aboutTextBox = document.getElementById('aboutText');
const aboutTextTop = aboutTextBox.getBoundingClientRect().top;

const aboutPuzzBox = document.getElementById('about');
const aboutPuzzTop = aboutPuzzBox.getBoundingClientRect().top;

const rainTextBox = document.getElementById('rainText');
const rainTextTop = rainTextBox.getBoundingClientRect().top;

const rainPuzzBox = document.getElementById('rain');
const rainPuzzTop = rainPuzzBox.getBoundingClientRect().top;

const prairieTextBox = document.getElementById('prairieText');
const prairiePuzzBox = document.getElementById('prairie');

const pollenTextBox = document.getElementById('pollenText');
const pollenPuzzBox = document.getElementById('pollen');

const forestTextBox = document.getElementById('forestText');
const forestPuzzBox = document.getElementById('forest');

const seedTextBox = document.getElementById('seedText');
const seedPuzzBox = document.getElementById('seed');




// Scroll Height Tester
function getElementYPosition(elementId) {
    const element = document.getElementById(elementId);
  
    if (!element) {
      return null;
    }
  
    // Get the initial Y position
    const initialY = element.getBoundingClientRect().top;
  
    // Update the Y position when scrolling
    window.addEventListener('scroll', () => {
      const currentY = element.getBoundingClientRect().top;
      console.log('ID: ',element, 'Current Y position:', currentY);
    });
  
    return initialY;
  }
  
 


// why is this so weird. should just work
// Matches to container heights I think.
    function matchTop(elementToMove, targetElement) {
        const targetTop = targetElement.getBoundingClientRect().top;

        const pageTotal = document.documentElement.scrollTop;
        newTopHieght = pageTotal + targetTop;


        elementToMove.style.top = `${newTopHieght}px`;
        // console.log('ID: ',elementToMove, 'Current Y position:', elementToMove.style.top);
        // console.log('ID: ',targetElement, 'Current Y position:', targetTop);
    };

    matchTop(about,aboutText);
    matchTop(rain,rainText);
    matchTop(prairie,prairieText);
    matchTop(prairie,prairieText);
    matchTop(pollen,pollenText);
    matchTop(forest,forestText);
    matchTop(seed,seedText);

    window.addEventListener('scroll', () => {
        addOrRemoveStickyAbout();

        matchTop(about,aboutText);
        matchTop(rain,rainText);
        matchTop(prairie,prairieText);
        matchTop(prairie,prairieText);
        matchTop(pollen,pollenText);
        matchTop(forest,forestText);
        matchTop(seed,seedText);

        
    });

    window.addEventListener('resize', () => {
        matchTop(about,aboutText);
        matchTop(rain,rainText);
        matchTop(prairie,prairieText);
        matchTop(prairie,prairieText);
        matchTop(pollen,pollenText);
        matchTop(forest,forestText);
        matchTop(seed,seedText);
    });






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

// Generic Stiky function (I hope)
let stickyItemAbout = document.getElementById('about');
let stickyPositionAbout = stickyItem.offsetTop + 400;


// Sticky add function

function addOrRemoveStickyAbout() {
    if (window.scrollY >= stickyPositionAbout) {
        stickyItemAbout.style.top = 100 ;
        stickyItemAbout.style.position = 'sticky';
        
    } else {
        stickyItemAbout.style.position = 'absolute';
    }    
}







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
    // console.log("Navbar Height: " + navElement.offsetHeight + "px");

    puzzleElement = document.getElementById("about");
    // // console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
    // console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

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



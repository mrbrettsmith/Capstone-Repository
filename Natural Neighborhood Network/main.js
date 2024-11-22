document.addEventListener("DOMContentLoaded", function(event) { 
    
const mAbout = document.getElementById('about');
const hAbout = document.getElementById('hiddenAbout');

const mRain = document.getElementById('rain');
const hRain = document.getElementById('hiddenRain');

const mPrairie = document.getElementById('prairie');
const hPrairie = document.getElementById('hiddenPrairie');

const mPollen = document.getElementById('pollen');
const hPollen = document.getElementById('hiddenPollen');

const mForest = document.getElementById('forest');
const hForest = document.getElementById('hiddenForest');

const mSeed = document.getElementById('seed');
const hSeed = document.getElementById('hiddenSeed');


function switchOnIntersect(hidden,moving) {
    const puzFixed = hidden.getBoundingClientRect(); 
    const puzzMove = moving.getBoundingClientRect(); 
    const puzFixedTop = puzFixed.y;
    const puzMoveTop = puzzMove.y;

        if (puzMoveTop <= puzFixedTop) {
            hidden.style.opacity = 1; 
        } else {
            hidden.style.opacity = 0; 
        }
};


switchOnIntersect(hAbout,mAbout);
switchOnIntersect(hRain,mRain);
switchOnIntersect(hPrairie,mPrairie);
switchOnIntersect(hPollen,mPollen);
switchOnIntersect(hForest,mForest);
switchOnIntersect(hSeed,mSeed);

window.addEventListener('scroll', () => {
    addOrRemoveSticky();
    switchOnIntersect(hAbout,mAbout);
    switchOnIntersect(hRain,mRain);
    switchOnIntersect(hPrairie,mPrairie);
    switchOnIntersect(hPollen,mPollen);
    switchOnIntersect(hForest,mForest);
    switchOnIntersect(hSeed,mSeed);   
});

window.addEventListener('resize', () => {
    navElement = document.getElementById("stickyNavBar");
    puzzleElement = document.getElementById("about");
    windowSize = window.innerHeight;
});

// SET PUZZLE SIZE TO VEIWPORT
let navElement = document.getElementById("stickyNavBar");
let nOffset = navElement.offsetTop;
let windowSize = window.innerHeight;
const viewportHeight = windowSize- nOffset;
let puzzScaled = viewportHeight / 6.5;

const puzzClass = document.querySelectorAll('.puzzle-piece'); 

puzzClass.forEach((element) => {
  element.style.height = puzzScaled + 'px';
  element.style.width = puzzScaled + 'px';
});




// MAKE NAV STICKY
let stickyItem = document.getElementById('stickyNavBar');
let stickyPosition = stickyItem.offsetTop;

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}


});



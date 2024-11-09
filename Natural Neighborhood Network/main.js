document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');

let stickyPosition = stickyItem.offsetTop;

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixPosition = fixItem.offsetTop;

// Element positioning

let navElement = document.getElementById("stickyNavBar");
console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("stickyPuzzlePiece");
console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");



var count = 0;
console.log(count); 


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

    } else {
        fixItem.classList.remove('puzzleFixed');
    }

    

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
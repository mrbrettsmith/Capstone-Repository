document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');

let stickyPosition = stickyItem.offsetTop;

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixPosition = fixItem.offsetTop;

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}

function addOrRemoveFix() {
    if (window.scrollY >= fixPosition) {
        fixItem.classList.add('puzzleFixed');
    } else {
        fixItem.classList.remove('puzzleFixed');
    }
}

window.onscroll = () => {
    addOrRemoveSticky();
    addOrRemoveFix();
}




});
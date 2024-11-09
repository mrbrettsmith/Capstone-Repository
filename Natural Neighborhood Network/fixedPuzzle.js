//stickyPuzzlePiece

document.addEventListener("DOMContentLoaded", function(event) { 
    
let fixItem = document.getElementById('stickyPuzzlePiece');

let fixPosition = fixItem.offsetTop;

function addOrRemoveFix() {
    if (window.scrollY >= fixPosition) {
        fixItem.classList.add('puzzleFixed');
    } else {
        fixItem.classList.remove('puzzleFixed');
    }
}

window.onscroll = () => {
    addOrRemoveFix();
}
    
    });
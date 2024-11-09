let stickyItem = document.getElementById("stickyNavBar stickyPuzzlePiece");

let stickyPosition = stickyItem.offsetTop;

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add("blue");
    } else {
        stickyItem.classList.remove("blue");
    }
}

window.onscroll = () => {
    addOrRemoveSticky();
}

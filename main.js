document.addEventListener("DOMContentLoaded", function(event) {   
 
// MAKE NAV STICKY
let stickyNav = document.getElementById("stickyNavItems");
let stickyNavPosition = stickyNav.offsetTop;

let stickyItem = document.getElementsByClassName('stickyElement');
let stickyItemPosition = stickyItem.offsetTop;

function addOrRemoveStickyNav() {
    if (window.scrollY >= stickyNavPosition) {
        stickyNav.classList.add('stickyNav');
    } else {
        stickyNav.classList.remove('stickyNav');
    }    
}

function addOrRemoveStickyItem() {
    if (window.scrollY >= stickyItemPosition) {
        stickyItem.classList.add('stickyItem');
    } else {
        stickyItem.classList.remove('stickyItem');
    }    
}

window.onscroll = () => {
    addOrRemoveStickyNav();
    addOrRemoveStickyItem();
}






});






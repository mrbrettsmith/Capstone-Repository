document.addEventListener("DOMContentLoaded", function(event) {   
 
// MAKE NAV STICKY

let stickyItem = document.getElementById("stickyNavItems");
let stickyPosition = stickyItem.offsetTop;



// Sticky add function

function addOrRemoveSticky() {
    if (window.scrollY >= stickyPosition) {
        stickyItem.classList.add('sticky');
    } else {
        stickyItem.classList.remove('sticky');
    }    
}

window.onscroll = () => {
    addOrRemoveSticky();
}



});






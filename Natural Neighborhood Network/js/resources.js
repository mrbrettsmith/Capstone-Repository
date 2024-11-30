document.addEventListener("DOMContentLoaded", function(event) { 
    
    window.addEventListener('scroll', () => {
        addOrRemoveSticky();

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
    
    
    
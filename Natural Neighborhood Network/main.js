document.addEventListener("DOMContentLoaded", function(event) { 
    

let stickyItem = document.getElementById('stickyNavBar');

let stickyPosition = stickyItem.offsetTop;

let fixItem = document.getElementById('stickyPuzzlePiece');
let fixPosition = fixItem.offsetTop;





// Try something new - draw html class into array of objects. define hight and offset, (and name?) Then mod offset based on height


// const elements = document.querySelectorAll(".puzzle-piece");
// const classArray = Array.from(elements).map(element => element.className);
// console.log(classArray);

// pulling Each puzzle height & name



function getElementsData() {
    const elements = document.querySelectorAll('.puzzle-piece'); 
    const dataArray = [];
    

    elements.forEach(element => {
      dataArray.push({

        name: element.className,
        height: element.offsetHeight, 
        width: element.offsetWidth,
        FromTop: element.offsetTop,
        ContainerHeight: element.getBoundingClientRect(),
        
      });
    });

    return dataArray;
  }
  

  
  const elementData = getElementsData();
  console.log(elementData);


  
// count Each Puzzle class 
// THIS IS WORKING!


// function puzzleTag() {
//     var puzzleList = document.getElementsByClassName("puzzle-piece");
//     for(var i=0; i < puzzleList.length; i++){
//         //puzzleList[i].setAttribute("id", "field"+i);
//         puzzleList[i].value = "Johnny Bravo "+i;
//         puzzleList[i].classList.add("mystyle" + i);
//     }
//     console.log("puzzle amount:",puzzleList.length);
//    }
//    window.onload = puzzleTag();

// var elements = document.getElementsByClassName('input');

// var index = 1;
// for(var e of elements){
//     e.setAttribute("id", "fieldid"+index);
//     index++;
// }


// Make string, then setAttribute() of increasing offset top - or multiply x index #

    


    // this almost works, but boolian is broken, always adding padding

   // if (isFixed = true) {addToArray(fixedCount, + puzzleElement.offsetHeight + "px");}
    //if (isFixed = true) {
        //fixedTotalHeight =  puzzleElement.offsetHeight + "px";
        //{fixedTotalHeight + (element);}
       // addToTotalHeight(puzzleElement.offsetHeight + "px");
    //}

    //console.log("Total Puzzle Height:",fixedTotalHeight);
    //console.log("Total Puzzle Height:",fixedCount);





//to do:
// make the svg square
// count puzzle pieces
// add # id to each peice
// sum of puzzle offsetheight x puzzle #








//
// Display 
//console.log(isFixed);
//console.log(fixedCount);
//console.log("Total Puzzle Height:",fixedTotalHeight);

// Element positioning

let navElement = document.getElementById("stickyNavBar");
console.log("NavBar Width: " + navElement.offsetWidth + "px");
console.log("Navbar Height: " + navElement.offsetHeight + "px");

let puzzleElement = document.getElementById("stickyPuzzlePiece");
console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");




// Sticky add function

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
        
        fixItem.style.top = navElement.offsetHeight + "px"; 

        // ACTUNG! This adds to top in the container too! no good, gotta add to offset?

        //fixItem.style.top.add(navElement.offsetHeight);
        //fixItem.style.top = navElement.offsetHeight + "px"; 
        isFixed = true;
    } else {
        fixItem.classList.remove('puzzleFixed');
        isFixed = false;
    }

}

window.onscroll = () => {
    addOrRemoveSticky();
    addOrRemoveFix();
}

//resize update

window.onresize = function(){ 
    // navElement = document.getElementById("stickyNavBar");
    // console.log("NavBar Width: " + navElement.offsetWidth + "px");
    // console.log("Navbar Height: " + navElement.offsetHeight + "px");

    // puzzleElement = document.getElementById("stickyPuzzlePiece");
    // console.log("Puzzle Width: " + puzzleElement.offsetWidth + "px");
    // console.log("Puzzle Height: " + puzzleElement.offsetHeight + "px");

    // ACTUNG! This adds to top in the container too! no good, gotta add to offset?
    //fixItem.style.top = navElement.offsetHeight + "px"; 
}

});
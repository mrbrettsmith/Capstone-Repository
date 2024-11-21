window.addEventListener('DOMContentLoaded', (event) => {
    
    // Seting canvas in container
 
    const element1 = document.getElementById('threeText');
    const element2 = document.getElementById('three');
     

    
    function matchTop(elementToMove, targetElement) {
      const targetTop = targetElement.getBoundingClientRect().top;
      elementToMove.style.top = `${targetTop}px`;
      console.log('ID: ',elementToMove, 'Current Y position:', elementToMove.style.top);
      console.log('ID: ',targetElement, 'Current Y position:', targetTop);
    };

    matchTop(element1,element2)
    window.addEventListener('scroll', () => {
      matchTop(element1,element2)
    });
    
    

    // end new try

    // const fiveTop = fiveRect.top + 'px';
    // fiveLeft = fiveRect.left + 'px';
    // ctx.fillRect( fiveLeft, fiveTop, 100, 100);
    // ctx.fillStyle = "red"; 

    // console.log(fiveTop);


    // function resizeCanvas() {
    //     canvas.width = frame.offsetWidth;
    //     canvas.height = frame.offsetHeight;
    
    //     // build this with a better function, but draw works now, and scales
    // for(var i = 0; i < 5; i++) {
    //     var x = 100;
    //     var y = i * fiveTop;
    //     ctx.fillRect( x, y, 100, 100);
    // }

    //     // Redraw your canvas content here if necessary
    // }
    
    // // Initial resize on load
    // resizeCanvas();
    // // Resize the canvas when the window is resized
    // window.addEventListener('resize', resizeCanvas); 
  

    // // function puzz(options) {
    // //     this.x = options.x;
    // //     this.y = options.y;
    // //     this.width = 50;
    // //     this.height = 50;
    // //     this.color = red;
    // // }

    // // function drawPuzz(puzz) {
    // //     ctx.fillStyle = puzz.color;
    // //     ctx.fillRect = (puzz.x, puzz,y, puzz.width, puzz.height);
    // // }



});
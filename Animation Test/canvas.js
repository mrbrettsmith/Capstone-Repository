window.addEventListener('DOMContentLoaded', (event) => {
    
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    const frame = document.getElementById('graphic');
  
    function resizeCanvas() {
        canvas.width = frame.offsetWidth;
        canvas.height = frame.offsetHeight;
    
        // build this with a better function, but draw works now, and scales
    for(var i = 0; i < 5; i++) {
        var x = 100;
        var y = i * 125;
        ctx.fillRect( x, y, 100, 100);
    }

        // Redraw your canvas content here if necessary
    }
    
    // Initial resize on load
    resizeCanvas();
    // Resize the canvas when the window is resized
    window.addEventListener('resize', resizeCanvas); 
  

    // function puzz(options) {
    //     this.x = options.x;
    //     this.y = options.y;
    //     this.width = 50;
    //     this.height = 50;
    //     this.color = red;
    // }

    // function drawPuzz(puzz) {
    //     ctx.fillStyle = puzz.color;
    //     ctx.fillRect = (puzz.x, puzz,y, puzz.width, puzz.height);
    // }



});
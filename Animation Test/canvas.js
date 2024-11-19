window.addEventListener('DOMContentLoaded', (event) => {
    
    var canvas = document.querySelector('canvas');
    var ctx = canvas.getContext('2d');
    const frame = document.getElementById('graphic');
  

    function resizeCanvas() {
        canvas.width = frame.innerWidth;
        canvas.height = frame.innerHeight;
    
        // Redraw your canvas content here if necessary
    }
    console.log(canvas);

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas); 

  

    function puzz(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = 100;
        this.height = 100;
        this.color = red;
    }

    function drawPuzz(puzz) {
        ctx.fillStyle = puzz.color;
        ctx.fillRect = (puzz.x, puzz,y, puzz.width, puzz.height);
    }

    for(var i = 0; i < 5; i++) {
        var x = 100;
        var y = 300 * i;
        ctx.fillRect(x,y, 100,100);
    }

});
const c = document.getElementById("my_canvas");
const ctx = c.getContext("2d");

function drawEnvelope() {
    // starting point.
    ctx.moveTo(0, 0);
    // move line.
    ctx.lineTo(50, 70);
    ctx.lineTo(50, 100);
    ctx.lineTo(240, 100);
    ctx.lineTo(240, 70);
    ctx.lineTo(300, 0);
    ctx.lineTo(300, 150);
    ctx.lineTo(0, 150);
    ctx.lineTo(0, 0);
    ctx.lineTo(300, 0);
   

    ctx.fillStyle = 'green';
    ctx.fillRect(125, 70, 30, 60);

    // stroking the line on top of rectangle, as it's called after rect.
    ctx.stroke();

    // set html <p> to show something.
    var my_button = document.getElementById("my_button");
    my_button.innerHTML = "Done!";
    
}
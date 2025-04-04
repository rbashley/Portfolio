var paintcanvas = document.getElementById("pnt_area");
var context = paintcanvas.getContext("2d");
var color = 'black';
var radius = 50;
// only paint if mouse is being dragged (moved while the button is pressed)
var isPainting = false;

function formatCanvasSize(){
  
  console.log("Change Detected")
  
  let canvas = document.getElementById("pnt_area");
  let width = document.getElementById("cnvs_width").value;
  let height = document.getElementById("cnvs_height").value;
  
  if(isNumeric(height) && isNumeric(width)){
  
  console.log("sizes: "+width+"x"+height)

canvas.width = width
canvas.height = height}

}

function setBrushColor(){
  color = document.getElementById("brsh_clr").value
}

function setBrushSize(){
  var size = document.getElementById("brsh_sz").value
  
  radius = size
  document.getElementById("sizeOutput").innerHTML = size
}

function startPaint(){
  isPainting = true;
}

function endPaint(){
  isPainting = false;
}

function doPaint(x, y){
  
  if(isPainting == true){
    paintCircle(x,y)
  }
}

function clearCanvas () {
  console.log("Clearing Canvas")
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}

// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}

setBrushSize();
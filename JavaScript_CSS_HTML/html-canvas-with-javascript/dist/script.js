function changeColor() {
  let bluebacks = document.getElementsByClassName("blueback");
  let orangebacks = document.getElementsByClassName("orangeback");

  // Convert HTMLCollections to arrays to avoid live collection issues
  let blueArray = Array.from(bluebacks);
  let orangeArray = Array.from(orangebacks);

  // Change all blueback to orangeback
  blueArray.forEach(el => {
    el.className = "orangeback";
  });

  // Change all orangeback to blueback
  orangeArray.forEach(el => {
    el.className = "blueback";
  });
}

function doBlue(){
  var element = document.getElementById("div1")
  
  var cntx = element.getContext("2d")
  cntx.fillStyle = "#33ffff"
  cntx.fillRect(5, 5, 30, 30)
  
  cntx.fillStyle = "#ff33ff"
  cntx.font = "20px Arial"
  cntx.fillText("Orange", 5, 55)
}

function doOrange(){
  var element = document.getElementById("div1")
  
  var cntx = element.getContext("2d")
  
  cntx.clearRect(0, 0, element.width, element.height)

}
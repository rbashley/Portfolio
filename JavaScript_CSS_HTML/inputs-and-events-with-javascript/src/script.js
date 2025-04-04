function update(){
  var element = document.getElementById("drw_area")
  var color = document.getElementById("clr_pckr").value

  element.style.backgroundColor=color
}

function doSquare(){
  var element = document.getElementById("drw_area")
  var size = document.getElementById("sldr").value
  var cntx = element.getContext("2d")
  
  cntx.clearRect(0,0, element.width, element.height)
  cntx.fillStyle = "#ffff33"
  cntx.fillRect(5, 5, size, size)
}
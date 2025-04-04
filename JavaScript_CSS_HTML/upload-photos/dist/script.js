function upload(){
  var input_image = document.getElementById("filePath")
  var display = document.getElementById("display")
  var image = new SimpleImage(input_image)
  
  display.style.width = image.getWidth()
  display.style.height = image.getHeight()
  
  image.drawTo(display)
}
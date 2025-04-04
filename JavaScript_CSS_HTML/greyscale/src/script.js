var image = null;
var grey_image = null;

function upload(){
  var input_image = document.getElementById("filePath")
  image = new SimpleImage(input_image)
  
  display(image)
}

function makeGrey(){
  
  var width = image.getWidth();
  var height = image.getHeight();
  
  grey_image = new SimpleImage(width, height);
  
  for(var pix of image.values()){
    var x = pix.getX();
    var y = pix.getY();
    var avg = avgPixel(pix);
    
    var grey_pixel = grey_image.getPixel(x,y)
    
    grey_pixel.setRed(avg);
    grey_pixel.setGreen(avg);
    grey_pixel.setBlue(avg);
  }
  
  display(grey_image)
}

function avgPixel(pixel){
  var red = pixel.getRed();
  var green = pixel.getGreen();
  var blue = pixel.getBlue();
  
  var avg = (red + green + blue)/3
  
  return avg
}

function display(target_image){
  var display = document.getElementById("display")
    display.style.width = image.getWidth()
  display.style.height = image.getHeight()
  
  target_image.drawTo(display)
}
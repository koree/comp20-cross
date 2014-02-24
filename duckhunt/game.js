// Your work goes here...


function draw() {
  var ctx = document.getElementById('game').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,115,35,35,30,30, 100,100); //blue duck
    //drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
    ctx.drawImage(img,0,0,60,50, 100, 100, 144,120); //dog
    ctx.drawImage(img,0,714,900,66,0,365, 800, 70); //bushes
    ctx.drawImage(img,0,770,900,74,0,430, 800,135); //grass

    
    //ctx.drawImage(img,0,115,35,35,30,30, 100,100);
    ctx.fillStyle = "#C96A1B";//ground
        ctx.fillRect (0, 565, 800, 35);
    ctx.fillStyle = "#87CEEB";// fixes bushes by covering overlap
      ctx.fillRect (55, 425, 500, 10); 
    ctx.fillStyle = "#87CEEB";// fixes bushes by covering overlap
      ctx.fillRect (625, 425, 190, 10); 

    
  };
  img.src = 'assets/duckhunt.png';
}
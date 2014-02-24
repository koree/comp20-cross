// Your work goes here...


function draw() {
  var ctx = document.getElementById('game').getContext('2d');
  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,115,35,35,30,30, 35,35);
    
  };
  img.src = 'assets/duckhunt.png';
}
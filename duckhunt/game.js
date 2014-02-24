// Your work goes here...


function draw() {
  var ctx = document.getElementById('game').getContext('2d');
  var img = new Image();
  img.onload = function(){
  	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

   	ctx.drawImage(img,0,270,80,130, 75, 10, 320, 510); //tree 
		
	ctx.drawImage(img,0,700,900,200, 0, 365, 800, 235); //screen bottom (grass etc)

    ctx.drawImage(img,0,0,60,50, 35, 490, 144,120); //dog

	//loading ducks after background puts them in foreground of picture
		// in running version of game, grass might need to load after ducks
		// so that they don't fly over grass in animation

	ctx.drawImage(img,0,115,35,35,65,30, 100,100); //blue duck level
	ctx.drawImage(img,128,155,35,35, 45, 300, 100,100); //black duck angle
	ctx.drawImage(img,259,231,35,35, 350, 150, 100,100);//red duck shot
	ctx.drawImage(img,39,237,35,35,700,30, 100,100); //blue duck falling
	ctx.drawImage(img,207,197,35,35,650,300, 100,100); //black duck backside
    
  };
  img.src = 'assets/duckhunt.png';
}
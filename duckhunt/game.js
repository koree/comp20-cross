// Your work goes here...


function draw() {
  var ctx = document.getElementById('game').getContext('2d');
  var img = new Image();
  img.onload = function(){
  	//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

    ctx.drawImage(img,0,714,900,66,0,365, 800, 70); //bushes

		ctx.fillStyle = "#87CEEB";// fixes bushes by covering overlap
	      ctx.fillRect (55, 425, 500, 10); 
		ctx.fillStyle = "#87CEEB";// bush fix #2
	      ctx.fillRect (625, 425, 190, 10);
	
	ctx.drawImage(img,0,270,80,130, 75, 10, 320, 510); //tree 
		//loading tree after bush fix layers it over blue bar
    ctx.drawImage(img,0,770,900,74,0,430, 800,135); //grass

    ctx.fillStyle = "#C96A1B";//ground
        ctx.fillRect (0, 565, 800, 35);

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
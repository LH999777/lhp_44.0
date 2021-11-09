var bg,bg1,bg2,bg3;
var img1,img2,img3;
var img;


function preload()
{
 img= loadImage("img1.jpg");
 img1= loadImage("img2.png");
 img2= loadImage("img3.jpg");
 bg= loadImage("bg.jpg");
 bg1= loadImage("bg1.jpg");
 bg2= loadImage("bg2.jpg");
 bg3= loadImage("bg3.jpg");
 

}








function setup() {

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  BG=createSprite(width/2,200);
  BG.addImage(bg1);
  BG.scale=1;




  button = createImg('img1.jpg');
  button.position(20,30);
  button.size(50,50);
  //button.mouseClicked(drop);

  button1 = createImg('img2.png');
  button1.position(40,30);
  button1.size(50,50);
  button1.mouseClicked();

  button3 = createImg('cut_btn.png');
  button3.position(20,30);
  button3.size(50,50);
  //button3.mouseClicked(drop);


}

function draw() {
  background(255,0,0);  
  drawSprites();
}
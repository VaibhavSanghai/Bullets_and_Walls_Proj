//Calling all variables outside all functions
var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  //Creating the bullet
  bullet = createSprite(50, 200, 20, 30);
  bullet.shapeColor = color(255,255,255);

  //Giving the thickness its random position
  thickness = random(22,83);

  //Creating the wall
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  //Giving speed and weight their random numbers
  speed = random(223,321);
  weight = random(30,52);

  //Assigning the bullet its velocity
  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255); 

  //Statig the if statement for the deformation
  if (wall.x - bullet.x < (bullet.width/2 + wall.width/2)) {
    bullet.velocityX = 0;

    //Defining the deformation var
    var deformation = 0.5 * weight * speed * speed/22509;

  //Stating the number of deformation, according to which the bullet's shapeColor changes
  if (deformation > 180) {
      bullet.shapeColor = color(255,0,0);
    }

  if (deformation < 180 && deformation > 100) {
      bullet.shapeColor = color(230,230,0);
    }

  if (deformation < 100) {
      bullet.shapeColor = color(0,255,0);
    }
  }

  //Using the if condition to format with the hasCollided function
  if (hasCollided(bullet,wall)) {
    bullet,veolcityX = 0;

    //Defining the damage var
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    //Using the damage var in changing the wall's color
    if (damage > 10) {
      wall.shapeColor = color(255,0,0);
    }

    if (damage < 10) {
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

//Characterising the hasCollided function
function hasCollided(lbullet,lwall) {
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge = lwall.x;

  if (bulletRightEdge >= wallLeftEdge) {
  return true;
  }
    return false; 
}
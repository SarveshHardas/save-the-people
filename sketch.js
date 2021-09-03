const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var score = 0;
function preload()
{
  bg = loadImage("1035.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  helicopter = new Ground(width/3-100,height-600,200,200);
  people = new People(width/3-130,height-150,100,100);
  foodBasket = new Basket(width/3-130,height-450,50,50);
  rope = new  Rope(3,{x:width/3-130,y:height-500});
  basket_con = new Link(rope,foodBasket.body);

  button1 =createImg("cut_btn.png");
  button1.position(width/3-130,height-550);
  button1.size(25,25);
  button1.mouseClicked(drop1);
}

function draw() 
{
  
  background(bg);
  Engine.update(engine);

  rope.show();
  helicopter.display();
  foodBasket.display();
  people.display();
  
  collide(foodBasket,people);


 fill("#6d4c41")
 textSize(30)
 text ("Score: "+score,width-200,50)

}

function drop1()
{
  rope.break();
  basket_con.detach();
  basket_con=null;
} 
function collide(foodBasket,bodyB)
{
  if(foodBasket!=null)
        {
         var d = dist(foodBasket.body.position.x,foodBasket.body.position.y,bodyB.body.position.x,bodyB.body.position.y);
          if(d<=80)
            {
               score=+5;
               foodBasket=null;
               return true; 
            }
            else{
              return false;
            }
         }
}

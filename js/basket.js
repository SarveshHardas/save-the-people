class Basket
{
    constructor(x,y,width,height)
    {
        this.width=width
        this.height=height
        this.image = loadImage("foodBasket.png")
        this.body=Bodies.rectangle(x,y,width,height)
        World.add(world,this.body)
    }
    display()
    {
        var pos=this.body.position
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,50,50)
        pop()
    }
}
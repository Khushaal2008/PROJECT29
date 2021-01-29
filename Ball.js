class Ball{
    constructor(x,y,radius){
var options={
    isStatic:false,
    'restitution':0.8,
    'friction':1.0,
    'density':1.0,
    
}
30
this.body = Bodies.circle(x,y,radius,options)
//this.image = loadImage("polygon.png")
this.x = x;
this.y = y;
this.radius = radius;

World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;

      ellipseMode(RADIUS)
      ellipse(pos.x,pos.y, this.radius, this.radius)
    }
}
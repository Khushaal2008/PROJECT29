class Ground{
    constructor(){
var options={
    isStatic:true
}
this.body = Bodies.rectangle(600,690,9000,20,options)
World.add(world, this.body)
    }
    display(){
        
        fill (2,123,32)
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,9000,10)
    }
}
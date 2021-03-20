class Ground {

    constructor(x,y,width,height,color) {

        var options = {isStatic:true, 'restitution':0.8, 'friction':0.6, 'density':2.0}
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;
        this.color = color;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;

        push()
        fill(this.color)
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.height)
        pop()
    }
}
class Bottle {

    constructor(x,y) {

        var options = {'restitution':0.6, 'friction':0.8, 'density':1.2}
        this.body = Bodies.rectangle(x,y,25,85)
        this.width = 25;
        this.height = 85;
        this.image = loadImage("bottle.png")

        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}
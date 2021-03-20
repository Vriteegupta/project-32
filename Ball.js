class Ball {

    constructor(x,y) {

        var options = {'restitution':0.8, 'friction':0.6, 'density':1.2}
        this.body = Bodies.circle(x,y,16)
        this.r = 30;
        this.image = loadImage("Baseball.png")

        World.add(world, this.body)
    }
    display() {
        var pos = this.body.position;

        push()
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, 30, 30)
        pop()
    }
}
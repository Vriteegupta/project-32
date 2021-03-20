class Slingshot {

    constructor(bodyA,pointB) {

        this.pointB = pointB;
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.08,
            length:15
        }
        this.sling = Constraint.create(options);  

        World.add(world, this.sling)
    }
    launch() {
        this.sling.bodyA = null;
    }
    attach() {
        this.sling.bodyA = baseball.body;
    }
    display() {
        if(this.sling.bodyA) {
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;

        strokeWeight(3)
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y)
        }
    }
}
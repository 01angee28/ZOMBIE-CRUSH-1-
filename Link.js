class Link {

    constructor (bodyA,bodyB){
        var lastLink = bodyA.body.bodies.length - 2 
        this.link = Constraint.create ({
            bodyA:bodyA.body.bodies[lastLink],
            bodyB:bodyB.body,
            stiffness:0.5,
            length:10
        })
        World.add(world,this.link);
    }
}
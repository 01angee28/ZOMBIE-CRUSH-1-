class Stone {

    constructor (x,y,r,color) {

        var options = {
            restitution:0.8
        }

        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        this.color = color;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        fill(this.color);
        ellipse(pos.x,pos.y,this.r,this.r);
    }

}
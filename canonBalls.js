class CanonBalls {
    constructor (x,y){
        var props = {
            restitution : 0.8,
            friction : 1,
            density :1,
            isStatic : true
        }
        this.radius = 40; 

        this.balls = Bodies.circle (x,y,this.radius,props);
        World.add(world,this.balls);

        this.img = loadImage ("assets/cannonball.png")
        console.log (this.balls.position.y);
    }

    show (){
        push ()
        translate (this.balls.position.x,this.balls.position.y);
        rotate (this.balls.angle);
        imageMode (CENTER);
        image (this.img,0,0,this.radius,this.radius);
        pop ()
    }


    shoot (){
        var velocity = p5.Vector.fromAngle(canon1.angle);
        velocity.mult (20);
        Matter.Body.setVelocity (this.balls, {x : velocity.x, y: velocity.y});
        Matter.Body.setStatic (this.balls,false);
    }
}
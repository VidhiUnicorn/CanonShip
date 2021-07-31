class Tower {

    constructor (){
        var prop = {
            isStatic : true,

        }
        this.img = loadImage ("assets/tower.png");

        this.tower1 = Bodies.rectangle (150,350,160,310,prop)
        World.add(world,this.tower1);
}
    show (){
        push ();
        translate (this.tower1.position.x,this.tower1.position.y);
        rotate (this.tower1.angle);
        imageMode (CENTER);
        image(this.img,0,0,160,310);
        pop ();
    }

}
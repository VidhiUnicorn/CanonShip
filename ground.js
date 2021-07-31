class Ground {
    constructor (){
       var options = {
           isStatic : true,
       }
        this.ground = Bodies.rectangle(0,height-1,width*2,1,options);

        World.add(world,this.ground);
        


    }

    display (){
        push ();
        translate (this.ground.position.x,this.ground.position.y)
        rectMode(CENTER);
        fill ("brown");
        rect (0,0,width*2,1);

        pop ();

    }

}
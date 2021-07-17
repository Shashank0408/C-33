class snow{
    constructor(x, y) {
        var options = {
            isStatic:false,
        }
        this.snowImg = loadImage("snow4.webp");
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body);
    }
    display(){
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     ellipseMode(RADIUS);
     this.body.velocityY = 3;
    snowImg.scale =1 ;
     image(this.snowImg,0,0, this.r+50, this.r+50);
     pop();
    }
}
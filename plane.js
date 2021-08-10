class Plane{
    constructor(x,y,width,height){

        this.plane = createSprite(x,y,width,height);
        this.y = y;
        this.x = x;
        this.plane.addImage("planei",planei);
        this.plane.addAnimation("explosiona",explosiona)
        this.plane.setCollider("rectangle",0,0,110,30);
        //this.plane.mirrorX(-1);
        
    }

    keys(){
        if(keyDown(UP_ARROW)){
            this.plane.y-=10;
            this.y = this.plane.y;
            this.plane.addImage("planei",planef);

        }

        if(keyDown(DOWN_ARROW)){
            this.plane.y+=10;
            this.y = this.plane.y;
            this.plane.addImage("planei",planed);

        }

        if(keyDown(LEFT_ARROW)){
            this.plane.x-=7;
            this.x = this.plane.x;
            this.plane.addImage("planei",planes);

        }

        if(keyDown(RIGHT_ARROW)){
            this.plane.x+=7;
            this.x = this.plane.x;
            this.plane.addImage("planei",planea);

        }
        
    }

    shoot(direction){

        if(frameCount%10===0){
            var bullet = new Bullet(this.x,this.y,direction);
            bullet.dest();
        }
            
        
    }
    
}
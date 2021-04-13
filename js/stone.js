class Stone{
    constructor(x,y,r){
        this.x=x;
		this.y=y;
        this.r=r
           
        
        this.body=Bodies.circle(x,y,r)
        World.add(world,this.body)
        this.stoneImage=loadImage("images/stone.png")
    }

    display(){
    image(this.stoneImage,this.body.position.x,this.body.position.y,50,50)
    }
}
class Tree {
    constructor(x,y,width,height){
        var options ={
            isStatic: true
        }
     
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        //this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
        // World.add(world,this.body);
        console.log(tree);
    }

    display(){
      //var pos = this.body.position;

      push();
      //translate(pos.x,pos.y);
      //rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image,this.x,this.y,this.width,this.height);
      pop();
    }
}
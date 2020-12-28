class Ground{
    constructor(x, y, width, height) {
        var options = {
          isStatic : true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/grass1.png");
        World.add(myWorld, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
        //translate();
        ///rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}
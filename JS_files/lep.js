class Lep{
    constructor(x, y) {
        var options = {
        restitution: 0.1,
        friction:0.5,
        density:0.5
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = width;
        this.height = height;
        this.image =  loadAnimation("images/l1.png","images/l2.png","images/l3.png")
        World.add(myWorld, this.body);
      }
      display(){
        push();
       // translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
}
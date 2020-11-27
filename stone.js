class Stone{
  constructor(x, y) {
      var options = {
          'restitution':0.3,
          'friction':1.0,
          'isStatic':false,
          'desity':1.2
      }
      this.body = Bodies.circle(x, y,50, options);
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
     push();
      translate(this.body.position.x, this.body.position.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0,0,50,50);
      pop();
    }
}
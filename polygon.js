class Polygon{
    constructor(x, y, sides, radius) {
        var options = {
            isStatic: false,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.polygon(x, y, sides, radius, options);
        this.sides = sides;
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        // polygonMode(CENTER);
        rect(0, 0, this.sides, this.radius);
        pop();
      }
  }
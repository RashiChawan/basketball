class Ball{
  constructor(x, y, radius){
      var options={
          isStatic : false,
          restitution : 0.5,
          friction : 0.5,
          density : 1.2
      }
      this.x = x;
      this.y = y;
      this.radius=radius;

      this.p=Bodies.circle(this.x, this.y, this.radius, options);
      World.add(world,this.p);
    }
    display(){
        var ballpos = this.p.position;
        fill("orange");
        ellipseMode(RADIUS);
        circle(ballpos.x,ballpos.y, this.radius);
    }
};
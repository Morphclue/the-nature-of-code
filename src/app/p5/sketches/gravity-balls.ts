import p5 from 'p5';

export const gravityBalls = (p: p5) => {
  let moverA: Mover;
  let moverB: Mover;

  p.setup = () => {
    p.createCanvas(640, 240);
    moverA = new Mover(200, 30, 10);
    moverB = new Mover(440, 30, 2);
    p.createP('Click mouse to apply wind force.');
  };

  p.draw = () => {
    p.background(255);
    let gravity = p.createVector(0, 0.1);
    let gravityA = gravity.copy().mult(moverA.mass);
    moverA.applyForce(gravityA);

    let gravityB = gravity.copy().mult(moverB.mass);
    moverB.applyForce(gravityB);

    if (p.mouseIsPressed) {
      let wind = p.createVector(0.1, 0);
      moverA.applyForce(wind);
      moverB.applyForce(wind);
    }

    moverA.update();
    moverA.display();
    moverA.checkEdges();

    moverB.update();
    moverB.display();
    moverB.checkEdges();
  };

  class Mover {
    mass: number;
    radius: number;
    position: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    constructor(x: number, y: number, m: number) {
      this.mass = m;
      this.radius = m * 8;
      this.position = p.createVector(x, y);
      this.velocity = p.createVector(0, 0);
      this.acceleration = p.createVector(0, 0);
    }

    applyForce(force: any) {
      let f = p5.Vector.div(force, this.mass);
      this.acceleration.add(f);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }

    display() {
      p.stroke(0);
      p.strokeWeight(2);
      p.fill(127, 127);
      p.ellipse(this.position.x, this.position.y, this.radius * 2);
    }

    checkEdges() {
      if (this.position.x > p.width - this.radius) {
        this.position.x = p.width - this.radius;
        this.velocity.x *= -1;
      } else if (this.position.x < this.radius) {
        this.position.x = this.radius;
        this.velocity.x *= -1;
      }
      if (this.position.y > p.height - this.radius) {
        this.position.y = p.height - this.radius;
        this.velocity.y *= -1;
      }
    }
  }
};

import p5 from 'p5';

export const bouncingBall = (p: p5) => {
  let position: p5.Vector;
  let velocity: p5.Vector;

  p.setup = () => {
    p.createCanvas(640, 240);
    position = p.createVector(100, 100);
    velocity = p.createVector(2.5, 2);
  };

  p.draw = () => {
    p.background(255);
    position.add(velocity);

    if (position.x > p.width || position.x < 0) {
      velocity.x = velocity.x * -1;
    }
    if (position.y > p.height || position.y < 0) {
      velocity.y = velocity.y * -1;
    }

    p.stroke(0);
    p.fill(127);
    p.strokeWeight(2);
    p.circle(position.x, position.y, 48);
  };
};

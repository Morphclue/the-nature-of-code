import p5 from 'p5';

export const walkerSketch = (p: p5) => {
  let walker: Walker;

  p.setup = () => {
    p.createCanvas(640, 240);
    walker = new Walker(p);
    p.background(255);
  };

  p.draw = () => {
    walker.step();
    walker.show();
  };

  class Walker {
    x: number;
    y: number;
    p: p5;

    constructor(p: p5) {
      this.p = p;
      this.x = p.width / 2;
      this.y = p.height / 2;
    }

    show() {
      this.p.stroke(0);
      this.p.point(this.x, this.y);
    }

    step() {
      const choice = this.p.floor(this.p.random(4));
      if (choice === 0) {
        this.x++;
      } else if (choice === 1) {
        this.x--;
      } else if (choice === 2) {
        this.y++;
      } else {
        this.y--;
      }
    }
  }
};

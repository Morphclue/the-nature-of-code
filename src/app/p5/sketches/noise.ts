import p5 from 'p5';

export const noise = (p: p5) => {

  p.setup = () => {
    p.createCanvas(640, 240);

    p.loadPixels();
    let xOffset = 0.0;

    for (let xPos = 0; xPos < p.width; xPos++) {
      let yOffset = 0.0;

      for (let yPos = 0; yPos < p.height; yPos++) {
        const bright = p.map(p.noise(xOffset, yOffset), 0, 1, 0, 255);
        p.set(xPos, yPos, p.floor(bright));
        yOffset += 0.01;
      }
      xOffset += 0.01;
    }

    p.updatePixels();
  };

  p.draw = () => {
  };
};

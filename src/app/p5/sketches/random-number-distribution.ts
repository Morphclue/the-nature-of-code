import p5 from 'p5';

export const randomNumberDistribution = (p: p5) => {
  let randomCounts: any[] = [];
  let total = 20;

  p.setup = () => {
    p.createCanvas(640, 240);
    for (let i = 0; i < total; i++) {
      randomCounts[i] = 0;
    }
  };

  p.draw = () => {
    p.background(255);
    let index = Math.floor(Math.random() * randomCounts.length);
    randomCounts[index]++;

    p.stroke(0);
    p.fill(127);
    let w = p.width / randomCounts.length;
    for (let x = 0; x < randomCounts.length; x++) {
      p.rect(x * w, p.height - randomCounts[x], w - 1, randomCounts[x]);
    }
  };
};

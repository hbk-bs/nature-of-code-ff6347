{
  // Logarithmic spiral in p5.js

  let a = 5; // scale  - a sets the initial radius when θ = 0.

  let b = 0.015; // growth rate - b controls how fast the spiral expands.

  const s = (p) => {
    p.setup = () => {
      const canvas = p.createCanvas(400, 400);

      p.angleMode(p.RADIANS);
      p.background(255);
      p.translate(p.width / 2, p.height / 2);
      p.stroke(0);
      p.noFill();

      p.beginShape();
      // θ (theta) is the angle from the positive x-axis.
      for (let theta = 0; theta < 50 * p.TWO_PI; theta += 0.01) {
        // r is the distance from the center
        let r = a * Math.exp(b * theta); // r = a·e^(b·θ)
        // x and y are the coordinates of the point
        // calculated using polar coordinates
        // and the noise function to give them a little jitter
        let x = r * Math.cos(theta) + p.noise(theta) * 10;
        let y = r * Math.sin(theta) + p.noise(theta) * 10;
        p.vertex(x, y);
      }
      p.endShape();
    };
  };

  let seashell = new p5(s, 'seashell');
}

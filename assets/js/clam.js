{
  let rings = 150;

  function setup() {
    const canvas = createCanvas(400, 400);
    canvas.parent('clam');
    background(255);
    fill(0, 1);

    stroke(0, 200);
    strokeWeight(0.4);
    translate(width / 2, height / 2 + 50);

    for (let i = 0; i < rings; i++) {
      let r = i * 1.2;
      let t = i / rings;
      let noiseAmp = lerp(0, 40, t);
      let squash = lerp(1.0, 0.4, t); // keep more circular
      // fill(random(200,155),5);
      beginShape();
      for (let a = PI * 0.001, step = 0.1; a <= PI * 2; a += step) {
        let deformation = sin(a * 3) * noiseAmp * noise(a, i * 0.2);
        let x = (r - deformation) * cos(a);
        let y = (r - deformation) * sin(a) * squash;
        vertex(x, y);
      }
      endShape(CLOSE);
    }
  }
}

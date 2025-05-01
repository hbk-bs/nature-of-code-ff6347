{
  // based on this sweet glitch sketch
  // https://editor.p5js.org/petercooper/sketches/l5XO03FE1
  const sketch = (p) => {
    // Parameters for the formula
    let a = 10; // initial amount
    let b = 0.1; // growth rate

    // Canvas settings
    const w = 400;
    const h = 500;
    let img;

    p.setup = async function () {
      p.createCanvas(w, h);
      img = await p.loadImage('./assets/images/icecream.webp');
      gfx = p.createGraphics(w, h);
      gfx.clear();
      gfx.image(img, 0, 0, w, h);
    };

    p.draw = function () {
      p.background(240);
      p.image(gfx, 0, 0, w, h);
      // Distance of pointer ↔ centre controls glitch strength
      let d = p.max(
        p.dist(p.mouseX, p.mouseY, p.width / 3, (p.height / 4) * 3),
        2,
      );
      let amp = p.map(d, 0, p.max(p.width, p.height) / 2, 40, 2); // max sideways shift
      let slices = p.floor(p.map(d, 0, p.max(p.width, p.height) / 2, 35, 6));

      // Copy horizontal bands with random horizontal offsets
      for (let i = 0; i < slices; i++) {
        let h = p.random(4, 24); // slice thickness
        let y = p.random(p.height); // vertical position
        let off = p.random(-amp, amp); // horizontal shift
        p.copy(0, y, p.width, h, off, y, p.width, h);
      }
    };
  };
  // Create instance
  new p5(sketch, 'glitch');
}

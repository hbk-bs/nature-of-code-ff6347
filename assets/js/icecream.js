{
  const sketch = (p) => {
    // Parameters for the formula
    let a = 10; // initial amount
    let b = 0.1; // growth rate

    // Canvas settings
    const width = 400;
    const height = 400;
    const padding = 50;

    // Temperature range (x-axis)
    const minTemp = 0;
    const maxTemp = 35;

    p.setup = function () {
      p.createCanvas(width, height);
      p.textSize(12);
    };

    p.draw = function () {
      p.background(240);
      drawAxes();
      plotFunction();
      drawLabels();

      // Only need to render once
      p.noLoop();
    };

    function drawAxes() {
      p.stroke(0);
      p.strokeWeight(1);

      // X-axis
      p.line(padding, height - padding, width - padding, height - padding);

      // Y-axis
      p.line(padding, height - padding, padding, padding);

      // X-axis ticks
      for (let temp = minTemp; temp <= maxTemp; temp += 5) {
        const x = p.map(temp, minTemp, maxTemp, padding, width - padding);
        p.line(x, height - padding, x, height - padding + 5);
        p.textAlign(p.CENTER);
        p.text(temp, x, height - padding + 20);
      }

      // Y-axis ticks - dynamically calculate based on formula
      const maxConsumption = a * Math.exp(b * maxTemp);
      for (let c = 0; c <= maxConsumption; c += maxConsumption / 5) {
        const y = p.map(c, 0, maxConsumption, height - padding, padding);
        p.line(padding, y, padding - 5, y);
        p.textAlign(p.RIGHT);
        p.text(Math.round(c), padding - 10, y + 4);
      }
    }

    function plotFunction() {
      p.stroke(255, 0, 0);
      p.strokeWeight(2);
      p.noFill();

      p.beginShape();
      for (let x = padding; x <= width - padding; x++) {
        const temp = p.map(x, padding, width - padding, minTemp, maxTemp);
        const consumption = a * Math.exp(b * temp);

        // Calculate max consumption for scaling
        const maxConsumption = a * Math.exp(b * maxTemp);
        const y = p.map(
          consumption,
          0,
          maxConsumption,
          height - padding,
          padding,
        );

        p.vertex(x, y);
      }
      p.endShape();
    }

    function drawLabels() {
      p.fill(0);
      p.noStroke();

      // X-axis label
      p.textAlign(p.CENTER);
      p.text('Temperature (°C)', width / 2, height - 10);

      // Y-axis label
      p.push();
      p.translate(15, height / 2);
      p.rotate(-p.HALF_PI);
      p.text('Ice Cream Consumption', 0, 0);
      p.pop();

      // Formula display
      p.textAlign(p.LEFT);
      p.text(
        `consumption = ${a} * e^(${b} * temperature)`,
        padding + 10,
        padding - 10,
      );

      // Add sliders to adjust parameters
      p.text(`a = ${a} (initial amount)`, width - 200, padding + 20);
      p.text(`b = ${b} (growth rate)`, width - 200, padding + 40);
    }
  };

  // Create instance
  new p5(sketch, 'icecream');
}

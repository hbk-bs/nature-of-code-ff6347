{
	const s = (p) => {
		p.setup = () => {
			p.createCanvas(400, 400);
			p.angleMode(p.DEGREES);
			p.background(255);
			p.stroke(0);
			p.strokeWeight(2);
			p.noFill();
			p.push();
			p.translate(0, (p.height / 4) * 3);
			p.branch(p.width / 4);
			p.pop();
			p.push();
			p.translate(0, (p.height / 4) * 3.5);
			p.branch(p.width / 6);
			p.pop();
			p.push();
			p.translate(0, (p.height / 4) * 3.2);
			p.branch(p.width / 5);
		};

		p.branch = (len) => {
			p.line(0, 0, len, -10); // Draw line horizontally
			p.translate(len, -10); // Translate horizontally

			len *= 0.7; // Reduce branch length

			if (len > 2) {
				p.push(); // Save current transformation state
				p.rotate(p.random(-30, 0)); // Random rotation for the first branch
				p.branch(len);
				p.pop(); // Restore previous transformation state

				p.push(); // Save current transformation state
				p.rotate(p.random(0, 30)); // Random rotation for the second branch
				p.branch(len);
				p.pop(); // Restore previous transformation state
			}
		};
	};
	new p5(s, 'branching');
}

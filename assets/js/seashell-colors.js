{
	// Logarithmic spiral in p5.js

	let a = 5; // scale  - a sets the initial radius when θ = 0.

	let b = 0.15; // growth rate - b controls how fast the spiral expands.
	const colors = [];

	const s = (p) => {
		p.setup = () => {
			p.colorMode(p.HSL);
			const canvas = p.createCanvas(400, 400);

			p.angleMode(p.RADIANS);
			p.background(255);
			p.stroke(0);
			p.noFill();

			p.beginShape();
			// θ (theta) is the angle from the positive x-axis.
			for (let theta = 0; theta < p.TWO_PI; theta += 0.5) {
				// r is the distance from the center
				let r = a * Math.exp(b * theta); // r = a·e^(b·θ)

				const h = p.degrees(theta);
				const s = r;
				const l = 100;
				const c = p.color(h % 360, s, l);
				colors.push(c);
			}
			let index = 0;
			for (let x = 0; x < p.width; x += p.width / colors.length) {
				p.fill(colors[index]);
				p.rect(x, 0, p.width / colors.length, p.height);
				index++;
			}
			p.endShape();
		};
	};

	new p5(s, 'seashell-colors');
}

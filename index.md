<!--
You can add style tags and also script:src tags into markdown
if you use https://marketplace.cursorapi.com/items?itemName=fmoronzirfas.markdown-to-html
It will be included into your html file
Just make sure to keep a line break between the markdown tags and the style/script tags
-->

<style>

:root {
	--canvas-width: 375px;
	--max-width: 66ch;
}

* ,*::before, *::after { box-sizing: border-box; }
* { margin: 0; }
html { font-size: 105%; }
html,
body {
height: 100%;
/* Industrial */
/* Rounded Sans */
font-family: ui-rounded, 'Hiragino Maru Gothic ProN', Quicksand, Comfortaa, Manjari, 'Arial Rounded MT', 'Arial Rounded MT Bold', Calibri, source-sans-pro, sans-serif;
font-weight: normal;
}

body {
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
max-width: var(--max-width);
margin: 0 auto;
line-height: 1.5;
padding: 1rem;
}
main {
display: flex;
justify-content: flex-start;
flex-direction: column;
align-items: flex-start;
}

.sketch {
align-self: center;
border: 1px dashed #000;
}
canvas {
	display: block;
}

.code-link {
	align-self: center;
	display: flex;
	justify-content: flex-end;
	width: var(--canvas-width);
	margin-bottom: 2rem;
}

img {
	max-width: var(--canvas-width);
	width: var(--canvas-width);
	height: auto;
	display: block;
	align-self: center;
border: 1px dashed #000;
	margin-bottom: 0;
	
}

p:has(img) {
	align-self: center;
	margin-bottom: 2rem;

}

/** 1.333 - perfect forth  */

h1 { font-size: 2.369rem;

}
h2 { font-size: 1.777rem; }
h3 { font-size: 1.333rem; }
h4 { font-size: 1rem; }
h5 { font-size: 0.75rem; }
h6 { font-size: 0.563rem; }

h1, h2, h3, h4, h5, h6 {
	font-weight: bold;
margin-bottom: 1em;
width: 100%;
text-align: left;
border-top: 1px dashed #000;
}
h1{border-top: none;}
p{
	margin-bottom: 2rem;
}

pre{
background:#fcfcfc;

width: 100%;
border-left: 1px dashed #000;
margin-bottom: 2rem;
font-size: 0.89rem;

}

code {
background: #fcfcfc;
/* Monospace Slab Serif */
font-family: 'Nimbus Mono PS', 'Courier New', monospace;
font-weight: normal;
font-size: 1.15rem;
white-space: pre-wrap;
overflow-wrap: break-word;
}

ul{
	margin-bottom: 2rem;
	padding-left: 2rem;
	list-style: disc;
}

li >p {
	margin-bottom: 0.5rem;
}

footer{
	font-size: 0.8rem;
	width: 100%;
	text-align: center;
}

</style>

<main>
<script src="lib/p5.min.js"></script>

# Excursion digicom 2025

_**(The Natrue of Code)**_

These are some observations from the excursion of the basics class at Univiersity of Art Braunschweig Germany. We went to the North Sea and explored a little island called Amrum. Our goal was to observe natural patterns und systems and recreate these natural algorithm in code. Inspired by the book _"The Nature of Code"_ by Daniel Shiffman.

## The Clam

The patterns of the clam can be usesd to determine the age of a shell. The more rings the shell has, the older it is.

<div id="clam" class="sketch"></div>
<script src="./assets/js/clam.js"></script>
<div id="clam-code" class="code-link">
<p>	
source code for
<a href="./assets/js/clam.js">clam.js</a>
</p>
</div>

## Seashell

![Seashell](./assets/images/seashell.png)

The pattern of the shell is a logarithmic spiral. The spiral can be described by the following formula:

```plain
r = a * e^(b * theta)
```

Where:

- `r` is the distance from the center of the spiral
- `a` is the initial distance from the center
- `b` is the growth rate of the spiral
- `theta` is the angle of the spiral
- `e` is the base of the natural logarithm
- The spiral is drawn in polar coordinates, which means that the angle and distance from the center are used to draw the spiral.

<div id="seashell" class="sketch">
</div>
<div id="seashell-code" class="code-link">
<p>	
source code for
<a href="./assets/js/seashell.js">seashell.js</a>
</p>
</div>
<script src="./assets/js/seashell.js"></script>

### Abstraction

What if we use this formula not to draw a spiral but select colors on a color wheel?

<div id="seashell-colors" class="sketch"></div>
<script src="./assets/js/seashell-colors.js"></script>
<div id="seashell-colors-code" class="code-link">
<p>	
source code for
<a href="./assets/js/seashell-colors.js">seashell-colors.js</a>
</p>
</div>

## Branching

![Branching](./assets/images/branch.png)

The following examples show different branching patterns.

<div id="branching" class="sketch"></div>
<script src="./assets/js/branching.js"></script>

<div id="branching-code" class="code-link">
<p>	
source code for
<a href="./assets/js/branching.js">branching.js</a>
</p>
</div>

Above we use a recursive algorithm to draw a tree. The function calls itself to draw the branches. It has no "memory" of the previous branches.


<div id="branching-substrate" class="sketch"></div>
<script src="./assets/js/branching-substrate.js"></script>

<div id="branching-substrate-code" class="code-link">
<p>	
source code for
<a href="./assets/js/branching-substrate.js">branching-substrate.js</a>
</p>
</div>

Here we use a algorithm inspired by Jer Thorp's "Branching Substrate" to draw a tree. Our tree consists of a list of branches. We have several parameters to control the growth of the tree. How many generations can a branch have? Does it grow upwards or downwards? How long can a branch be?


## Icecream

the consum of icecream can be described by the following formula:

```plain
consumption = a * e^(b * temperature)
```

Where:

- consumption is the amount of icecream consumed
- ⁠a (initial amount) acts as a scaling factor that determines the baseline consumption when temperature is 0
- ⁠b (growth rate) controls how rapidly consumption increases with temperature:

  - If ⁠b > 0: consumption increases exponentially as temperature rises
  - If ⁠b < 0: consumption decreases exponentially as temperature rises
  - Larger absolute values of ⁠b create steeper curves
    This is an exponential growth/decay model where:

- If temperatures are positive and ⁠b > 0, consumption grows increasingly faster as temperature rises
- The curve is never linear - small temperature changes at higher temperatures cause larger changes in consumption than the same changes at lower temperatures

This model makes intuitive sense for ice cream if ⁠b > 0, as people typically consume more ice cream in warmer weather, with consumption accelerating rapidly on very hot days.
This

<div id="icecream" class="sketch"></div>
<script src="./assets/js/icecream.js"></script>

<div id="icecream-code" class="code-link">
<p>	
source code for
<a href="./assets/js/icecream.js">icecream.js</a>
</p>
</div>

<div id="glitch" class="sketch"></div>
<script src="./assets/js/glitch.js"></script>

<div id="glitch-code" class="code-link">
<p>	
source code for
<a href="./assets/js/glitch.js">glitch.js</a>
</p>
</div>

</main>

<footer>
<p>
Built with ❤︎ by <a href="https://github.com/ff6347">ff6347</a>
</p>

</footer>

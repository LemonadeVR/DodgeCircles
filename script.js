/** 
	_____ _   _ ______ ____  
 |_   _| \ | |  ____/ __ \ 
	 | | |  \| | |__ | |  | |
	 | | | . ` |  __|| |  | |
	_| |_| |\  | |   | |__| |
 |_____|_| \_|_|    \____/


	DO NOT CLONE THIS SITE WITHOUT PERMISSION
 
	If you want you can add changes, but make 
	sure to give me credit and link my 
	original site.

	DM @Lemonade#5543 on Discord for more
	information
 
**/

const scoreCounter = document.getElementById("score");
const board = document.getElementById("board");
const scrnWdth = window.innerWidth;
const scrnHght = window.innerHeight;

let score = 0;
let counter = 0;
let dead = false;
let distance = 0;
let mouseX = -100;
let mouseY = -100;
let started = false;


let circle = [
	{ x: -100, y: -100, size: 1, speed: 1 },
	{ x: -100, y: -100, size: 1, speed: 2 },
	{ x: -100, y: -100, size: 1, speed: 3 },
	{ x: -100, y: -100, size: 1, speed: 4 },
	{ x: -100, y: -100, size: 1, speed: 5 },
	{ x: -100, y: -100, size: 1, speed: 6 },
	{ x: -100, y: -100, size: 1, speed: 7 },
	{ x: -100, y: -100, size: 1, speed: 8 },
	{ x: -100, y: -100, size: 1, speed: 9 },
	{ x: -100, y: -100, size: 1, speed: 10 }
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNum(min, max) {
	return Math.random() * (max - min + 1) + min;
}


// Listen for clicks
document.addEventListener("click", function() {
	scoreCounter.innerHTML = score;
	started = true;

	score = 0;
	counter = 0;
	dead = false;
	distance = 0;
	mouseX = -100;
	mouseY = -100;

	circle = [
		{ x: -100, y: -100, size: 1, speed: 1 },
		{ x: -100, y: -100, size: 1, speed: 2 },
		{ x: -100, y: -100, size: 1, speed: 3 },
		{ x: -100, y: -100, size: 1, speed: 4 },
		{ x: -100, y: -100, size: 1, speed: 5 },
		{ x: -100, y: -100, size: 1, speed: 6 },
		{ x: -100, y: -100, size: 1, speed: 7 },
		{ x: -100, y: -100, size: 1, speed: 8 },
		{ x: -100, y: -100, size: 1, speed: 9 },
		{ x: -100, y: -100, size: 1, speed: 10 }
	];
});

/**
// Get mouse position
document.addEventListener('mousemove', (event) => {
	mouseX = event.clientX-12.5;
	mouseY = event.clientY-13.5;
	document.getElementById("mouse").style.marginLeft = mouseX + 'px';
	document.getElementById("mouse").style.marginTop = mouseY + 'px';
});
**/

function draw() {
	// Reset board 
	board.innerHTML = "";

	// Prep circles
	for (let i = 0; i < circle.length; i++) {
		let circ = document.createElement("div");

		if (started) {
			// Update variables
			circle[i].y += circle[i].speed;

			if (circle[i].y >= scrnHght + 100 && !dead) {
				circle[i].speed = getRandomNum(1, 5);
				circle[i].size = getRandomInt(1, 10);
				circle[i].y = -100;
				circle[i].x = getRandomInt(0, scrnWdth - circle[i].size);
			}
		}

		// Draw the circles
		circ.classList.add("circle-unit");
		circ.style.marginLeft = (circle[i].x) - (circle[i].size / 2) + "px";
		circ.style.marginTop = (circle[i].y) - (circle[i].size / 2) + "px";
		circ.style.width = (circle[i].size * 10) + "px";
		circ.style.height = (circle[i].size * 10) + "px";
		circ.style.opacity = circle[i].speed / 5;
		circ.style.zIndex = 1;

		if (dead) {
			circ.style.backgroundColor = "#ffcccc";
		}
		board.appendChild(circ);

		circ.addEventListener("mouseover", function() {
			dead = true
		});
	}
}

setInterval(() => {
	if (counter == 100) {
		counter = 0;
		if (started && !dead) {
			score++;
			scoreCounter.innerHTML = score;
		}
		circle.push({ x: -100, y: -100, size: 1, speed: 15 });
	}
	else {
		counter++;
	}

	if (dead) {
		scoreCounter.style.color = "#903030"
	}

	draw();
}, 10);

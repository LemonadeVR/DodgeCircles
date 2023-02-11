/** 

	######  ##   #  ######   #### 
		#     # #  #  #       #    #
		#     #  # #  ####    #    #
	######  #   ##  #        #### 


	DO NOT CLONE THIS SITE WITHOUT PERMISSION
 
	If you want you can add changes, but make 
	sure to give me credit and link my 
	original site.

	DM @Lemonade#5543 on Discord for more
	information
 
**/


const board = document.getElementById("board");
const scrnWdth = window.innerWidth;
const scrnHght = window.innerHeight;

let started = false;

let circle = [
	{ x: -10, y: -100, size: 1, speed: 1 },
	{ x: -10, y: -100, size: 1, speed: 2 },
	{ x: -10, y: -100, size: 1, speed: 3 },
	{ x: -10, y: -100, size: 1, speed: 4 },
	{ x: -10, y: -100, size: 1, speed: 5 },
	{ x: -10, y: -100, size: 1, speed: 6 },
	{ x: -10, y: -100, size: 1, speed: 7 },
	{ x: -10, y: -100, size: 1, speed: 8 },
	{ x: -10, y: -100, size: 1, speed: 9 },
	{ x: -10, y: -100, size: 1, speed: 10 },
	{ x: -10, y: -100, size: 1, speed: 11 },
	{ x: -10, y: -100, size: 1, speed: 12 },
	{ x: -10, y: -100, size: 1, speed: 13 },
	{ x: -10, y: -100, size: 1, speed: 14 },
	{ x: -10, y: -100, size: 1, speed: 15 }
];

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}



// Listen for clicks
document.addEventListener("click", function() {
	started = true;
});


function draw() {
	// Reset board 
	board.innerHTML = "";

	// Prep circles
	for (let i = 0; i < circle.length; i++) {
		let circ = document.createElement("div");


		if (started) {
			// Update variables
			circle[i].y += circle[i].speed;

			if (circle[i].y >= scrnHght) {
				circle[i].speed = getRandomInt(1, 3);
				circle[i].size = getRandomInt(1, 10);
				circle[i].y = -100;
				circle[i].x = getRandomInt(0, scrnWdth - circle[i].size);
			}
		}

		// Draw the circles
		circ.classList.add("circle-unit");
		circ.style.marginLeft = circle[i].x + "px";
		circ.style.marginTop = circle[i].y + "px";
		circ.style.width = (circle[i].size * 10) + "px";
		circ.style.height = (circle[i].size * 10) + "px";
		board.appendChild(circ);
	}
}

setInterval(() => {
	draw();
}, 10);

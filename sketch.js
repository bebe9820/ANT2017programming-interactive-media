var cx = [];
var cy = [];
var csize =[];
var N, i;

function setup() {
	createCanvas(windowWidth, windowHeight);
		initCircles(); 
}

function draw() {
	background(124);

	var c = color(255);
	drawCircles(c);

}

function initCircles() {
	N = 100;
	for (i=0; i<N; i++) {
		cx[i] = random(0, width);
		cy[i] = random(0, height);
		csize[i] = random(5,20);
} 
}

function drawCircles( c ) {
	fill(255);
	stroke(c, 50);
	strokeWeight(3);

for (i=0; i<N; i++) {
	cx[i] = cx[i] + random(0);
	cy[i] = cy[i] + random(10);

	if(cy[i]>height)
	cy[i]=0;

	ellipse(cx[i], cy[i], csize[i], csize[i]);
}
}

//draw와 setup 잘 구분해서 하기 
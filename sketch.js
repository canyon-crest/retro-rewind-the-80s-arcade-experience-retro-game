await Canvas();
world.gravity.y = 10;

let ball = new Sprite();
ball.diameter = 50;
ball.img = '🤪';

let groundA = new Sprite();
groundA.x = -120;
groundA.width = 220;
groundA.rotation = 30;
groundA.physics = STATIC;

let groundB = new Sprite();
groundB.x = 120;
groundB.width = 220;
groundB.rotation = -30;
groundB.physics = STATIC;

let wall = new Sprite();
wall.x = 200;
wall.y = -100
wall.width = 220;
wall.rotation = 90;
wall.physics = STATIC;

let wall2 = new Sprite();
wall2.x = -200;
wall2.y = -100
wall2.width = 220;
wall2.rotation = 90;
wall2.physics = STATIC;

q5.update = function () {
	background('skyblue');
	text('click to jump!', 0, -50);

	if (kb.pressing('w')) ball.vel.y = -5;
	if (kb.pressing('d')) ball.vel.x = 5
	if (kb.pressing('a')) ball.vel.x = -5
	if (kb.pressing('m')) ball.scale = min(ball.scale + 0.01, 2);
};

// To build GameLevels, each contains GameObjects from below imports
import GameEnvBackground from './GameEngine/GameEnvBackground.js';
import Player from './GameEngine/Player.js';

class MansionLevel4 {
  constructor(gameEnv) {
	let width = gameEnv.innerWidth;
	let height = gameEnv.innerHeight;
	let path = gameEnv.path;

	// Background data
	const image_background = path + "/images/mansionGame/image_lvl4.png"; // be sure to include the path
	const image_data_background = {
		name: 'background',
		greeting: "This is the casino, you will try to gamble your way out of the level, survive as long as possible.",
		src: image_background,
		pixels: {height: 1280, width: 720}
	};

	
	const sprite_src_mc = path + "/images/gamify/spookMcWalk.png"; // be sure to include the path
	const MC_SCALE_FACTOR = 6;
	const sprite_data_chillguy = {
		id: 'Spook',
		greeting: "Hi, I am Spook.",
		src: sprite_src_mc,
		SCALE_FACTOR: MC_SCALE_FACTOR,
		STEP_FACTOR: 800,
		ANIMATION_RATE: 10,
		INIT_POSITION: { x: (width / 2 - width / (5 * MC_SCALE_FACTOR)), y: height - (height / MC_SCALE_FACTOR)},
		pixels: {height: 2400, width: 3600},
		orientation: {rows: 2, columns: 3},
		down: {row: 1, start: 0, columns: 3},
		downRight: {row: 1, start: 0, columns: 3, rotate: Math.PI/16},
		downLeft: {row: 0, start: 0, columns: 3, rotate: -Math.PI/16},
		left: {row: 0, start: 0, columns: 3},
		right: {row: 1, start: 0, columns: 3},
		up: {row: 1, start: 0, columns: 3},
		upLeft: {row: 0, start: 0, columns: 3, rotate: Math.PI/16},
		upRight: {row: 1, start: 0, columns: 3, rotate: -Math.PI/16},
		hitbox: { widthPercentage: 0.45, heightPercentage: 0.2 },
	// Use both WASD and Arrow keys for movement
	// keypress: { up: 38, left: 37, down: 40, right: 39 }, // Arrow keys
	wasdKeypress: { up: 87, left: 65, down: 83, right: 68 }, // W,A,S,D
	// Override the handleKeyDown method to support both key sets
	handleKeyDown: function(event) {
		const { keyCode } = event;
		if (keyCode === this.wasdKeypress.up || keyCode === this.keypress.up) this.pressedKeys[this.keypress.up] = true;
		if (keyCode === this.wasdKeypress.left || keyCode === this.keypress.left) this.pressedKeys[this.keypress.left] = true;
		if (keyCode === this.wasdKeypress.down || keyCode === this.keypress.down) this.pressedKeys[this.keypress.down] = true;
		if (keyCode === this.wasdKeypress.right || keyCode === this.keypress.right) this.pressedKeys[this.keypress.right] = true;
		this.updateVelocityAndDirection();
	},
	// Override the handleKeyUp method to support both key sets
	handleKeyUp: function(event) {
		const { keyCode } = event;
		if (keyCode === this.wasdKeypress.up || keyCode === this.keypress.up) delete this.pressedKeys[this.keypress.up];
		if (keyCode === this.wasdKeypress.left || keyCode === this.keypress.left) delete this.pressedKeys[this.keypress.left];
		if (keyCode === this.wasdKeypress.down || keyCode === this.keypress.down) delete this.pressedKeys[this.keypress.down];
		if (keyCode === this.wasdKeypress.right || keyCode === this.keypress.right) delete this.pressedKeys[this.keypress.right];
		this.updateVelocityAndDirection();
	}
	};

	// List of objects defnitions for this level
	this.classes = [
		{ class: GameEnvBackground, data: image_data_background },
		{ class: Player, data: sprite_data_chillguy },
	];
  }

}

export default MansionLevel4
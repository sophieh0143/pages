import Character from './Character.js';
import TouchControls from './TouchControls.js';

// Define non-mutable constants as defaults
const SCALE_FACTOR = 25; // 1/nth of the height of the canvas
const STEP_FACTOR = 100; // 1/nth, or N steps up and across the canvas
const ANIMATION_RATE = 1; // 1/nth of the frame rate
const INIT_POSITION = { x: 0, y: 0 };


class Player extends Character {
    // Static counter for unique player IDs (uninitialized)
    static playerCount;
    /**
     * The constructor method is called when a new Player object is created.
     * 
     * @param {Object|null} data - The sprite data for the object. If null, a default red square is used.
     */
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        // Increment static player counter and assign unique id
        Player.playerCount = (Player.playerCount || 0) + 1;
        this.id = data?.id ? data.id.toLowerCase() : `player${Player.playerCount}`;
        // Accept either a single key code or an array of key codes per direction
        const rawKeypress = data?.keypress || {up: 87, left: 65, down: 83, right: 68};
        this.keypress = {
            up: Array.isArray(rawKeypress.up) ? rawKeypress.up : [rawKeypress.up],
            left: Array.isArray(rawKeypress.left) ? rawKeypress.left : [rawKeypress.left],
            down: Array.isArray(rawKeypress.down) ? rawKeypress.down : [rawKeypress.down],
            right: Array.isArray(rawKeypress.right) ? rawKeypress.right : [rawKeypress.right]
        };
        // Ensure arrow keys are supported in addition to WASD by default
        if (!this.keypress.up.includes(38)) this.keypress.up.push(38); // Up Arrow
        if (!this.keypress.left.includes(37)) this.keypress.left.push(37); // Left Arrow
        if (!this.keypress.down.includes(40)) this.keypress.down.push(40); // Down Arrow
        if (!this.keypress.right.includes(39)) this.keypress.right.push(39); // Right Arrow
        this.touchOptions = data?.touchOptions || {interactLabel: "E", position: "left"};
        this.touchOptions.id = `touch-controls-${this.id}`;
        this.touchOptions.mapping = this.keypress;
        this.pressedKeys = {}; // active keys array
        this.bindMovementKeyListners();
        this.gravity = data.GRAVITY || false;
        this.acceleration = 0.001;
        this.time = 0;
        this.moved = false;
        // Initialize touch controls for mobile devices
        this.touchControls = new TouchControls(gameEnv, this.touchOptions);
    }

    /**
     * Returns true if any of the mapped key codes for the given direction are currently pressed.
     * @param {string} dir - one of 'up','left','down','right'
     */
    isDirectionPressed(dir) {
        const codes = this.keypress?.[dir] || [];
        for (let i = 0; i < codes.length; i++) {
            if (this.pressedKeys[codes[i]]) return true;
        }
        return false;
    }

    /**
     * Binds key event listeners to handle object movement.
     * 
     * This method binds keydown and keyup event listeners to handle object movement.
     * The .bind(this) method ensures that 'this' refers to the object object.
     */
    bindMovementKeyListners() {
        addEventListener('keydown', this.handleKeyDown.bind(this));
        addEventListener('keyup', this.handleKeyUp.bind(this));
    }

    handleKeyDown({ keyCode }) {
        // capture the pressed key in the active keys array
        this.pressedKeys[keyCode] = true;
        // set the velocity and direction based on the newly pressed key
        this.updateVelocityAndDirection();
    }

    /**
     * Handles key up events to stop the player's velocity.
     * 
     * This method stops the player's velocity based on the key released.
     * 
     * @param {Object} event - The keyup event object.
     */
    handleKeyUp({ keyCode }) {
        // remove the lifted key from the active keys array
        if (keyCode in this.pressedKeys) {
            delete this.pressedKeys[keyCode];
        }
        // adjust the velocity and direction based on the remaining keys
        this.updateVelocityAndDirection();
    }

    /**
     * Update the player's velocity and direction based on the pressed keys.
     */
    updateVelocityAndDirection() {
        this.velocity.x = 0;
        this.velocity.y = 0;
        const xVel = this.xVelocity * 0.7;

        // Multi-key movements (diagonals: upLeft, upRight, downLeft, downRight)
        if (this.isDirectionPressed('up') && this.isDirectionPressed('left')) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x -= xVel;
            this.direction = 'upLeft';
        } else if (this.isDirectionPressed('up') && this.isDirectionPressed('right')) {
            this.velocity.y -= this.yVelocity;
            this.velocity.x += xVel;
            this.direction = 'upRight';
        } else if (this.isDirectionPressed('down') && this.isDirectionPressed('left')) {
            this.velocity.y += this.yVelocity;
            this.velocity.x -= xVel;
            this.direction = 'downLeft';
        } else if (this.isDirectionPressed('down') && this.isDirectionPressed('right')) {
            this.velocity.y += this.yVelocity;
            this.velocity.x += xVel;
            this.direction = 'downRight';
        // Single key movements (left, right, up, down) 
        } else if (this.isDirectionPressed('up')) {
            this.velocity.y -= this.yVelocity;
            this.direction = 'up';
            this.moved = true;
        } else if (this.isDirectionPressed('left')) {
            this.velocity.x -= xVel;
            this.direction = 'left';
            this.moved = true;
        } else if (this.isDirectionPressed('down')) {
            this.velocity.y += this.yVelocity;
            this.direction = 'down';
            this.moved = true;
        } else if (this.isDirectionPressed('right')) {
            this.velocity.x += xVel;
            this.direction = 'right';
            this.moved = true;
        } else{
            this.moved = false;
        }
    }
    update() {
        super.update();
        if(!this.moved){
            if (this.gravity) {
                    this.time += 1;
                    this.velocity.y += 0.5 + this.acceleration * this.time;
                }
            }
        else{
            this.time = 0;
        }
        }
        
    /**
     * Overrides the reaction to the collision to handle
     *  - clearing the pressed keys array
     *  - stopping the player's velocity
     *  - updating the player's direction   
     * @param {*} other - The object that the player is colliding with
     */
    handleCollisionReaction(other) {    
        this.pressedKeys = {};
        this.updateVelocityAndDirection();
        super.handleCollisionReaction(other);
    }

    /**
     * Toggle touch controls visibility (useful for debugging or user preference)
     */
    toggleTouchControls() {
        if (this.touchControls) {
            this.touchControls.toggle();
        }
    }

    /**
     * Show touch controls explicitly
     */
    showTouchControls() {
        if (this.touchControls) {
            this.touchControls.show();
        }
    }

    /**
     * Hide touch controls explicitly  
     */
    hideTouchControls() {
        if (this.touchControls) {
            this.touchControls.hide();
        }
    }

    /**
     * Show the interact button when near an NPC
     */
    showInteractButton() {
        if (this.touchControls) {
            this.touchControls.showInteractButton();
        }
    }

    /**
     * Hide the interact button when not near an NPC
     */
    hideInteractButton() {
        if (this.touchControls) {
            this.touchControls.hideInteractButton();
        }
    }

    /**
     * Check if interact button is currently visible
     */
    isInteractButtonVisible() {
        return this.touchControls ? this.touchControls.isInteractButtonVisible() : false;
    }

    /**
     * Clean up resources when player is destroyed
     */
    destroy() {
        if (this.touchControls) {
            this.touchControls.destroy();
        }
        super.destroy?.();
    }


}

export default Player;
import Character from '../GameEngine/Character.js';

/*  
    Arm class for the Reaper boss.
    - Follows the boss with offsets
    - Can rotate or animate independently
*/

class Arm extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);

        // Offset from boss center
        this.xOffset = data?.xOffset ?? -50;
        this.yOffset = data?.yOffset ?? 70;

        // Optional rotation
        this.rotation = 0;
        this.rotationSpeed = data?.rotationSpeed ?? 0; // radians per update

        // Target tracking (optional)
        this.target = null;
    }

    /**
     * Update the Arm's position relative to the boss
     * @param {number} bossX - Boss's X position
     * @param {number} bossY - Boss's Y position
     */
    update(bossX, bossY) {
        // Follow the boss
        this.position.x = bossX + this.xOffset;
        this.position.y = bossY + this.yOffset;

        // Rotate if rotationSpeed is set
        if (this.rotationSpeed !== 0) {
            this.rotation += this.rotationSpeed;
        }

        // Draw the arm (pass rotation to draw function)
        this.draw();
    }

    /**
     * Optionally, set a target for the arm (like the player) 
     * for attacks or aiming
     * @param {Character} target 
     */
    setTarget(target) {
        this.target = target;
    }

    /**
     * Optional: Move the arm toward its target
     * @param {number} speed 
     */
    moveTowardTarget(speed = 0.5) {
        if (!this.target) return;

        const dx = this.target.position.x - this.position.x;
        const dy = this.target.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);

        this.position.x += Math.cos(angle) * speed;
        this.position.y += Math.sin(angle) * speed;
    }
}

export default Arm;

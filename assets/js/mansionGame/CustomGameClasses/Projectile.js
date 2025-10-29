import Character from '../GameEngine/Character.js';

/*
    Projectile class for arrows and fireballs
    - Travels in a straight line from source to target
    - Destroys itself when leaving the screen
*/

class Projectile extends Character {
    constructor(gameEnv = null, targetx, targety, sourcex, sourcey, type) {
        super(null, gameEnv);

        this.position = { x: sourcex, y: sourcey };
        this.target_coords = { x: targetx, y: targety };
        this.type = type;

        // Determine trajectory vector
        const dx = targetx - sourcex;
        const dy = targety - sourcey;
        const distance = Math.sqrt(dx * dx + dy * dy);

        this.velocity = {
            x: (dx / distance) * 5, // speed multiplier
            y: (dy / distance) * 5
        };

        // Appearance
        this.width = 10;
        this.height = 10;
        this.spriteData = { fillStyle: (type === "FIREBALL") ? "orange" : "brown" };

        this.revComplete = false;
    }

    update() {
        // Move projectile
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        // Destroy if outside canvas
        if (
            this.position.x < 0 || this.position.x > this.gameEnv.innerWidth ||
            this.position.y < 0 || this.position.y > this.gameEnv.innerHeight
        ) {
            this.revComplete = true;
            this.destroy();
        }

        // Draw projectile
        this.draw();
    }

    draw() {
        const ctx = this.ctx || this.canvas.getContext('2d');
        ctx.fillStyle = this.spriteData.fillStyle || 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    destroy() {
        super.destroy();
    }
}

export default Projectile;

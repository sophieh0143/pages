import Enemy from '../GameEngine/Enemy.js';
import Boomerang from '../CustomGameClasses/Boomerang.js';
import Projectile from '../CustomGameClasses/Projectile.js';

class Boss extends Enemy {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.stage = 1;
        this.isThrowingScythe = false;
        this.fullHealth = data?.initialHealth || 1500;
        this.healthPoints = this.fullHealth;
        this.arrows = [];
        this.fireballs = [];
        this.scythes = [];
        this.arms = [];
        this.angerModifier = 1;
        this.attackInterval = data?.attackInterval || 2000;
        this.lastAttackTime = Date.now();
    }

    update() {
        this.draw();

        // Update stage, attack interval, and anger modifier
        const healthRatio = this.healthPoints / this.fullHealth;
        this.stage = healthRatio < 0.33 ? 3 : (healthRatio < 0.66 ? 2 : 1);
        this.attackInterval = this.stage === 3 ? 1000 : this.stage === 2 ? 1500 : 2000;
        this.angerModifier = this.stage === 3 ? 2 : 1;

        // Update projectiles
        [...this.fireballs, ...this.arrows].forEach(p => p.update());
        this.fireballs = this.fireballs.filter(p => !p.revComplete);
        this.arrows = this.arrows.filter(p => !p.revComplete);

        // Update scythes
        this.scythes.forEach(s => s.update());
        this.scythes = this.scythes.filter(s => !s.revComplete);
        if (this.scythes.length === 0) this.isThrowingScythe = false;

        // Update arms
        this.arms.forEach(a => a.update(this.position.x, this.position.y));

        // Perform attacks
        const now = Date.now();
        if (now - this.lastAttackTime >= this.attackInterval) {
            const target = this.findNearestPlayer();
            if (target) this.performAttack(target);
            this.lastAttackTime = now;
        }

        // Move toward nearest player if not throwing scythe
        if (!this.isThrowingScythe) {
            const target = this.findNearestPlayer();
            if (target) this.moveToward(target, 0.25); // Adjust speed as needed
        }
    }

    findNearestPlayer() {
        const players = this.gameEnv.gameObjects.filter(obj => obj.constructor.name === 'Player');
        if (players.length === 0) return null;

        let nearest = players[0];
        let minDist = Infinity;

        for (const player of players) {
            const dx = player.position.x - this.position.x;
            const dy = player.position.y - this.position.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < minDist) {
                minDist = dist;
                nearest = player;
            }
        }

        return nearest;
    }

    performAttack(target) {
        const rand = Math.random();
        if (this.stage >= 3 && rand < 0.3) {
            this.scytheAttack(target);
        } else if (rand < 0.6) {
            this.fireballAttack(target);
        } else {
            this.arrowAttack(target);
        }
    }

    moveToward(target, speed) {
        const dx = target.position.x - this.position.x;
        const dy = target.position.y - this.position.y;
        const angle = Math.atan2(dy, dx);
        this.position.x += Math.cos(angle) * speed;
        this.position.y += Math.sin(angle) * speed;
    }

    explode() {
        throw new Error("Reapers cannot explode! (yet :})");
    }

    scytheAttack(target) {
        this.scythes.push(new Boomerang(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y));
        this.isThrowingScythe = true;
    }

    fireballAttack(target) {
        this.fireballs.push(new Projectile(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y, "FIREBALL"));
    }

    arrowAttack(target) {
        this.arrows.push(new Projectile(this.gameEnv, target.position.x, target.position.y, this.position.x, this.position.y, "ARROW"));
    }

    addArm(arm) {
        this.arms.push(arm);
    }
}

export default Boss;

import Character from '../GameEngine/Character.js';

/*  This is a file for our level made by the Tinkerers (lvl6)
    Do not delete this file.
    - Tinkerers

    Boomerang class: used to make the scythe
    Projectile class: used to make the arrows/fireballs
    Arm Class: used to make the arm for the boss
    Boss Class: used to make the Reaper boss

*/

// This is the Arm of the Reaper boss
class Arm extends Character {
    // Define the offset of the charecter and arm
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.xOffset = data?.xOffset ?? -50;
        this.yOffset = data?.yOffset ?? 70;
    }

    // Define the update property
    update(bossX, bossY) {
        // Update position
        this.position.x = bossX + this.xOffset;
        this.position.y = bossY + this.yOffset;

        // Draw to the screen
        this.draw();
    }
}

export default Arm;

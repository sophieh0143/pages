import Character from '../GameEngine/Character.js';

/*  This is a file for our level made by the Tinkerers (lvl6)
    Do not delete this file.
    - Tinkerers

    Boomerang class: used to make the scythe
    Projectile class: used to make the arrows/fireballs
    Arm Class: used to make the arm for the boss
    Boss Class: used to make the Reaper boss

*/

// User arm
class Arm extends Character {
    // Have a simple constructor
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
    }

    // Define the update property
    update(bossX, bossY) {
        // Leave this empty for now
    }
}

export default Arm;

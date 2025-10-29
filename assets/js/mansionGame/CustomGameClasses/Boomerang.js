import Character from '../GameEngine/Character.js';  // We do this as a Character can actually draw itself to the screen
import GameObject from '../GameEngine/GameObject.js';

/*
    This is a file for our level made by the Tinkerers (lvl6)
    Do not delete this file.
    - Tinkerers

    Boomerang class: used to make the scythe
    Projectile class: used to make the arrows/fireballs
    Arm Class: used to make the arm for the boss
    Boss Class: used to make the Reaper boss

boomerang objects are projectiles that travel in an ellipse from
(sourcex, sourcey) to (targetx, targety)

Used to create the scythe in Quest of Spook final boss battle (tinkerers)
*/

// Template class -- VERIFY THIS
class Boomerang extends Character {
    constructor(gameEnv = null, targetx, targety, sourcex, sourcey) {
        super(gameEnv);
        // Add code here for the Scythe the Reaper weilds

        // finalized ellipse attributes, DO NOT CHANGE this - tinkerers
        this.target_coords = (targetx, targety); // player coords at scythe thrown
        this.source_coords = (sourcex, sourcey); // reaper coords at scythe thrown
        this.ellipse_center = ((targetx+sourcex)/2, (targety+sourcey)/2);
        this.ellipse_width = Math.sqrt((targetx-sourcex)**2 + (targety-sourcey)**2);
        this.ellipse_height = this.ellipse_height/10;
        this.ellipse_tilt = Math.atan((sourcey-targety)/(sourcex-targetx));
        this.radian_prog = 0;
        this.radian_limit = 2*Math.PI;
        
        this.projectileSpeed = 0.05;

        this.revComplete = false;
    }

    update(){
        if (this.radian_prog > this.radian_limit){
            this.revComplete = true;
        } else {
            this.radian_prog += this.projectileSpeed; // experiment with diff radian increments to change speed
            let x_coord = (
                this.ellipse_center[0] + 
                (this.ellipse_width/2)*Math.cos(this.radian_prog)*Math.cos(this.ellipse_tilt) -
                (this.ellipse_height)*Math.sin(this.radian_prog)*Math.sin(this.ellipse_tilt)
            );

            let y_coord = (
                this.ellipse_center[1] +
                (this.ellipse_width/2)*Math.cos(this.radian_prog)*Math.sin(this.ellipse_tilt) +
                (this.ellipse_height)*Math.sin(this.radian_prog)*Math.cos(this.ellipse_tilt)
            );

            this.position.x = x_coord;
            this.position.y = y_coord;
        }
    }  

    destroy(){
        super.destroy();
    }
}

export default Boomerang;
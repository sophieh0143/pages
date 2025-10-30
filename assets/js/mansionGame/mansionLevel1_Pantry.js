import GameEnvBackground  from "./GameEngine/GameEnvBackground.js";
import Player from "./GameEngine/Player.js";
import Npc from "./GameEngine/Npc.js";
import MansionLevel1 from './mansionLevel1.js';

class MansionLevel1_Pantry {
  constructor(gameEnv) {
    let width = gameEnv.innerWidth;
    let height = gameEnv.innerHeight;
    let path = gameEnv.path;

    // Background data
    const image_background = path + "/images/mansionGame/kitchen_pantry.png";
    const image_data_background = {
        name: 'background',
        greeting: "This is the pantry, you will search for ingredients and create a potion.",
        src: image_background,
        pixels: {height: 580, width: 1038},
        mode: 'contain',
    };

    const sprite_src_mc = path + "/images/gamify/spookMcWalk.png";
    const MC_SCALE_FACTOR = 6;
    const sprite_data_mc = {
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
        hitbox: {widthPercentage: 0.45, heightPercentage: 0.2},
        keypress: {up: 87, left: 65, down: 83, right: 68}, // W, A, S, D
        // Wall boundaries - adjust these values based on your pantry image
        boundaries: {
            top: height * 0.15,      // Top wall (15% from top)
            bottom: height * 0.95,   // Bottom wall (95% from top)
            left: width * 0.05,      // Left wall (5% from left)
            right: width * 0.95      // Right wall (95% from left)
        }
    };

    const sprite_src_pantrydoor = path + "/images/gamify/invisDoorCollisionSprite.png";
    const sprite_greet_pantrydoor = "Would you like to exit the pantry? Press E";
    const sprite_data_pantrydoor = {
        id: 'PantryDoor',
        greeting: sprite_greet_pantrydoor,
        src: sprite_src_pantrydoor,
        SCALE_FACTOR: 12,
        ANIMATION_RATE: 100,
        pixels: {width: 128, height: 128},
        INIT_POSITION: { x: (width / 2 - 64), y: (height - (height * 0.18)) },
        orientation: {rows: 1, columns: 1},
        down: {row: 0, start: 0, columns: 1},
        hitbox: {widthPercentage: 0.15, heightPercentage: 0.22},
        dialogues: [
          "Do you wish to exit?"
        ],
        reaction: function() {
          // no immediate reaction; interaction handled in interact()
        },
        interact: function() {
          if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
            this.dialogueSystem.closeDialogue();
          }

          if (!this.dialogueSystem) {
            this.dialogueSystem = new DialogueSystem();
          }

          this.dialogueSystem.showDialogue(
            "Would you like to exit the pantry?",
            "Pantry",
            this.spriteData.src
          );

          this.dialogueSystem.addButtons([
            {
              text: "Exit",
              primary: true,
              action: () => {
                this.dialogueSystem.closeDialogue();

                if (gameEnv && gameEnv.gameControl) {
                  const gameControl = gameEnv.gameControl;

                  gameControl._originalLevelClasses = gameControl.levelClasses;

                  if (gameControl._originalLevelClasses && gameControl._originalLevelClasses.length) {
                    gameControl.levelClasses = gameControl._originalLevelClasses;
                  } else {
                    gameControl.levelClasses = [MansionLevel1];
                  }
                  gameControl.currentLevelIndex = 0;
                  gameControl.isPaused = false;
                  gameControl.transitionToLevel();
                }
              }
            },
            {
              text: "Not Now",
              action: () => {
                this.dialogueSystem.closeDialogue();
              }
            }
          ]);
        }
    };

    // List of objects definitions for this level
    this.classes = [
      { class: GameEnvBackground, data: image_data_background },
      { class: Player, data: sprite_data_mc },
      { class: Npc, data: sprite_data_pantrydoor }
    ];
  }

}

export default MansionLevel1_Pantry;
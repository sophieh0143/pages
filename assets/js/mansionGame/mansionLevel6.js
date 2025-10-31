import GameEnvBackground  from "./GameEngine/GameEnvBackground.js";
import Player from "./GameEngine/Player.js";
import Npc from './GameEngine/Npc.js';
import MansionLevel6_BattleRoom from './mansionLevel6_BattleRoom.js';

class MansionLevel6 {
   constructor(gameEnv){

        // upon mansion level6 construction, 

        // keep reference to gameEnv for lifecycle methods
        this.gameEnv = gameEnv;

        let width = gameEnv.innerWidth;
        let height = gameEnv.innerHeight;
        let path = gameEnv.path;

    // Level music: play Legend of Zelda theme when entering this level
    // Will be stopped when transitioning to the battle room below
    const levelMusic = new Audio(path + "/assets/sounds/mansionGame/legendZelda.mp3");
    levelMusic.loop = true;
    levelMusic.volume = 0.3;
    levelMusic.play().catch(err => console.warn('Level music failed to play:', err));

        // This is the background image data
        const image_src_chamber = path + "/images/mansionGame/bgBossIntroChamber.png"
        const image_data_chamber = {
            name: 'bossintro',
            greeting: "You hear a faint echo from behind the ebony doors.",
            src: image_src_chamber,
            pixels: {height: 580, width: 1038},
            mode: 'stretch'
        };
        
        // This is the data for the player
        const sprite_src_mc = path + "/images/mansionGame/spookMcWalk.png"; // be sure to include the path
        const MC_SCALE_FACTOR = 6;
        const sprite_data_mc = {
            id: 'Spook',
            greeting: "Hi, I am Spook.",
            src: sprite_src_mc,
            SCALE_FACTOR: MC_SCALE_FACTOR,
            STEP_FACTOR: 600,
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
            keypress: {up: 87, left: 65, down: 83, right: 68} // W, A, S, D
        };

        // This is the zombie npc
        const sprite_src_zombie = path + "/images/mansionGame/zombieNpc.png";
        const sprite_greet_zombie = "Hi, I'm a zombie.";
        const sprite_data_zombie = {
            id: 'ZombieNPC',
            greeting: sprite_greet_zombie,
            src: sprite_src_zombie,
            SCALE_FACTOR: 4,
            ANIMATION_RATE: 30,
            pixels: {width: 3600, height: 1200},
            INIT_POSITION: { x: (width * 3 / 4), y: (height * 1 / 2)},
            orientation: {rows: 1, columns: 3 },
            down: {row: 0, start: 0, columns: 3 },
            hitbox: {widthPercentage: 0.2, heightPercentage: 0.2},
            // Add dialogues array for random messages
            dialogues: [
                "I heard the boss is waiting for you...",
                "Enter if you dare... he's waiting for you...",
                "I heard the Reaper himself was in there.",
                "The Reaper'll get you good.",
                "You have no chance... his power is unstopable...",
                "No one has survived a battle against the Reaper.",
                "Haha? You want to battle my boss? You'll die within the first minute...",
                "Go ahead. I aint stoppin' you, the Reaper'll finish you clean.",
                "You are a fool to challenge the Reaper.",
                "You will end up like me once you face the Reaper.",
                "Are you the next opponent for my master? That's unfortunate for you."
            ],
            reaction: function() {
                // Don't do anything on touch
                // The Zombie only speaks when interacted with
            },
            interact: function() {
                // Clear any existing dialogue first to prevent duplicates
                if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
                    this.dialogueSystem.closeDialogue();
                }
                
                // Create a new dialogue system if needed
                if (!this.dialogueSystem) {
                    this.dialogueSystem = new DialogueSystem();
                }
                
                // Show portal dialogue with buttons
                const whattosay = this.data.dialogues[Math.floor(Math.random() * this.data.dialogues.length)];
                this.dialogueSystem.showDialogue(
                    whattosay,
                    "Zombie",
                    this.spriteData.src
                );
            }
        };
        

        // invisible sprite for door collision that handles going to lv6 battle room
        const sprite_src_bossdoor = path + "/images/mansionGame/invisDoorCollisionSprite.png";
        const sprite_greet_bossdoor = "Battle the Reaper? Press E";
        const sprite_data_bossdoor = {
            id: 'Door',
            greeting: sprite_greet_bossdoor,
            src: sprite_src_bossdoor,
            SCALE_FACTOR: 6,
            ANIMATION_RATE: 100,
            pixels: {width: 2029, height: 2025},
            INIT_POSITION: {x: (width * 37 / 80), y: (height / 8)},
            orientation: {rows: 1, columns: 1},
            down: {row: 0, start: 0, columns: 1},
            hitbox: {widthPercentage: 0.1, heightPercentage: 0.2},
            dialogues: [
                "Many have entered. Few have returned.",
                "Dangerous things await you beyond this door..",
                "Prepare yourself. The journey beyond won't be easy."
            ],
            reaction: function() {
                // Don't show any reaction dialogue - this prevents the first alert
                // The interact function will handle all dialogue instead
            },
            // Ask the player wether they want to enter the doors-- if they do, move to the battle room
            interact: function() {
                // Clear any existing dialogue first to prevent duplicates
                if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
                    this.dialogueSystem.closeDialogue();
                }
                
                // Create a new dialogue system if needed
                if (!this.dialogueSystem) {
                    this.dialogueSystem = new DialogueSystem();
                }
                
                // Show portal dialogue with buttons
                this.dialogueSystem.showDialogue(
                    "Are you ready to battle the Reaper?",
                    "Door",
                    this.spriteData.src
                );
                
                // Add buttons directly to the dialogue
                this.dialogueSystem.addButtons([
                    {
                        text: "Enter doors",
                        primary: true,
                        action: () => {
                            this.dialogueSystem.closeDialogue();
                            
                            // Clean up the current game state
                            if (gameEnv && gameEnv.gameControl) {
                                // Store reference to the current game control
                                const gameControl = gameEnv.gameControl;
                                
                                // Create fade overlay for transition
                                const fadeOverlay = document.createElement('div');
                                const fadeInMs = 2000; // longer fade in
                                const fadeOutMs = 1200; // fade out duration
                                Object.assign(fadeOverlay.style, {
                                    position: 'fixed',
                                    top: '0',
                                    left: '0',
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#000',
                                    opacity: '0',
                                    transition: `opacity ${fadeInMs}ms ease-in-out`,
                                    zIndex: '9999'
                                });
                                document.body.appendChild(fadeOverlay);

                                function fadeOutAudio(audioElement, duration) {
                                    const initialVolume = audioElement.volume;
                                    const intervalTime = 50; // Milliseconds between volume adjustments
                                    const steps = duration / intervalTime;
                                    const volumeDecreasePerStep = initialVolume / steps;

                                    const fadeInterval = setInterval(() => {
                                        if (audioElement.volume - volumeDecreasePerStep > 0) {
                                            audioElement.volume -= volumeDecreasePerStep;
                                        } else {
                                            audioElement.volume = 0;
                                            audioElement.pause(); // Optionally pause the audio when volume reaches zero
                                            clearInterval(fadeInterval);
                                        }
                                    }, intervalTime);
                                }

                                // Stop the level (overworld) music before starting battle music
                                try {
                                    if (levelMusic && typeof levelMusic.pause === 'function') {
                                        fadeOutAudio(levelMusic, 500);
                                        levelMusic.pause();
                                        levelMusic.currentTime = 0;
                                    }
                                } catch (e) { console.warn('Failed to stop level music:', e); }

                                console.log("Starting battle music...");
                                const audio = new Audio(path + "/assets/sounds/mansionGame/SkeletonLord.mp3");
                                audio.loop = true;
                                audio.volume = 0.4;
                                audio.play().catch(error => console.error('Failed to play audio:', error));

                                console.log("Starting battle level transition...");

                                // Fade in
                                requestAnimationFrame(() => {
                                    fadeOverlay.style.opacity = '1';

                                    // Create a centered transition text that will type itself
                                    const transitionText = document.createElement('div');
                                    const fullText = 'YOUR FATE HAS BEEN SEALED';
                                    transitionText.textContent = '';
                                    const typingSpeed = 80; // ms per char
                                    Object.assign(transitionText.style, {
                                        position: 'fixed',
                                        top: '50%',
                                        left: '50%',
                                        transform: 'translate(-50%, -50%)',
                                        color: 'rgba(255, 0, 0, 1)',
                                        fontSize: '6vw',
                                        fontWeight: '800',
                                        textAlign: 'center',
                                        zIndex: '10000',
                                        pointerEvents: 'none',
                                        opacity: '0',
                                        transition: `opacity ${Math.min(600, fadeOutMs)}ms ease-in-out`,
                                        textShadow: '0 3px 8px rgba(181, 0, 0, 0.85)',
                                        letterSpacing: '0.05em'
                                    });

                                    document.body.appendChild(transitionText);

                                    // Fade the text in so characters appear as they type
                                    requestAnimationFrame(() => {
                                        transitionText.style.opacity = '1';
                                    });

                                    // Typewriter effect
                                    let charIndex = 0;
                                    let typingInterval = null;
                                    const startTyping = () => {
                                        typingInterval = setInterval(() => {
                                            transitionText.textContent += fullText.charAt(charIndex);
                                            charIndex++;
                                            if (charIndex >= fullText.length) {
                                                clearInterval(typingInterval);
                                                typingInterval = null;
                                            }
                                        }, typingSpeed);
                                    };

                                    startTyping();

                                    // Compute when to perform the level transition: wait until both fadeIn and typing complete
                                    const typingDuration = fullText.length * typingSpeed;
                                    const waitMs = Math.max(fadeInMs, typingDuration) + 800; // small hold after

                                    setTimeout(() => {
                                        // Clean up current level properly
                                        if (gameControl.currentLevel) {
                                            // Properly destroy the current level
                                            console.log("Destroying current level...");
                                            gameControl.currentLevel.destroy();
                                            
                                            // Force cleanup of any remaining canvases
                                            const gameContainer = document.getElementById('gameContainer');
                                            const oldCanvases = gameContainer.querySelectorAll('canvas:not(#gameCanvas)');
                                            oldCanvases.forEach(canvas => {
                                                console.log("Removing old canvas:", canvas.id);
                                                canvas.parentNode.removeChild(canvas);
                                            });
                                        }
                                        
                                        console.log("Setting up battle room level...");
                                        
                                        // IMPORTANT: Store the original level classes for return journey
                                        gameControl._originalLevelClasses = gameControl.levelClasses;
                                        
                                        // Change the level classes to GameLevelEnd
                                        gameControl.levelClasses = [MansionLevel6_BattleRoom];
                                        gameControl.currentLevelIndex = 0;
                                        
                                        // Make sure game is not paused
                                        gameControl.isPaused = false;
                                    
                                        
                                        // Fade out overlay after transition (with untype animation)
                                        setTimeout(() => {
                                            const untypeSpeed = 50; // ms per character removal
                                            let untypeIndex = fullText.length - 1;

                                            const untypeInterval = setInterval(() => {
                                                if (untypeIndex >= 0) {
                                                    transitionText.textContent = fullText.substring(0, untypeIndex);
                                                    untypeIndex--;
                                                } else {
                                                    clearInterval(untypeInterval);

                                                    // Once untyped, fade everything out
                                                    fadeOverlay.style.transition = `opacity ${fadeOutMs}ms ease-in-out`;
                                                    transitionText.style.transition = `opacity ${fadeOutMs}ms ease-in-out`;
                                                    fadeOverlay.style.opacity = '0';
                                                    transitionText.style.opacity = '0';

                                                    // Remove both elements after fade-out completes
                                                    setTimeout(() => {
                                                        try { document.body.removeChild(fadeOverlay); } catch (e) {}
                                                        try { document.body.removeChild(transitionText); } catch (e) {}
                                                    }, fadeOutMs + 150);
                                                }
                                            }, untypeSpeed);
                                        }, waitMs + 300);

                                        // Start the boss fight with the same control
                                        console.log("Transitioning to battle room level...");
                                        gameControl.transitionToLevel();


                                    }, waitMs);
                                });
                            }
                        }
                    },
                    {
                        text: "Not Ready",
                        action: () => {
                            this.dialogueSystem.closeDialogue();
                        }
                    }
                ]);
            }
        }
        

        // This is every sprite we want the game engine to render, and with whatever data
        this.classes = [
            {class: GameEnvBackground, data: image_data_chamber},
            {class: Player, data: sprite_data_mc},
            {class: Npc, data: sprite_data_zombie},
            {class: Npc, data: sprite_data_bossdoor}
        ];

    };
}

export default MansionLevel6;

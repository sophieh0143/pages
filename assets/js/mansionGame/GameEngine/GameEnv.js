/**
 * GameEnv manages the game environment.
 * 
 * The focus of the file is the canvas management and the calculation of the game area dimensions. 
 * All calculations are based on the window size, header, and footer.
 * 
 * This code uses an instance-based class pattern, which allows each GameLevel to have its own GameEnv.
 * 
 * The instance-based class pattern ensures that there can be multiple instances of the game environment,
 * providing a separate point of reference for each game level. This approach helps maintain
 * consistency and simplifies the management of shared resources like the canvas and its dimensions.
 * 
 * @class GameEnv
 * @property {Object} container - The DOM element that contains the game.
 * @property {Object} canvas - The canvas element.
 * @property {Object} ctx - The 2D rendering context of the canvas.
 * @property {number} innerWidth - The inner width of the game area.
 * @property {number} innerHeight - The inner height of the game area.
 * @property {number} top - The top offset of the game area.
 * @property {number} bottom - The bottom offset of the game area.
 */
class GameEnv {
    constructor() {
        this.container = null;
        this.canvas = null;
        this.ctx = null;
        this.innerWidth = 0;
        this.innerHeight = 0;
        this.top = 0;
        this.bottom = 0;
        /* Below properties are not part of is-A or has-A relationships,
        *  they are references for easy accessibility in game objects */
        this.game = null; // Reference to the Game static environment variables
        this.path = ''; // Reference to the resource path
        this.gameControl = null; // Reference to the GameControl instance
        this.gameObjects = []; // Reference list of game objects instancces    
        // Camera state: inactive means no transform applied
        this.camera = {
            active: false,
            scale: 1,
            center: { x: 0, y: 0 }, // center in world coordinates
        };
    }

    /**
     * Create the game environment by setting up the canvas and calculating dimensions.
     * 
     * This method sets the canvas element, calculates the top and bottom offsets,
     * and determines the inner width and height of the game area. It then sizes the canvas
     * to fit within the calculated dimensions.
     */
    create() {
        this.setCanvas();
        this.setTop();
        this.setBottom();
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight - this.top - this.bottom;
        this.size();
        // Initialize camera center based on current size
        this.resetCamera();
    }

    /**
     * Sets the canvas element and its 2D rendering context.
     */
    setCanvas() {
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    }

    /**
     * Sets the top offset based on the height of the header element.
     */
    setTop() {
        const header = document.querySelector('header');
        this.top = header ? header.offsetHeight : 0;
    }

    /**
     * Sets the bottom offset based on the height of the footer element.
     */
    setBottom() {
        const footer = document.querySelector('footer');
        this.bottom = footer ? footer.offsetHeight : 0;
    }

    /**
     * Sizes the canvas to fit within the calculated dimensions.
     */
    size() {
        this.canvas.width = this.innerWidth;
        this.canvas.height = this.innerHeight;
        this.canvas.style.width = `${this.innerWidth}px`;
        this.canvas.style.height = `${this.innerHeight}px`;
        this.canvas.style.position = 'absolute';
        this.canvas.style.left = '0px';
        this.canvas.style.top = `${this.top}px`;
    }


    resize() {
        this.create();
    }

 
    clear() {
        // Clear using identity transform to avoid clearing scaled area
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.innerWidth, this.innerHeight);
        this.ctx.restore();
    }

    /**
     * Apply camera transform to the rendering context.
     * Call before drawing world objects.
     */
    pushCamera() {
        const ctx = this.ctx;
        if (!this.camera || !this.camera.active || this.camera.scale === 1) {
            // nothing to do
            return;
        }

        ctx.save();
        const s = this.camera.scale;
        const cx = this.camera.center.x;
        const cy = this.camera.center.y;
        // Compute translation so camera center maps to canvas center
        const tx = this.innerWidth / 2 - cx * s;
        const ty = this.innerHeight / 2 - cy * s;
        ctx.setTransform(s, 0, 0, s, tx, ty);
    }

    /**
     * Restore context after drawing world objects.
     */
    popCamera() {
        if (!this.camera || !this.camera.active || this.camera.scale === 1) return;
        this.ctx.restore();
    }

    /**
     * Zoom the camera so the given rectangle (in world coordinates) fills the canvas.
     * rect: { x, y, width, height }
     */
    zoomToRect(rect) {
        if (!rect || rect.width <= 0 || rect.height <= 0) return;
        const scaleX = this.innerWidth / rect.width;
        const scaleY = this.innerHeight / rect.height;
        // Use the smaller scale to fully contain the rect
        const scale = Math.min(scaleX, scaleY);
        this.camera.scale = scale;
        this.camera.center = { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
        this.camera.active = true;
    }

    /**
     * Reset camera back to default (no transform)
     */
    resetCamera() {
        this.camera.active = false;
        this.camera.scale = 1;
        this.camera.center = { x: this.innerWidth / 2, y: this.innerHeight / 2 };
    }
}

export default GameEnv;
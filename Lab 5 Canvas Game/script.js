// Setup and Constants Start
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const SPRITE_SIZE = 60;
const GAME_INTERVAL_MS = 1000;
// Setup and Constants End

// Game State Start
let score = 0;
let isGameOver = false;
// Game State End

// Images and Sprites Start
const targetImage = new Image();
targetImage.src = 'Alien.png';

const avoidImage = new Image();
avoidImage.src = 'Earth.png';

const targetSprite = { x: 50, y: 50, image: targetImage };
const avoidSprite = { x: 400, y: 300, image: avoidImage };
const allSprites = [targetSprite, avoidSprite];
// Images and Sprites End

// Random Position Start
const getRandomPosition = () => ({
    x: Math.random() * (canvas.width - SPRITE_SIZE),
    y: Math.random() * (canvas.height - SPRITE_SIZE)
});
// Random Position End

// Check Collision Start
const checkCollision = (clickX, clickY, { x, y }) => (
    clickX >= x && clickX <= x + SPRITE_SIZE &&
    clickY >= y && clickY <= y + SPRITE_SIZE
);
// Check Collision End

// Draw Function, Clear and Draw Sprites Start
const drawFunction = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    allSprites.forEach(sprite => {
        if (sprite.image.complete && sprite.image.naturalWidth !== 0) {
            ctx.drawImage(sprite.image, sprite.x, sprite.y, SPRITE_SIZE, SPRITE_SIZE);
        }
    });
// Draw Function, Clear and Draw Sprites End

// Display Score Start
    ctx.font = '24px Arial';
    ctx.fillText(`Score: ${score}`, 10, 30);
// Display Score End

// Game Over Check Start
    if (score < -5 && !isGameOver) {
        isGameOver = true;
        ctx.fillStyle = 'red';
        ctx.font = '48px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER!', canvas.width / 2, canvas.height / 2);
    }};
// Game Over Check End

// Game Logic Start
const gameLoop = setInterval(() => {
    if (isGameOver) return;
    allSprites.forEach(sprite => Object.assign(sprite, getRandomPosition()));
    drawFunction();
}, GAME_INTERVAL_MS);
// Game Logic End

// Initial Draw on Image Load Start
targetImage.onload = avoidImage.onload = drawFunction;
// Initial Draw on Image Load End

// Mouse Click Start
canvas.onmousedown = (event) => {
    if (isGameOver) return;
    const { clientX, clientY } = event;
    const { left, top } = canvas.getBoundingClientRect();
    const clickX = clientX - left;
    const clickY = clientY - top;

    let message, spriteWasClicked = false;
    if (checkCollision(clickX, clickY, targetSprite)) {
        score += 5;
        message = 'NICE! You clicked the Alien!';
        spriteWasClicked = true;
    } else if (checkCollision(clickX, clickY, avoidSprite)) {
        score -= 10;
        message = 'OH NO! You clicked the Earth!';
        spriteWasClicked = true;
    } else {
        score--;
        message = 'Miss! You clicked empty space.';
    }
    alert(`${message} Score: ${score}`);
    drawFunction();};
// Mouse Click End
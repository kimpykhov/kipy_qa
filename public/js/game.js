const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
let score = 0;

function getRandomPosition() {
    const areaWidth = gameArea.offsetWidth - 50; // Размер поля минус размер коробки
    const areaHeight = gameArea.offsetHeight - 50;
    const x = Math.floor(Math.random() * areaWidth);
    const y = Math.floor(Math.random() * areaHeight);
    return { x, y };
}

function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    const position = getRandomPosition();
    box.style.left = `${position.x}px`;
    box.style.top = `${position.y}px`;

    box.addEventListener('click', () => {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        box.remove();
        createBox(); // После клика создается новый бокс
    });

    gameArea.appendChild(box);
}

createBox();
// Получаем доступ к overlay и телу документа
const darkModeOverlay = document.createElement('div');
darkModeOverlay.id = 'dark-mode-overlay';
document.body.appendChild(darkModeOverlay);

// Добавляем обработчик для переключателя темной темы
function toggleDarkMode(isDarkModeOn) {
    if (isDarkModeOn) {
        darkModeOverlay.style.display = 'block';
        document.body.style.backgroundColor = '#000';
        document.body.style.color = '#fff';
        document.addEventListener('mousemove', moveOverlay);
    } else {
        darkModeOverlay.style.display = 'none';
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.removeEventListener('mousemove', moveOverlay);
    }
}

// Функция для перемещения градиента по позиции курсора
function moveOverlay(event) {
    const x = event.clientX;
    const y = event.clientY;
    darkModeOverlay.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(0, 0, 0, 0) 100px, rgba(0, 0, 0, 0.8) 250px, rgba(0, 0, 0, 0.95) 500px)`;
}

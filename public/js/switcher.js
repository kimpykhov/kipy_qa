const toggle = document.getElementById('theme-toggle');

// Проверка сохраненной темы в localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    toggle.checked = true; // Установка состояния переключателя
}

// Обработчик события для переключателя
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark'); // Сохранение выбора в localStorage
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light'); // Сохранение выбора в localStorage
    }
});
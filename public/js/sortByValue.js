document.querySelectorAll('.filtering input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        const selectedThemes = Array.from(document.querySelectorAll('.filtering input[type="checkbox"]:checked'))
            .map(cb => cb.value);

        document.querySelectorAll('.content').forEach(post => {
            // Проверка, содержит ли пост хотя бы один выбранный класс
            const hasTheme = selectedThemes.some(theme => post.classList.contains(theme));
            post.style.display = hasTheme || selectedThemes.length === 0 ? 'block' : 'none';
        });
    });
});

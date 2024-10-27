function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    // Найдём все элементы с классом "modal"
    var modals = document.getElementsByClassName('modal');

    // Пройдемся по каждому из модальных окон
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none"; // Закроем модалку, если клик снаружи
        }
    }
}
(() => {
    const modalElements = document.querySelectorAll("[data-modal]");

    modalElements.forEach(modal => {
        const closeModalBtn = modal.querySelector(".close-btn-menu-modal");

        // Обработчик для кнопки закрытия
        if (closeModalBtn) {
            closeModalBtn.addEventListener("click", () => toggleModal(modal));
        }
    });

    // Функция для открытия/закрытия модалки
    function toggleModal(modal) {
        const container = modal.querySelector(".container-menu-modal");
        container.classList.toggle("active");
        modal.classList.toggle("is-open");
    }

    // Обработчики для кнопок открытия модалок
    document.querySelectorAll("[data-modal-open]").forEach(btn => {
        btn.addEventListener("click", () => {
            const modalId = btn.getAttribute("data-modal-open");
            const modal = document.getElementById(modalId);
            if (modal) {
                toggleModal(modal);
            }
        });
    });

    // Закрытие первой модалки при нажатии на навигационные ссылки
    document.querySelectorAll('.link-menu-modal').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const modal1 = document.getElementById('modal1');
            const container1 = modal1.querySelector(".container-menu-modal");
            if (container1.classList.contains('active')) {
                toggleModal(modal1);
            }
            const sectionId = link.getAttribute('href');
            const section = document.querySelector(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Обработчик для кнопки "SHOP NOW"
    document.querySelector('.show-btn-modal-menu').addEventListener('click', () => {
        const modal1 = document.getElementById('modal1');
        if (modal1.classList.contains('is-open')) {
            toggleModal(modal1);
        }
    });
})();

    document.addEventListener('DOMContentLoaded', () => {
        const cards = document.querySelectorAll('.flip-card');
    // Функция для проверки, является ли устройство мобильным
        const isMobile = () => window.innerWidth < 768; // Например, 768px для мобильных
        if (isMobile()) {
    // Добавляем обработчики только для мобильных устройств
        cards.forEach(card => {
        card.addEventListener('click', () => {
        const innerCard = card.querySelector('.flip-card-inner');
        innerCard.classList.toggle('flipped');
    });
    });
}
});


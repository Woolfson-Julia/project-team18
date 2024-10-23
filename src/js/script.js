(() => {
  const refs = {
    // Додати атрибут data-modal-open на кнопку відкриття
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }
})();

const menuToggle = document.querySelector('.header-btn-icon');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.querySelector('.close-btn-menu-modal');

// Открытие меню
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
});

// Закрытие меню
closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
});

// Функция для закрытия модального окна
function closeModal() {
  const modal = document.querySelector('.container-menu-modal');
  if (modal.classList.contains('active')) {
    modal.classList.remove('active'); // Убираем активное состояние
  }
}

// Функция для скроллинга до нужной секции
function scrollToSection(sectionId) {
  const section = document.querySelector(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' }); // Плавный скролл до секции
  }
}

// Привязка событий к ссылкам внутри модального окна
document.querySelectorAll('.link-menu-modal').forEach(function (link) {
  link.addEventListener('click', function (event) {
    event.preventDefault(); // Остановить стандартное поведение ссылки

    const sectionId = this.getAttribute('href'); // Получаем ID секции из href
    scrollToSection(sectionId); // Скроллим до соответствующей секции
    closeModal('[data-modal-close]'); // Закрываем модальное окно
  });
});

// Привязка события закрытия на крестик (это у вас уже работает, оставьте как есть)
document
  .querySelector('.close-btn-menu-modal')
  .addEventListener('click', closeModal);

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

document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке страницы
    animateElements();
    
    // Обработчик для кнопки конфетти
    const confettiButton = document.getElementById('confetti-button');
    confettiButton.addEventListener('click', function() {
        fireConfetti();
        showMessage();
    });
    
    // Анимация для изображений при прокрутке
    const images = document.querySelectorAll('.image-card');
    window.addEventListener('scroll', function() {
        images.forEach(image => {
            if (isElementInViewport(image)) {
                image.style.opacity = '1';
                image.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Инициализация анимации цветов
    initFlowersAnimation();
});

// Функция для запуска конфетти
function fireConfetti() {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        
        // Запускаем конфетти с обеих сторон
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ff6b6b', '#ffa5a5', '#ff8e8e', '#ffb8b8', '#ffd3d3']
        });
        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff6b6b', '#ffa5a5', '#ff8e8e', '#ffb8b8', '#ffd3d3']
        });
    }, 250);
}

// Функция для отображения поздравительного сообщения
function showMessage() {
    const messages = [
        "Пусть этот день будет полон улыбок и радости!",
        "Желаем счастья, любви и весеннего настроения!",
        "Пусть каждый день будет наполнен красотой, как этот праздник!",
        "Будьте счастливы и любимы!",
        "Пусть сбудутся все ваши мечты!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // Создаем элемент для сообщения
    const messageElement = document.createElement('div');
    messageElement.className = 'popup-message';
    messageElement.textContent = randomMessage;
    
    // Добавляем стили для сообщения
    messageElement.style.position = 'fixed';
    messageElement.style.top = '50%';
    messageElement.style.left = '50%';
    messageElement.style.transform = 'translate(-50%, -50%)';
    messageElement.style.backgroundColor = 'rgba(255, 107, 107, 0.9)';
    messageElement.style.color = 'white';
    messageElement.style.padding = '20px 30px';
    messageElement.style.borderRadius = '10px';
    messageElement.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    messageElement.style.zIndex = '1000';
    messageElement.style.fontWeight = 'bold';
    messageElement.style.fontSize = '1.2rem';
    messageElement.style.textAlign = 'center';
    messageElement.style.animation = 'fadeIn 0.5s ease-out';
    
    // Добавляем анимацию
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translate(-50%, -60%); }
            to { opacity: 1; transform: translate(-50%, -50%); }
        }
    `;
    document.head.appendChild(style);
    
    // Добавляем сообщение на страницу
    document.body.appendChild(messageElement);
    
    // Удаляем сообщение через 3 секунды
    setTimeout(() => {
        messageElement.style.animation = 'fadeOut 0.5s ease-in';
        messageElement.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 500);
    }, 3000);
}

// Функция для проверки, находится ли элемент в видимой области
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Функция для анимации элементов при загрузке
function animateElements() {
    const header = document.querySelector('.header');
    const message = document.querySelector('.message');
    const gallery = document.querySelector('.gallery');
    const button = document.getElementById('confetti-button');
    
    // Добавляем стили для анимации
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
        }
    `;
    document.head.appendChild(style);
    
    // Применяем анимацию с задержкой
    header.classList.add('fade-in-up');
    
    setTimeout(() => {
        message.classList.add('fade-in-up');
    }, 300);
    
    setTimeout(() => {
        button.classList.add('fade-in-up');
    }, 600);
    
    setTimeout(() => {
        gallery.classList.add('fade-in-up');
    }, 900);
}

// Функция для инициализации анимации цветов
function initFlowersAnimation() {
    const flowersContainer = document.querySelector('.flowers-animation');
    
    // Создаем дополнительные цветы
    for (let i = 0; i < 10; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower';
        
        // Случайное изображение цветка
        const flowerImages = [
            'https://www.freepnglogos.com/uploads/flowers-png/flowers-png-transparent-images-download-clip-art-24.png',
            'https://www.freepnglogos.com/uploads/flowers-png/flowers-png-picture-gallery-yopriceville-high-quality-24.png'
        ];
        
        flower.style.backgroundImage = `url('${flowerImages[Math.floor(Math.random() * flowerImages.length)]}')`; 
        
        // Случайное положение и размер
        flower.style.left = `${Math.random() * 100}%`;
        flower.style.top = `${Math.random() * 100}%`;
        flower.style.width = `${30 + Math.random() * 20}px`;
        flower.style.height = `${30 + Math.random() * 20}px`;
        
        // Случайная задержка анимации
        flower.style.animationDelay = `${Math.random() * 15}s`;
        
        flowersContainer.appendChild(flower);
    }
} 
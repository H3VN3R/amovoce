const carouselSlide = document.getElementById('carousel-slide');
        const carouselImages = carouselSlide.getElementsByTagName('img');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalImages = carouselImages.length;

        
        function updateCarousel() {
            carouselSlide.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
        }

        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalImages) % totalImages;
            updateCarousel();
            resetInterval();
        });

        let carouselInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalImages;
            updateCarousel();
        }, 3000);

        function resetInterval() {
            clearInterval(carouselInterval);
            carouselInterval = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalImages;
                updateCarousel();
            }, 3000);
        }



function updateCountdown() {
    const startDate = new Date('2024-10-19T20:50:00');
    const now = new Date();
    const diffInSeconds = Math.floor((now - startDate) / 1000);

    const years = Math.floor(diffInSeconds / (60 * 60 * 24 * 365));
    const months = Math.floor((diffInSeconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24 * 30));
    const days = Math.floor((diffInSeconds % (60 * 60 * 24 * 30)) / (60 * 60 * 24));
    const hours = Math.floor((diffInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((diffInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(diffInSeconds % 60);

    document.getElementById('years').innerText = years;
    document.getElementById('months').innerText = months;
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();

function createHeart() {
    const heart = document.createElement("span");
    heart.classList.add("heart");
    heart.textContent = "❤️";
    
    heart.style.left = Math.random() * 100 + "vw";
    
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);
document.addEventListener("DOMContentLoaded", () => {
    const carouselContainer = document.querySelector(".carousel-container");
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let index = 0;

    function updateCarousel() {
        const offset = -index * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }

    nextButton.addEventListener("click", () => {
        index = (index + 1) % images.length;
        updateCarousel();
    });

    prevButton.addEventListener("click", () => {
        index = (index - 1 + images.length) % images.length;
        updateCarousel();
    });
});

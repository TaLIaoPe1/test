let currentIndex = 0;
const slides = document.querySelectorAll(".slider img");
const dots = document.querySelectorAll(".dot");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function currentSlide(index) {
  currentIndex = index;
  showSlide(currentIndex);
}

// เปลี่ยนรูปอัตโนมัติทุก 3 วินาที
setInterval(nextSlide, 15000);

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

//upcoming
document.addEventListener("DOMContentLoaded", function () {
  const cardWrapper = document.querySelector(".card-wrapper");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let scrollAmount = 0;
  let cardWidth = 270; // ขนาดของ Card + Gap

  nextBtn.addEventListener("click", () => {
      cardWrapper.scrollBy({ left: cardWidth, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
      cardWrapper.scrollBy({ left: -cardWidth, behavior: "smooth" });
  });

  // Auto Scroll
  function autoScroll() {
      if (scrollAmount <= cardWrapper.scrollWidth - cardWrapper.clientWidth) {
          scrollAmount += cardWidth;
      } else {
          scrollAmount = 0;
      }
      cardWrapper.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }

  setInterval(autoScroll, 5000);
});

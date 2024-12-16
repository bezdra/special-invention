document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".reviews-slider");
  const slides = document.querySelectorAll(".review");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  let currentIndex = 0;

  function updateSliderPosition() {
    const offset = -currentIndex * 105; // Смещение в процентах
    slider.style.transform = `translateX(${offset}%)`;
  }

  function updateButtons() {
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === slides.length - 1;
  }

  prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSliderPosition();
      updateButtons();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSliderPosition();
      updateButtons();
    }
  });

  updateButtons(); // Установим кнопки в нужное состояние
});

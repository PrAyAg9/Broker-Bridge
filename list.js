document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const imagesContainer = document.querySelector(".carousel-images");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
  
    const imageWidth = carousel.clientWidth;
    let currentIndex = 0;
  
    function showImage(index) {
      imagesContainer.style.transform = `translateX(-${index * imageWidth}px)`;
    }
  
    nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % imagesContainer.children.length;
      showImage(currentIndex);
    });
  
    prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + imagesContainer.children.length) % imagesContainer.children.length;
      showImage(currentIndex);
    });
  });
  
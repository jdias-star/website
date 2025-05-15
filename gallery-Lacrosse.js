let interval;
let currentIndex = 0;
const slidesContainer = document.getElementById("slides");

    const Pics = ["Photos/Galleries/Lacrosse/IMG_0306.jpg", "Photos/Galleries/Lacrosse/IMG_5388.jpg", "Photos/Galleries/Lacrosse/IMG_5780.jpg", "Photos/Galleries/Lacrosse/IMG_5810.jpg", "Photos/Galleries/Lacrosse/IMG_5961.jpg", "Photos/Galleries/Lacrosse/IMG_7771.jpg", "Photos/Galleries/Lacrosse/IMG_6669.jpg", "Photos/Galleries/Lacrosse/IMG_6614.jpg", "Photos/Galleries/Lacrosse/IMG_6795.jpg", "Photos/Galleries/Lacrosse/IMG_6031.jpg", "Photos/Galleries/Lacrosse/IMG_6850.jpg",  "Photos/Galleries/Lacrosse/IMG_6988.jpg"];

function createSlides() {
  Pics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = `
              <img src="${src}">
          `;
        slidesContainer.appendChild(slide);
  });
  updateSlide()
}

function updateSlide(){
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    let offset = (index - currentIndex + Pics.length) % Pics.length; 
    let relIndex = offset > Pics.length / 2 ? offset - Pics.length : offset; // 0 or -1 or 1
    // slide.classList.remove("active");
    if(Math.abs(relIndex) <= 2){
      let translateX = relIndex * 43;

      slide.style.display = "block";
      slide.style.transform = `translateX(${translateX}%)`;

      slide.style.zIndex = 5 - Math.abs(relIndex);
  }else {
      slide.style.display = "none";
    }
    
  });
}


function startSlideshow() {
  interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
}

function resetSlideshow() {
  clearInterval(interval);
  startSlideshow();
}

// function showSlide(index) {
//   const slides = document.querySelectorAll(".slide");
//   slides.forEach((slide) => slide.classList.remove("active"));
//   slides[index].classList.add("active");
// }

function nextSlide() {
  currentIndex = (currentIndex + 1) % Pics.length;
  updateSlide()
  resetSlideshow();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + Pics.length) % Pics.length;
  // showSlide(currentIndex);
  updateSlide()
  resetSlideshow();
}

createSlides();
updateSlide()
startSlideshow();

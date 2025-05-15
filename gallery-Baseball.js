let interval;
let currentIndex = 0;
const slidesContainer = document.getElementById("slides");

    const Pics = ["Photos/Galleries/Baseball/IMG_0839.jpg", "Photos/Galleries/Baseball/IMG_1396.jpg", "Photos/Galleries/Baseball/IMG_2652.jpg", "Photos/Galleries/Baseball/IMG_2461.jpg", "Photos/Galleries/Baseball/IMG_1209.jpg", "Photos/Galleries/Baseball/IMG_1145.jpg", "Photos/Galleries/Baseball/IMG_1530.jpg", "Photos/Galleries/Baseball/IMG_4503.jpg", "Photos/Galleries/Baseball/IMG_4690.jpg", "Photos/Galleries/Baseball/IMG_1100.jpg", "Photos/Galleries/Baseball/IMG_2010.jpg", "Photos/Galleries/Baseball/IMG_1241.jpg", "Photos/Galleries/Baseball/IMG_2406.jpg", "Photos/Galleries/Baseball/IMG_4993.jpg", "Photos/Galleries/Baseball/IMG_4407.jpg", "Photos/Galleries/Baseball/IMG_1825.jpg", "Photos/Galleries/Baseball/IMG_1472.jpg", "Photos/Galleries/Baseball/IMG_4363.jpg", ];

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
      let translateX = relIndex * 40;

      slide.style.display = "block";
      slide.style.transform = `translateX(${translateX}%)`;

      slide.style.zIndex = 5 - Math.abs(relIndex);
    // if(index > currentIndex){
      
    //   slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    // }else if(index < currentIndex){
      
    //   slide.style.transform = `translateX(-${(currentIndex - index) * 100}%)`;
    // }else if(index === currentIndex) {
    //   slide.style.zIndex = 1;
    //   slide.classList.add("active");
    //   slide.style.transform = `translateX(0%)`;
    // }
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
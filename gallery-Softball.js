let interval;
let currentIndex = 0;
const slidesContainer = document.getElementById("slides");

    const Pics = ["Photos/Galleries/Softball/IMG_9965.jpg", "Photos/Galleries/Softball/IMG_9539.jpg", "Photos/Galleries/Softball/IMG_9896.jpg", "Photos/Galleries/Softball/IMG_0023.jpg", "Photos/Galleries/Softball/IMG_9505.jpg", "Photos/Galleries/Softball/IMG_9921.jpg", "Photos/Galleries/Softball/IMG_9785.jpg", "Photos/Galleries/Softball/IMG_9435.jpg", "Photos/Galleries/Softball/IMG_0103.jpg", ];

function createSlides() {
  Pics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    console.log(src);
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
  console.log(`Current Index: ${currentIndex}`);
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

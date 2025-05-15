let interval;
let currentIndex = 0;
const slidesContainer = document.getElementById("slides");

    const Pics = ["Photos/Galleries/Volleyball/IMG_7581.jpg", "Photos/Galleries/Volleyball/IMG_7479.jpg", "Photos/Galleries/Volleyball/IMG_4022.jpg", "Photos/Galleries/Volleyball/IMG_6975.jpg", "Photos/Galleries/Volleyball/IMG_6488.jpg", "Photos/Galleries/Volleyball/IMG_7121.jpg", "Photos/Galleries/Volleyball/IMG_7006.jpg", "Photos/Galleries/Volleyball/IMG_7540.jpg", "Photos/Galleries/Volleyball/IMG_3820.jpg" ];

function createSlides() {
  Pics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    // if (index === 0) slide.classList.add("active");
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
  console.log(`Current Index: ${currentIndex}`);
  resetSlideshow();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + Pics.length) % Pics.length;
  // showSlide(currentIndex);
  updateSlide()
  resetSlideshow();
  console.log(`Current Index: ${currentIndex}`);
}

createSlides();
updateSlide()
startSlideshow();

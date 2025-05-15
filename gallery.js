let interval;
let currentIndex = 0;
const slidesContainerChandler = document.getElementById("slidesChandler");

    const ChandlerPics = ["Photos/SlideShows/Awards/Chandler1.jpeg", "Photos/SlideShows/Awards/Chandler2.jpg", "Photos/SlideShows/Awards/Chandler3.jpg"];

function createSlides() {
  ChandlerPics.forEach((src, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    console.log(src);
    slide.innerHTML = `
              <img src="${src}">
          `;
        slidesContainerChandler.appendChild(slide);
  });
  updateSlide()
}

function updateSlide(){
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    console.log(`Current Index: ${currentIndex}, Slide Index: ${index}`);
    if(index > currentIndex){
      
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    }else if(index < currentIndex){
      
      slide.style.transform = `translateX(-${(currentIndex - index) * 100}%)`;
    }else if(index === currentIndex) {
      slide.style.zIndex = 1;
      slide.classList.add("active");
      slide.style.transform = `translateX(0%)`;
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
  currentIndex = (currentIndex + 1) % ChandlerPics.length;
  updateSlide()
  resetSlideshow();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + ChandlerPics.length) % ChandlerPics.length;
  // showSlide(currentIndex);
  updateSlide()
  resetSlideshow();
  console.log(`Current Index: ${currentIndex}`);
}

createSlides();
updateSlide()
startSlideshow();


document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
};
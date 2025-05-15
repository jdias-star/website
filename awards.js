let interval;
let currentIndex = 0;
const slidesContainerChandler = document.getElementById("slidesChandler");

const slideshowData = {
  album: "Chandler Awards",
  images: [
    { src: "Photos/SlideShows/Awards/Chandler1.jpeg", alt: "Award photo 1" },
    { src: "Photos/SlideShows/Awards/Chandler2.jpg", alt: "Award photo 2" },
    { src: "Photos/SlideShows/Awards/Chandler3.jpg", alt: "Award photo 3" }
  ]
};

function createSlides() {
  slideshowData.images.forEach((img, index) => {
    const slide = document.createElement("div");
    slide.classList.add("slide");
    if (index === 0) slide.classList.add("active");
    slide.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
    slidesContainerChandler.appendChild(slide);
  });
  updateSlide();
}

function updateSlide() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.classList.remove("active");
    if (index > currentIndex) {
      slide.style.transform = `translateX(${(index - currentIndex) * 100}%)`;
    } else if (index < currentIndex) {
      slide.style.transform = `translateX(-${(currentIndex - index) * 100}%)`;
    } else if (index === currentIndex) {
      slide.style.zIndex = 1;
      slide.classList.add("active");
      slide.style.transform = `translateX(0%)`;
    }
  });
}

function startSlideshow() {
  interval = setInterval(nextSlide, 5000);
}

function resetSlideshow() {
  clearInterval(interval);
  startSlideshow();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideshowData.images.length;
  updateSlide();
  resetSlideshow();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slideshowData.images.length) % slideshowData.images.length;
  updateSlide();
  resetSlideshow();
}

createSlides();
updateSlide();
startSlideshow();

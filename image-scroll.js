// Get slider elements
const sliderWrapper = document.querySelector('.slider-wrapper');
const images = document.querySelectorAll('.slider-wrapper img');

// Set image width based on number of images
const imageWidth = 1200 / images.length; 

images.forEach(image => {
  image.style.width = `${imageWidth}%`;
});
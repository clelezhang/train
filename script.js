function updateSceneryPosition(shakeY = 0, shakeX = 0) {
    const container = document.querySelector('.aspect-ratio-container');
    const scenery = document.querySelector('.scenery');
    const scrollX = window.scrollX;
    const maxScroll = document.body.scrollWidth - window.innerWidth;
  
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
  
    // Calculate the displayed width of the image
    const sceneryWidth = scenery.naturalWidth * (containerHeight / scenery.naturalHeight);
    const maxMove = sceneryWidth - containerWidth;
    const moveX = (scrollX / maxScroll) * maxMove + shakeX;
    scenery.style.transform = `translateX(-${moveX}px) translateY(${shakeY}px)`;
  }

window.addEventListener('scroll', () => updateSceneryPosition());
window.addEventListener('resize', () => updateSceneryPosition());
document.querySelector('.scenery').addEventListener('load', () => updateSceneryPosition());

let autoScroll = true; // Set to false if you want to stop auto-scrolling
let scrollSpeed = 0.75;   // Pixels per frame (adjust for speed)
let shakeAmplitude = 1; // Very subtle shake
let shakeFrameCounter = 0;
let shakeInterval = 15; // Only shake every 15 frames
let lastShakeY = 0;
let lastShakeX = 0;

function animateScroll() {
  if (!autoScroll) return;
  let maxScroll = document.body.scrollWidth - window.innerWidth;
  let currentScroll = window.scrollX;
  if (currentScroll < maxScroll) {
    window.scrollTo(currentScroll + scrollSpeed, 0);
    requestAnimationFrame(animateScroll);
  }
}

function animateShake() {
  shakeFrameCounter++;
  if (shakeFrameCounter >= shakeInterval) {
    // Generate a new shake
    lastShakeY = (Math.random() - 0.5) * 2 * shakeAmplitude;
    lastShakeX = (Math.random() - 0.5) * 2 * shakeAmplitude * 0.2;
    shakeFrameCounter = 0;
  }
  updateSceneryPosition(lastShakeY, lastShakeX);
  requestAnimationFrame(animateShake);
}

window.addEventListener('load', () => {
  animateScroll();
  animateShake();
});

window.addEventListener('wheel', function(e) {
  // Only act if there's a vertical scroll delta
  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
    // Prevent the default vertical scroll
    e.preventDefault();
    // Scroll horizontally by the same amount
    window.scrollBy({
      left: e.deltaY,
      behavior: 'auto' // or 'smooth' for smooth scrolling
    });
  }
}, { passive: false });

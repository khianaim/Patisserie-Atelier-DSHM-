// Shimmer text effect for logo
const shimmerText = document.querySelector('.text-shimmer-wave');
const text = shimmerText.textContent;
shimmerText.textContent = ''; // Clear original

[...text].forEach((char, i) => {
  const span = document.createElement('span');
  span.textContent = char === ' ' ? '\u00A0' : char;
  span.style.setProperty('--i', i);
  shimmerText.appendChild(span);
});

//Carousel Motions for all pages & back button after viewing products:
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = () => showSlider('next');
prevButton.onclick = () => showSlider('prev');

let unAcceppClick;
const showSlider = (type) => {
  nextButton.style.pointerEvents = 'none';
  prevButton.style.pointerEvents = 'none';

  carousel.classList.remove('next', 'prev');
  let items = document.querySelectorAll('.carousel .list .item');

  if (type === 'next') {
    listHTML.appendChild(items[0]);
    carousel.classList.add('next');
  } else {
    listHTML.prepend(items[items.length - 1]);
    carousel.classList.add('prev');
  }

  clearTimeout(unAcceppClick);
  unAcceppClick = setTimeout(() => {
    nextButton.style.pointerEvents = 'auto';
    prevButton.style.pointerEvents = 'auto';
  }, 2000);
};

seeMoreButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const detail = button.closest('.item').querySelector('.detail');
    detail.style.display = 'block';
    backButton.style.display = 'block';
    carousel.classList.add('showDetail');
  });
});

backButton.addEventListener('click', () => {
  const openDetail = document.querySelector('.detail[style*="display: block"]');
  if (openDetail) openDetail.style.display = 'none';
  backButton.style.display = 'none';
  carousel.classList.remove('showDetail');
});


  // Pop-Up Leave a Review Section for both pages:
function openModal() {
  document.getElementById("modalOverlay").style.display = "block";
  document.getElementById("commentModal").style.display = "block";
}

function closeModal() {
  document.getElementById("modalOverlay").style.display = "none";
  document.getElementById("commentModal").style.display = "none";
}

// Menu Change Via Toggle:
const toggle = document.getElementById('toggle-pastry-drinks');

// Listen for changes in the toggle state (checked/unchecked)
toggle.addEventListener('change', function () {
  // Add fade-out effect before redirecting
  document.body.classList.add('fade-out');
  
  // Delay the navigation to allow the fade-out transition
  setTimeout(() => {
    const targetPage = this.checked ? 'drinks.html' : 'index.html'; // Determine target page based on checked state
    window.location.href = targetPage; // Redirect to the correct page
  }, 550); // Delay duration should match the transition time for fade-out (0.5s)
});

// If you're on drinks.html and want to keep the switch checked, set it to true
window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-pastry-drinks');
  if (window.location.pathname.includes('drinks')) {
    toggle.checked = true;  // Make sure it's checked when on drinks.html
  }
});


//Tutorial Message Settings
const tutorial = document.getElementById("tutorial");
const closeTutorial = document.getElementById("closeTutorial");

  // Automatically show tutorial on page load
window.onload = function () {
  tutorial.style.display = "block";
};

  // Close the tutorial modal
closeTutorial.onclick = function () {
  tutorial.style.display = "none";
};

  // Close tutorial if user clicks outside the content
window.onclick = function (event) {
  if (event.target === tutorial) {
    tutorial.style.display = "none";
  }
};


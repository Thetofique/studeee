ScrollReveal({
    mobile: false,
  }
  )
  
  ScrollReveal().reveal('.header', {
    delay: 500,
    reset: false,
    mobile: false,
  });
  
  ScrollReveal().reveal('.quote', {
    scale: 2,
    duration: 3000,
    mobile: false,
  });
  ScrollReveal().reveal('.front', {

    scale: 2,
    duration: 3000,
    delay: 500,
    mobile: false,
  });
// script.js

const header = document.querySelector('.qt');

// Hide the header initially
header.style.display = 'none';

// Show the header after 2 seconds
setTimeout(() => {
  header.style.display = 'block';
}, 2000); // Set the delay in milliseconds (2000 = 2 seconds)

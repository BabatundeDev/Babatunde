function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  // Show button when user scrolls down 100px
  if (window.scrollY > 100) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const scrollRevealOptions = {
    distance: "50px",
    duration: 1200,
    easing: "cubic-bezier(0.5, 0, 0, 1)", // Smooth & elegant
    opacity: 0,
    reset: false, // Prevents repeating animations on scroll
    viewFactor: 0.2, // Only triggers when 20% of the element is in view
  };

  ScrollReveal().reveal(".info", {
    ...scrollRevealOptions,
    origin: "bottom",
    delay: 300,
  });

  ScrollReveal().reveal(".about-details-container", {
    ...scrollRevealOptions,
    origin: "left",
    delay: 400,
    interval: 200, // Staggered effect for multiple elements
  });

  ScrollReveal().reveal(".card", {
    ...scrollRevealOptions,
    origin: "top",
    delay: 300,
    scale: 0.95, // Slight zoom-in effect for a modern touch
  });

  ScrollReveal().reveal(".project-card", {
    ...scrollRevealOptions,
    origin: "right",
    delay: 400,
    interval: 200,
    scale: 0.9, // Shrinks in then expands for a cool effect
  });

  ScrollReveal().reveal("#contact", {
    ...scrollRevealOptions,
    origin: "bottom",
    delay: 500,
    rotate: { x: 10, y: 0, z: 0 }, // Subtle rotation for a stylish touch
  });

  ScrollReveal().reveal(".cta-button", {
    ...scrollRevealOptions,
    origin: "bottom",
    delay: 600,
    scale: 1.1, // Pops out to draw attention
  });
});




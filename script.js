function togglemenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
  // Check if user is near the bottom of the page
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
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
  const scrollRevealOption = {
    distance: "60px",
    duration: 1200,
    easing: "ease-in-out",
    opacity: 0,
  };

  ScrollReveal().reveal("#about", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
  });

  ScrollReveal().reveal("#experience", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
  });

  ScrollReveal().reveal("#projects", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 600,
  });

  ScrollReveal().reveal("#contact", {
    ...scrollRevealOption,
    origin: "top",
    interval: 300,
  });
});

const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

/* Dropdown for mobile/tablet */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("li.dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
      if (window.innerWidth <= 1024) {
        e.preventDefault();
        link.parentElement.classList.toggle("open");
      }
    });
  });
});








let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 3000);












/*== contact's send message button ==*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // stop default submission

  if (this.checkValidity()) {
    // ✅ Clear form fields
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
  } else {
    // ❌ Invalid → show browser’s validation messages
    this.reportValidity();
  }
});
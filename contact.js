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









/*= submit button =*/
document.getElementById("quickForm").addEventListener("submit", function(event) {
event.preventDefault(); // stop default reload

if (this.checkValidity()) {
    // ✅ Clear inputs
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
} else {
    // ❌ Show browser’s validation errors
    this.reportValidity();
}
});











document.getElementById("contactForm").addEventListener("submit", function(event) {
event.preventDefault(); // stop default reload

if (this.checkValidity()) {
    // ✅ Clear the form inputs
    this.reset();

    // ✅ Redirect after clearing
    window.location.href = "./error.html";
} else {
    // ❌ Show browser’s validation errors
    this.reportValidity();
}
});
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










/* This js for dropdown menu */
document.addEventListener('DOMContentLoaded', () => {
document.querySelectorAll('li.dropdown').forEach(dropdown => {
  const trigger = dropdown.querySelector('a');

  trigger.addEventListener('click', function(e) {
    if (window.matchMedia('(max-width: 768px)').matches) {
      e.preventDefault();
      dropdown.classList.toggle('open');
    }
  });
});

document.addEventListener('click', function(e) {
  document.querySelectorAll('li.dropdown.open').forEach(openDrop => {
    if (!openDrop.contains(e.target)) {
      openDrop.classList.remove('open');
    }
  });
});
});


















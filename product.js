/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});






document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("hero-search-form");
  const input = document.getElementById("hero-search-input");
  const category = document.getElementById("hero-search-category");
  const errorEl = document.getElementById("hero-search-error");

  // simple validation rules:
  // - search must be non-empty and at least 2 characters
  // - you can extend with regex for postal code if needed
  function validate() {
    const value = input.value.trim();
    // reset styles
    input.classList.remove("invalid");
    category.classList.remove("invalid");
    errorEl.textContent = "";

    if (value.length < 2) {
      input.classList.add("invalid");
      errorEl.textContent = "Please fill valid details (enter at least 2 characters).";
      return false;
    }

    // optionally: if you want to require a category selection uncomment next
    // if (category.value === "") {
    //   category.classList.add("invalid");
    //   errorEl.textContent = "Please select a property type.";
    //   return false;
    // }

    return true;
  }

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    if (!validate()) {
      // invalid — do not navigate
      return;
    }

    // valid — per your requirement navigate to error.html (404)
    window.location.href = "./error.html";
  });

  // optional: live validation / clear error while typing
  input.addEventListener("input", () => {
    if (input.classList.contains("invalid")) {
      validate();
    } else {
      errorEl.textContent = "";
    }
  });
});








/* search */
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  priceRange.addEventListener('input', () => {
    priceValue.textContent = `₹${priceRange.value}`;
  });







//   function initMap() {
//   const map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: 12.9716, lng: 77.5946 }, // Coordinates for Bangalore, India
//     zoom: 12,
//   });

//   const marker = new google.maps.Marker({
//     position: { lat: 12.9716, lng: 77.5946 },
//     map: map,
//     title: "Featured Property Location",
//   });
// }






/* JS (add before </body> once; powers the reveal-on-scroll) */

  (function(){
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('is-visible');
          io.unobserve(e.target); // animate only once
        }
      });
    }, { threshold: 0.2 });
    els.forEach(el=>io.observe(el));
  })();




  







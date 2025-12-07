/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});









// form-redirect.js
// Attach submit handlers to the forms you mentioned.
// When the form is VALID: go to ./error.html
// When the form is INVALID: show browser validation and DO NOT navigate.

(function () {
  // Forms to handle
  const selectors = [
    '.valuation-form',
    '.property-search-form',
    '.lead-form'
  ];

  // Target page to go to after successful validation
  const TARGET = './error.html';

  function handleSubmit(e) {
    e.preventDefault(); // always prevent default; we'll decide what to do
    const form = e.currentTarget;

    // If the form is invalid, show browser built-in validation message and stay on page
    if (!form.checkValidity()) {
      // Show HTML5 built-in validation UI
      form.reportValidity();
      return; // do not navigate
    }

    // Form is valid -> navigate to the target page
    // (You can pass query params here if needed)
    window.location.href = TARGET;
  }

  // Attach handlers and remove any inline onclicks that might forcibly navigate earlier
  selectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(form => {
      // Defensive: remove onclick attributes from any submit buttons inside (overrides inline handlers)
      form.querySelectorAll('button[type="submit"], input[type="submit"]').forEach(btn => {
        try { btn.removeAttribute('onclick'); } catch (err) { /* ignore */ }
        // also clear any DOM0 handlers
        try { btn.onclick = null; } catch (err) {}
      });

      // Attach submit listener
      // Use capture=false (default). We'll preventDefault and act accordingly.
      form.addEventListener('submit', handleSubmit);
    });
  });

})();

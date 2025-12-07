/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});







document.addEventListener('DOMContentLoaded', () => {
  // Default redirect if none found on buttons
  const DEFAULT_REDIRECT = './error.html';

  // Helper: create or return inline error element for a form
  function getErrorEl(form) {
    let el = form.querySelector('.__form_validation_error');
    if (!el) {
      el = document.createElement('div');
      el.className = '__form_validation_error';
      // small, non-intrusive styling — you can override via your CSS
      el.style.color = '#ffb3b3';
      el.style.fontSize = '0.95rem';
      el.style.marginTop = '8px';
      el.setAttribute('aria-live', 'polite');
      form.appendChild(el);
    }
    return el;
  }

  // For every form on the page, gather redirect info from its submit buttons (if any)
  document.querySelectorAll('form').forEach(form => {
    // find submit buttons (type=submit or button defaulting to submit)
    const submitButtons = Array.from(form.querySelectorAll('button, input[type="submit"]'));

    // store a redirect URL on the form (priority: button[data-redirect], button.formaction, inline onclick)
    let formRedirect = null;

    submitButtons.forEach(btn => {
      // 1) if button has a data-redirect attribute, prefer it (manual opt-in)
      if (btn.dataset.redirect) {
        formRedirect = formRedirect || btn.dataset.redirect;
      }

      // 2) if button has a formaction attribute (HTML feature), prefer it
      if (!formRedirect && btn.getAttribute && btn.getAttribute('formaction')) {
        formRedirect = btn.getAttribute('formaction');
      }

      // 3) if button has inline onclick that sets window.location.href='./error.html'
      //    extract the URL (simple regex) and store it, then REMOVE the onclick so it won't fire immediately.
      const onclickAttr = btn.getAttribute && btn.getAttribute('onclick');
      if (!formRedirect && onclickAttr) {
        // try to extract a URL inside quotes after window.location.href= or location.href=
        const m = onclickAttr.match(/location\.href\s*=\s*['"]([^'"]+)['"]/i)
                || onclickAttr.match(/window\.location\s*=\s*['"]([^'"]+)['"]/i)
                || onclickAttr.match(/window\.location\.href\s*=\s*['"]([^'"]+)['"]/i);
        if (m && m[1]) {
          formRedirect = m[1];
        }
        // remove inline onclick attribute so it won't navigate on click
        try { btn.removeAttribute('onclick'); } catch (err) { /* ignore */ }
      }
    });

    // fallback to default redirect if none found
    if (!formRedirect) formRedirect = DEFAULT_REDIRECT;

    // Attach submit handler (capture bubble to run before possible other listeners)
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      ev.stopPropagation();

      const errEl = getErrorEl(form);

      // Use HTML5 validity API
      if (!form.checkValidity()) {
        // show built-in messages and also our inline message
        form.reportValidity();
        errEl.textContent = 'Please fill valid details.';
        return; // DO NOT navigate
      }

      // At this point the form is valid. If the user clicked a specific submit button,
      // prefer that button's redirect (it may override the form-level redirect).
      // Modern browsers attach the 'submitter' to submit event.
      let redirectUrl = formRedirect;

      if (ev.submitter) {
        const sub = ev.submitter;
        // prefer data-redirect on button
        if (sub.dataset && sub.dataset.redirect) redirectUrl = sub.dataset.redirect;
        // then button.formaction
        if (sub.getAttribute && sub.getAttribute('formaction')) redirectUrl = sub.getAttribute('formaction');
      } else {
        // fallback: try to detect the last clicked submit button (for older browsers)
        // We attached click listeners below to record lastClickedSubmit
        if (form.__lastClickedSubmit) {
          const last = form.__lastClickedSubmit;
          if (last.dataset && last.dataset.redirect) redirectUrl = last.dataset.redirect;
          if (last.getAttribute && last.getAttribute('formaction')) redirectUrl = last.getAttribute('formaction');
        }
      }

      // Clear any error
      errEl.textContent = '';

      // Optional: run any final JS (e.g., send data) BEFORE redirect.
      // If you need to POST data to a server before redirect, do that here (fetch) and in .then() do location change.

      // Finally: navigate to redirectUrl (this will load the page and produce 404 if that file doesn't exist)
      window.location.href = redirectUrl;
    }, true); // useCapture true to make this robust

    // record last clicked submit button for older browsers that don't populate ev.submitter
    submitButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        form.__lastClickedSubmit = this;
      });
    });
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




  











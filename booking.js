/*====Hamburger menu JS Code ====*/
const hamburger = document.getElementById("hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", ()=>{
    navBar.classList.toggle("active");
});










/* form-validate-and-redirect.js
   Purpose:
   - Prevent inline onclick navigation to ./error.html running immediately.
   - Let the browser show validation messages when invalid.
   - If the form is valid, navigate to ./error.html.
   - Works without editing your existing HTML.
*/

(function () {
  const TARGET_URL = './error.html';

  // 1) Intercept clicks on submit buttons that have inline onclick to error.html
  // Use capture so we run before inline onclick handlers.
  document.addEventListener('click', function (ev) {
    const btn = ev.target.closest('button[type="submit"], input[type="submit"]');
    if (!btn) return;

    const onclickAttr = btn.getAttribute && btn.getAttribute('onclick');
    if (!onclickAttr) return;

    // If the onclick contains error.html (or window.location.href to that), intercept it
    if (onclickAttr.includes('error.html') || onclickAttr.includes(TARGET_URL)) {
      // Stop the inline onclick from running and prevent default navigation
      ev.preventDefault();
      ev.stopImmediatePropagation();

      // Find the associated form
      const form = btn.form || document.querySelector('form');
      if (!form) {
        // no form found — do a safe redirect (rare)
        window.location.href = TARGET_URL;
        return;
      }

      // Use requestSubmit when available so the submit event fires normally and uses the submitter
      if (typeof form.requestSubmit === 'function') {
        form.requestSubmit(btn);
      } else {
        // Fallback: dispatch a submit event (cancelable) so our submit listeners run
        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);
      }
    }
  }, true); // capture = true so we intercept before inline onclick

  // 2) Attach submit listener on all forms to validate and redirect only when valid.
  //    Use delegated approach so it works for any number of forms on the page.
  document.addEventListener('submit', function (ev) {
    const form = ev.target;
    if (!(form instanceof HTMLFormElement)) return;

    // Prevent default navigation so we control redirect flow
    ev.preventDefault();
    ev.stopPropagation();

    // If invalid, show the browser validation UI and stop.
    if (!form.checkValidity()) {
      // show validation messages (native)
      form.reportValidity();
      return;
    }

    // At this point, form is valid. Redirect to error.html
    // If you want to include query params or POST to server first, do it here.
    window.location.href = TARGET_URL;
  }, true); // capture true so this runs early

  // 3) Safety: also intercept programmatic form.submit() calls that might bypass submit event
  const nativeSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    try {
      // dispatch submit event first — our submit handler (above) will run and prevent navigation if invalid
      const ev = new Event('submit', { bubbles: true, cancelable: true });
      const notCancelled = this.dispatchEvent(ev);
      // If not cancelled and you want to proceed with default navigation, call nativeSubmit.
      // We intentionally do NOT call nativeSubmit here because we want to control navigation.
      // If you instead prefer to allow default, replace the following comment with nativeSubmit.call(this);
      return;
    } catch (err) {
      // fallback to native if anything goes wrong
      return nativeSubmit.call(this);
    }
  };
})();

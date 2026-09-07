const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#primary-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

nav?.addEventListener('click', (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }
});

document.querySelector('#year').textContent = String(new Date().getFullYear());

const inquiryForm = document.querySelector('#inquiry-form');
const startedAt = document.querySelector('#form-started-at');
const formStatus = document.querySelector('#form-status');

if (startedAt) startedAt.value = String(Date.now());

inquiryForm?.addEventListener('submit', (event) => {
  const honeypot = inquiryForm.querySelector('[name="company_website"]');
  const elapsed = Date.now() - Number(startedAt?.value || Date.now());
  const endpointReady = !inquiryForm.action.includes('REPLACE_WITH_FORM_ID');

  if (!endpointReady) {
    event.preventDefault();
    formStatus.textContent = 'The inquiry form is being configured. Please check back shortly.';
    return;
  }

  if (honeypot?.value || elapsed < 3000) {
    event.preventDefault();
    formStatus.textContent = 'Unable to submit this inquiry. Please wait a moment and try again.';
  }
});

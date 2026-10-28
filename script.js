const menuBtn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.textContent = open ? '✕' : '☰';
});

document.querySelectorAll('#nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = '☰';
  });
});

document.getElementById('year').textContent =
  new Date().getFullYear();

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;
  const message = document.getElementById('message').value.trim();

  const storeEmail = 'yourstore@example.com';

  const subject = encodeURIComponent(
    'BK ATTIRE enquiry - ' + interest
  );

  const body = encodeURIComponent(
    `Name: ${name}\nCustomer email: ${email}\nInterested in: ${interest}\n\nMessage:\n${message}`
  );

  window.location.href =
    `mailto:${storeEmail}?subject=${subject}&body=${body}`;
});

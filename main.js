const faders = document.querySelectorAll('.fade-on-scroll');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.1
});

faders.forEach(fader => {
  observer.observe(fader);
});

const icons = document.querySelectorAll('.contact-icon');
const popup = document.getElementById('popup');

icons.forEach(icon => {
  icon.addEventListener('click', (e) => {
    const info = icon.getAttribute('data-info');
    const rect = icon.getBoundingClientRect();
    const top = rect.top + window.scrollY - 10;
    const left = rect.left + rect.width / 2;

    popup.textContent = info;
    popup.style.top = `${top}px`;
    popup.style.left = `${left}px`;
    popup.classList.add('active');
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.contact-icon')) {
    popup.classList.remove('active');
  }
});

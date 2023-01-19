console.log('its working');

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]',
);
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  if (currentTheme === 'light') {
    document.querySelector('#theme').href = '';
  }
  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
    document.querySelector('#theme').href = 'dark-mode.css';
  }
}

function switchTheme(event) {
  if (event.target.checked) {
    document.querySelector('#theme').href = 'dark-mode.css';
    localStorage.setItem('theme', 'dark');
  } else {
    document.querySelector('#theme').href = '';
    localStorage.setItem('theme', 'light');
  }
}

toggleSwitch.addEventListener('change', switchTheme);
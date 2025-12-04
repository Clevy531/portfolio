const toggleBtn = document.getElementById('darkModeCheckbox');

toggleBtn.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});


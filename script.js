// Get the checkbox
const darkModeCheckbox = document.getElementById("darkModeCheckbox");

// Load saved preference from localStorage
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkModeCheckbox.checked = true;
}

// Toggle dark mode on checkbox change
darkModeCheckbox.addEventListener("change", () => {
  if (darkModeCheckbox.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled"); // Save preference
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled"); // Save preference
  }
});

// Animate skill bars when scrolling
function animateSkills() {
  const skills = document.querySelectorAll(".skill-fill");
  const triggerPoint = window.innerHeight * 0.9;

  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;

    if(skillTop < triggerPoint) {
      skill.style.width = skill.getAttribute("data-percent");
    }
  });
}

// Run on scroll and on page load
window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);

// script.js
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => observer.observe(card));


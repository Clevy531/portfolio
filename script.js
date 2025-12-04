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

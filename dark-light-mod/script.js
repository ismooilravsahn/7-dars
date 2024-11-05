const modeToggle = document.getElementById("modeToggle");

window.addEventListener("DOMContentLoaded", () => {
  const savedMode = localStorage.getItem("theme");
  if (savedMode) {
    document.body.classList.add(savedMode);
    modeToggle.textContent =
      savedMode === "dark-mode" ? "Light Mode" : "Dark Mode";
  } else {
    document.body.classList.add("light-mode");
    modeToggle.textContent = "Dark Mode";
  }
});

modeToggle.addEventListener("click", () => {
  if (document.body.classList.contains("light-mode")) {
    document.body.classList.remove("light-mode");
    document.body.classList.add("dark-mode");
    modeToggle.textContent = "Light Mode";
    localStorage.setItem("theme", "dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    document.body.classList.add("light-mode");
    modeToggle.textContent = "Dark Mode";
    localStorage.setItem("theme", "light-mode");
  }
});

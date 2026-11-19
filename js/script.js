// Find the button by its id
var toggleButton = document.getElementById("theme-toggle");

// Listen for a click on the button
toggleButton.addEventListener("click", function () {
  // Add the class "dark" to body if it is missing, remove it if it is there.
  // The colours themselves are in the CSS (body.dark), not here.
  document.body.classList.toggle("dark");
});

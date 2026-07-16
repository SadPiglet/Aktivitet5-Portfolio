/* ========================================
  Temaväxlare
  Aktivitet 5: Webbprojekt
  ======================================== */

// Hämta alla temaknappar
let themePink = document.querySelector("#theme-pink");
let themePurple = document.querySelector("#theme-purple");
let themeBlue = document.querySelector("#theme-blue");

// Funktion som byter tema
function setTheme(theme) {
  // Ta bort alla temaklasser från body
  document.body.classList.remove("theme-mountain-lake", "theme-purple-sunset");

  // Ta bort active från alla knappar
  themePurple.classList.remove("active");
  themeBlue.classList.remove("active");
  themePink.classList.remove("active");

  // Lägg till valt tema
  if (theme === "blue") {
      document.body.classList.add("theme-mountain-lake");
      themeBlue.classList.add("active");
  } else if (theme === "purple") {
      document.body.classList.add("theme-purple-sunset");
      themePurple.classList.add("active");
  } else {
      // Standard - Pink (inget extra behövs)
      themePink.classList.add("active");
  }

  // Spara valt tema i localStorage
  localStorage.setItem("chosen-theme", theme);

}

// Event-lyssnare på knapparna
themePurple.addEventListener("click", function() {
  setTheme("purple");
});

themeBlue.addEventListener("click", function() {
  setTheme("blue");
});

themePink.addEventListener("click", function() {
  setTheme("pink");
});

// Ladda sparat tema när sidan öppnas
let savedTheme = localStorage.getItem("chosen-theme");
if (savedTheme) {
  setTheme(savedTheme);
}

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

// Back to top-knap
let backToTopBtn = document.querySelector("#back-to-top");

window.addEventListener("scroll", function() {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("visible"); 
  } else {
    backToTopBtn.classList.remove("visible");
  }
});

backToTopBtn.addEventListener("click", function() {
  smoothScrollToTop(1500);
});

// Expanderbara projektkort - endast ett öppet åt gången
document.querySelectorAll(".expand-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    let details = this.nextElementSibling;
    let isOpen = details.classList.contains("open");

    // Stäng ALLA andra öppna detaljer
    document.querySelectorAll(".project-details").forEach(function(otherDetails) {
      otherDetails.classList.remove("open");
    });
    document.querySelectorAll(".expand-btn").forEach(function(otherBtn) {
      otherBtn.classList.remove("open");
      otherBtn.textContent = "Read more ▼";
    });

    // Öppna detta kort om det inte redan var öppet
    if (!isOpen) {
      details.classList.add("open");
      this.classList.add("open");
      this.textContent = "Read less ▲";
    }
  });
});
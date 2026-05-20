// Script de la page d'accueil : controles simples pour explorer les planetes.
window.onload = function () {
  var body = document.body;
  var universe = document.getElementById("universe");
  var systemeSolaire = document.getElementById("solar-system");
  var boutonPlanetes = document.getElementById("toggle-data");
  var liensPlanetes = document.querySelectorAll("#data a");

  afficherProgressionAccueil();

  setTimeout(function () {
    body.classList.remove("view-2D");
    body.classList.remove("opening");
    body.classList.add("view-3D");
    body.classList.remove("hide-UI");
    body.classList.add("set-speed");
  }, 1200);

  boutonPlanetes.onclick = function (evenement) {
    evenement.preventDefault();
    body.classList.toggle("data-open");
    body.classList.toggle("data-close");
  };

  for (var i = 0; i < liensPlanetes.length; i++) {
    liensPlanetes[i].onclick = function (evenement) {
      evenement.preventDefault();

      var planete = this.getAttribute("data-planete");

      if (planete !== "sun") {
        systemeSolaire.className = planete;
      }

      enleverClasseActive(liensPlanetes);
      this.classList.add("active");
    };
  }

  universe.className = "scale-stretched";
};

function enleverClasseActive(liens) {
  for (var i = 0; i < liens.length; i++) {
    liens[i].classList.remove("active");
  }
}

function afficherProgressionAccueil() {
  var planetes = ["mercure", "venus", "terre", "mars", "jupiter", "saturne", "uranus", "neptune"];
  var total = 0;
  var maximum = 40;
  var rail = document.getElementById("railAccueil");
  var score = document.getElementById("scoreAccueil");

  for (var i = 0; i < planetes.length; i++) {
    var scorePlanete = localStorage.getItem("astrox_" + planetes[i]);

    if (scorePlanete !== null) {
      total += parseInt(scorePlanete);
    }
  }

  var pourcentage = Math.round((total / maximum) * 100);
  rail.style.setProperty("--progression", pourcentage + "%");
  score.innerHTML = total + " / " + maximum;
}

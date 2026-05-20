// Script de la page d'accueil : controles simples pour explorer les planetes.
// source pour la barre de progression: https://www.youtube.com/watch?v=4LBRMSk6PLY
window.onload = function () {
  var body = document.body;
  var universe = document.getElementById("universe");
  var systemeSolaire = document.getElementById("solar-system");
  var boutonPlanetes = document.getElementById("toggle-data");
  var liensPlanetes = document.querySelectorAll("#data a");

function afficherProgressionAccueil() {
  // Les 8 planètes des quiz
  var planetes = ["mercure", "venus", "terre", "mars", "jupiter", "saturne", "uranus", "neptune"];

  // Le score total commence à 0
  var total = 0;

  // 8 quiz x 5 points = 40 points maximum
  var maximum = 40;

  // On prend les éléments HTML de la barre
  var rail = document.getElementById("railAccueil");
  var score = document.getElementById("scoreAccueil");

  // Si la barre n'existe pas dans le HTML, on arrête la fonction
  if (rail === null || score === null) {
    return;
  }

  // On vérifie le score sauvegardé pour chaque planète
  for (var i = 0; i < planetes.length; i++) {
    var scorePlanete = localStorage.getItem("astrox_" + planetes[i]);

    // Si un score existe, on l'ajoute au total
    if (scorePlanete !== null) {
      total = total + parseInt(scorePlanete);
    }
  }

  // On transforme le score en pourcentage
  var pourcentage = Math.round((total / maximum) * 100);

  // On change la largeur de la barre avec une variable CSS
  rail.style.setProperty("--progression", pourcentage + "%");

  // On affiche le score, exemple : 23 / 40
  score.innerHTML = total + " / " + maximum;
}

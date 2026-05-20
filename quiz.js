// Données des quiz : chaque planète a 5 questions, donc 40 questions au total.
var quizzes = {
  mercure: {
    nom: "Mercure",
    mission: "La planète rapide",
    questions: [
      {
        texte: "Pourquoi Mercure a-t-elle des températures extrêmes ?",
        type: "radio",
        choix: ["Elle est couverte d'eau", "Elle n'a presque pas d'atmosphère", "Elle est très loin du Soleil", "Elle produit sa propre chaleur"],
        reponses: [1],
        correction: "Mercure garde mal la chaleur parce qu'elle a presque aucune atmosphère."
      },
      {
        texte: "Combien dure une annee sur Mercure ?",
        type: "select",
        choix: ["500 jours", "88 jours", "366 jours"],
        reponses: [1],
        correction: "Une année sur Mercure dure environ 88 jours terrestres."
      },
      {
        texte: "Quelles affirmations sont vraies pour Mercure ?",
        type: "checkbox",
        choix: ["Elle est la plus proche du Soleil", "Sa surface est cratérisée", "Elle possède des océans liquides", "Elle a une atmosphère épaisse"],
        reponses: [0, 1],
        correction: "Mercure est proche du Soleil et sa surface montre beaucoup de cratères."
      },
      {
        texte: "Pourquoi Mercure est-elle craterisee ?",
        type: "checkbox",
        choix: ["Des impacts de météorites", "Des volcans actifs partout", "Le vent", "La pluie"],
        reponses: [0],
        correction: "Les météorites ont laissé beaucoup de cratères sur sa surface."
      },
      {
        texte: "Mercure a-t-elle une atmosphère ?",
        type: "radio",
        choix: ["Non, presque inexistante", "Oui, comme la Terre", "Oui, pleine d'oxygène", "Oui, très épaisse"],
        reponses: [0],
        correction: "Son atmosphère est presque inexistante."
      }
    ]
  },
  venus: {
    nom: "Venus",
    mission: "La planète brûlante",
    questions: [
      {
        texte: "Pourquoi Vénus est-elle très chaude ?",
        type: "radio",
        choix: ["Son atmosphère épaisse garde la chaleur", "Ses anneaux gardent la chaleur", "Sa lune la réchauffe", "Sa petite taille produit la chaleur"],
        reponses: [0],
        correction: "Vénus est très chaude à cause de son atmosphère épaisse."
      },
      {
        texte: "L'atmosphère de Vénus est...",
        type: "select",
        choix: ["épaisse", "inexistante", "faite seulement d'eau"],
        reponses: [0],
        correction: "Vénus possède une atmosphère très épaisse."
      },
      {
        texte: "Quelles affirmations décrivent Vénus ?",
        type: "checkbox",
        choix: ["Elle est très chaude", "Son atmosphère garde la chaleur", "Elle est célèbre pour ses anneaux", "Elle est la planète la plus froide"],
        reponses: [0, 1],
        correction: "Vénus est chaude et son atmosphère garde la chaleur."
      },
      {
        texte: "Pourquoi la chaleur reste-t-elle sur Vénus ?",
        type: "checkbox",
        choix: ["Son atmosphère est épaisse", "Elle garde la chaleur", "Ses anneaux bloquent le froid", "Elle n'a aucune atmosphère"],
        reponses: [0, 1],
        correction: "L'atmosphère épaisse de Vénus emprisonne la chaleur."
      },
      {
        texte: "Quelle réponse est fausse pour Vénus ?",
        type: "radio",
        choix: ["Elle est très chaude", "Elle a une atmosphère épaisse", "Elle garde la chaleur", "Elle est chaude à cause de ses anneaux"],
        reponses: [3],
        correction: "Vénus n'est pas chaude à cause d'anneaux."
      }
    ]
  },
  terre: {
    nom: "Terre",
    mission: "Notre maison",
    questions: [
      {
        texte: "Quelle planète possède de la vie connue ?",
        type: "radio",
        choix: ["Saturne", "Terre", "Uranus", "Mercure"],
        reponses: [1],
        correction: "La Terre est la seule planète où la vie est connue."
      },
      {
        texte: "La Terre possède beaucoup...",
        type: "select",
        choix: ["d'eau liquide", "d'anneaux", "de methane seulement"],
        reponses: [0],
        correction: "La Terre possède beaucoup d'eau liquide."
      },
      {
        texte: "Quelles affirmations décrivent la Terre ?",
        type: "checkbox",
        choix: ["Elle possède de la vie connue", "Elle possède beaucoup d'eau liquide", "Elle est une géante gazeuse", "Elle est la plus proche du Soleil"],
        reponses: [0, 1],
        correction: "La Terre a de l'eau liquide et de la vie connue."
      },
      {
        texte: "La Terre est spéciale parce qu'elle a...",
        type: "checkbox",
        choix: ["de la vie connue", "beaucoup d'eau liquide", "les vents les plus rapides", "de grands anneaux de glace"],
        reponses: [0, 1],
        correction: "La vie connue et l'eau liquide rendent la Terre speciale."
      },
      {
        texte: "Quelle réponse ne correspond pas à la Terre ?",
        type: "radio",
        choix: ["Elle possède de l'eau liquide", "Elle possède de la vie connue", "Elle est notre planète", "Elle est célèbre pour ses grands anneaux"],
        reponses: [3],
        correction: "Les grands anneaux sont associés à Saturne, pas à la Terre."
      }
    ]
  },
  mars: {
    nom: "Mars",
    mission: "La planète rouge",
    questions: [
      {
        texte: "Quel est le surnom de Mars ?",
        type: "radio",
        choix: ["La planète bleue", "La planète rouge", "La géante gazeuse", "La planète glacée"],
        reponses: [1],
        correction: "Mars est surnommée la planète rouge."
      },
      {
        texte: "Pourquoi Mars est-elle rouge ?",
        type: "select",
        choix: ["À cause de l'oxyde de fer", "À cause de l'eau liquide", "À cause de ses anneaux"],
        reponses: [0],
        correction: "Le sol de Mars contient de l'oxyde de fer."
      },
      {
        texte: "Quelles affirmations décrivent Mars ?",
        type: "checkbox",
        choix: ["Elle est appelée la planète rouge", "Son sol contient de l'oxyde de fer", "Elle est la plus grande planète", "Elle est une géante gazeuse"],
        reponses: [0, 1],
        correction: "Mars est rouge a cause de l'oxyde de fer."
      },
      {
        texte: "Mars est associée à...",
        type: "checkbox",
        choix: ["la couleur rouge", "l'oxyde de fer", "des anneaux de glace", "des vents extrêmement rapides"],
        reponses: [0, 1],
        correction: "Mars est associée à la couleur rouge et à l'oxyde de fer."
      },
      {
        texte: "Quelle réponse est fausse pour Mars ?",
        type: "radio",
        choix: ["Elle est rouge", "Son sol contient de l'oxyde de fer", "Elle est appelée la planète rouge", "Elle est appelée la géante gazeuse"],
        reponses: [3],
        correction: "Mars n'est pas une géante gazeuse."
      }
    ]
  },
  jupiter: {
    nom: "Jupiter",
    mission: "La plus grande",
    questions: [
      {
        texte: "Quelle est la plus grande planète du système solaire ?",
        type: "radio",
        choix: ["Jupiter", "Terre", "Mars", "Vénus"],
        reponses: [0],
        correction: "Jupiter est la plus grande planète du système solaire."
      },
      {
        texte: "Jupiter est une...",
        type: "select",
        choix: ["planète rocheuse", "géante gazeuse", "planète naine"],
        reponses: [1],
        correction: "Jupiter est une géante gazeuse."
      },
      {
        texte: "Quelles affirmations décrivent Jupiter ?",
        type: "checkbox",
        choix: ["Elle est la plus grande planète", "C'est une géante gazeuse", "Elle est petite et rocheuse", "Elle est connue pour l'eau liquide"],
        reponses: [0, 1],
        correction: "Jupiter est très grande et gazeuse."
      },
      {
        texte: "Jupiter est...",
        type: "checkbox",
        choix: ["très grande", "gazeuse", "la planète rouge", "la planète aux grands anneaux"],
        reponses: [0, 1],
        correction: "Jupiter est la plus grande planète et une géante gazeuse."
      },
      {
        texte: "Quelle réponse ne correspond pas à Jupiter ?",
        type: "radio",
        choix: ["C'est une géante gazeuse", "C'est la plus grande planète", "Elle fait partie du système solaire", "Elle est petite et très rocheuse"],
        reponses: [3],
        correction: "Jupiter n'est pas petite et rocheuse."
      }
    ]
  },
  saturne: {
    nom: "Saturne",
    mission: "Les anneaux",
    questions: [
      {
        texte: "Pourquoi Saturne est-elle célèbre ?",
        type: "radio",
        choix: ["Ses volcans", "Ses anneaux", "Son eau liquide", "Sa vitesse"],
        reponses: [1],
        correction: "Saturne est celebre pour ses anneaux."
      },
      {
        texte: "Les anneaux de Saturne sont composés de...",
        type: "select",
        choix: ["glace et roches", "feu et lave", "plantes et eau"],
        reponses: [0],
        correction: "Ses anneaux contiennent surtout de la glace et des roches."
      },
      {
        texte: "Quelles affirmations décrivent Saturne ?",
        type: "checkbox",
        choix: ["Elle est connue pour ses grands anneaux", "Ses anneaux sont composés de glace et de roches", "Elle est la plus proche du Soleil", "Elle est appelée la planète rouge"],
        reponses: [0, 1],
        correction: "Saturne est connue pour ses anneaux de glace et de roches."
      },
      {
        texte: "Saturne est associée à...",
        type: "checkbox",
        choix: ["des anneaux", "de la glace et des roches", "l'oxyde de fer", "beaucoup d'eau liquide et de vie connue"],
        reponses: [0, 1],
        correction: "Saturne est surtout associée à ses anneaux."
      },
      {
        texte: "Quelle réponse est fausse pour Saturne ?",
        type: "radio",
        choix: ["Elle a de grands anneaux", "Ses anneaux contiennent de la glace", "Ses anneaux contiennent des roches", "Elle est célèbre pour être la planète rouge"],
        reponses: [3],
        correction: "La planète rouge, c'est Mars."
      }
    ]
  },
  uranus: {
    nom: "Uranus",
    mission: "La rotation inclinee",
    questions: [
      {
        texte: "Qu'est-ce qui est spécial chez Uranus ?",
        type: "radio",
        choix: ["Elle tourne presque sur le côté", "Elle est la plus proche du Soleil", "Elle est rouge", "Elle n'a pas d'atmosphère"],
        reponses: [0],
        correction: "Uranus tourne presque sur le côté."
      },
      {
        texte: "Uranus est une planète...",
        type: "select",
        choix: ["froide", "très chaude comme Vénus", "petite et très rocheuse comme Mercure"],
        reponses: [0],
        correction: "Uranus est une planète froide."
      },
      {
        texte: "Quelles affirmations décrivent Uranus ?",
        type: "checkbox",
        choix: ["Elle est froide", "Elle tourne presque sur le côté", "Elle est la planète rouge", "Elle est la plus proche du Soleil"],
        reponses: [0, 1],
        correction: "Uranus est froide et sa rotation est très inclinée."
      },
      {
        texte: "Uranus est associée à...",
        type: "checkbox",
        choix: ["une planète froide", "une rotation presque sur le côté", "la chaleur gardée par une atmosphère épaisse", "des anneaux composés de glace et de roches"],
        reponses: [0, 1],
        correction: "Uranus est connue pour sa température froide et son inclinaison."
      },
      {
        texte: "Quelle réponse est fausse pour Uranus ?",
        type: "radio",
        choix: ["Elle est froide", "Elle tourne presque sur le côté", "Elle n'est pas la plus proche du Soleil", "Elle est la plus proche du Soleil"],
        reponses: [3],
        correction: "Uranus n'est pas la plus proche du Soleil."
      }
    ]
  },
  neptune: {
    nom: "Neptune",
    mission: "Les vents rapides",
    questions: [
      {
        texte: "Quelle planète est très loin du Soleil et possède des vents rapides ?",
        type: "radio",
        choix: ["Neptune", "Mercure", "Venus", "Terre"],
        reponses: [0],
        correction: "Neptune est loin du Soleil et possède des vents rapides."
      },
      {
        texte: "Neptune possède des vents...",
        type: "select",
        choix: ["extrêmement rapides", "inexistants", "faits de glace solide"],
        reponses: [0],
        correction: "Neptune a des vents extrêmement rapides."
      },
      {
        texte: "Quelles affirmations décrivent Neptune ?",
        type: "checkbox",
        choix: ["Elle est très loin du Soleil", "Elle possède des vents extrêmement rapides", "Elle est la plus proche du Soleil", "Elle est la planète rouge"],
        reponses: [0, 1],
        correction: "Neptune est loin du Soleil et ses vents sont très rapides."
      },
      {
        texte: "Neptune est associée à...",
        type: "checkbox",
        choix: ["son éloignement du Soleil", "des vents rapides", "de l'eau liquide et de la vie connue", "une surface petite et rocheuse"],
        reponses: [0, 1],
        correction: "Neptune est associée à son éloignement et à ses vents."
      },
      {
        texte: "Quelle réponse est fausse pour Neptune ?",
        type: "radio",
        choix: ["Elle est loin du Soleil", "Elle a des vents rapides", "Elle possède des vents extrêmement rapides", "Elle est la plus proche du Soleil"],
        reponses: [3],
        correction: "La plus proche du Soleil est Mercure."
      }
    ]
  }
};

window.onload = function () {
  var formulaire = document.getElementById("formQuiz");

  if (formulaire !== null) {
    preparerQuiz(formulaire);
  }
};

function preparerQuiz(formulaire) {
  var nomPlanete = formulaire.getAttribute("data-planete");
  var quiz = quizzes[nomPlanete];

  afficherQuestions(formulaire, quiz);

  document.getElementById("btnSoumettre").onclick = function () {
    calculerScore(quiz, nomPlanete);
  };

  document.getElementById("btnRecommencer").onclick = function () {
    setTimeout(function () {
      document.getElementById("resultat").innerHTML = "";
      document.getElementById("corrections").innerHTML = "";
    }, 30);
  };
}

function afficherQuestions(formulaire, quiz) {
  var zoneQuestions = document.getElementById("zoneQuestions");
  var titre = document.getElementById("titreQuiz");
  var mission = document.getElementById("missionQuiz");

  titre.innerHTML = "Quiz sur " + quiz.nom;
  mission.innerHTML = quiz.mission + " - 5 questions";

  for (var i = 0; i < quiz.questions.length; i++) {
    var question = quiz.questions[i];
    var bloc = document.createElement("section");
    var numero = i + 1;

    bloc.className = "question";
    bloc.innerHTML = "<p>" + numero + ". " + question.texte + "</p>";

    if (question.type === "select") {
      bloc.appendChild(creerSelect(question, i));
    } else {
      bloc.appendChild(creerChoix(question, i));
    }

    zoneQuestions.appendChild(bloc);
  }
}

function creerChoix(question, numeroQuestion) {
  var zoneChoix = document.createElement("div");
  zoneChoix.className = "choix";

  for (var i = 0; i < question.choix.length; i++) {
    var etiquette = document.createElement("label");
    var champ = document.createElement("input");

    champ.type = question.type;
    champ.name = "q" + numeroQuestion;
    champ.value = i;

    etiquette.appendChild(champ);
    etiquette.appendChild(document.createTextNode(question.choix[i]));
    zoneChoix.appendChild(etiquette);
  }

  return zoneChoix;
}

function creerSelect(question, numeroQuestion) {
  var select = document.createElement("select");
  select.name = "q" + numeroQuestion;

  for (var i = 0; i < question.choix.length; i++) {
    var option = document.createElement("option");
    option.value = i;
    option.innerHTML = question.choix[i];
    select.appendChild(option);
  }

  return select;
}

function calculerScore(quiz, nomPlanete) {
  var score = 0;
  var corrections = "";
  var nom = document.getElementById("txtNom").value;

  if (nom === "") {
    nom = "Élève";
  }

  for (var i = 0; i < quiz.questions.length; i++) {
    var question = quiz.questions[i];
    var reponsesEleve = trouverReponses("q" + i, question.type);
    var bonne = comparerTableaux(reponsesEleve, question.reponses);
    var classeCorrection = "mauvaise-reponse";

    if (bonne === true) {
      score++;
      classeCorrection = "bonne-reponse";
    }

    corrections += "<p class='" + classeCorrection + "'><strong>Question " + (i + 1) + " :</strong> " + question.correction + "</p>";
  }

  afficherResultat(nom, score, quiz.questions.length, corrections, nomPlanete);
}

function trouverReponses(nomChamp, typeQuestion) {
  var reponses = [];

  if (typeQuestion === "select") {
    var select = document.querySelector("select[name='" + nomChamp + "']");
    reponses.push(parseInt(select.value));
  } else {
    var champs = document.querySelectorAll("input[name='" + nomChamp + "']");

    for (var i = 0; i < champs.length; i++) {
      if (champs[i].checked === true) {
        reponses.push(parseInt(champs[i].value));
      }
    }
  }

  return reponses;
}

function comparerTableaux(tableauEleve, tableauCorrect) {
  if (tableauEleve.length !== tableauCorrect.length) {
    return false;
  }

  tableauEleve.sort();
  tableauCorrect.sort();

  for (var i = 0; i < tableauCorrect.length; i++) {
    if (tableauEleve[i] !== tableauCorrect[i]) {
      return false;
    }
  }

  return true;
}

function afficherResultat(nom, score, total, corrections, nomPlanete) {
  var message = "";

  if (score < 3) {
    message = "Retourne au tutoriel et réessaie la mission.";
  } else if (score === 3) {
    message = "Tu es presque rendu, continue.";
  } else {
    message = "Bravo, mission réussie.";
  }

  document.getElementById("resultat").innerHTML = nom + ", ton score est : " + score + " / " + total + ". " + message;
  document.getElementById("corrections").innerHTML = corrections;
  enregistrerScore(nomPlanete, score);

  setTimeout(function () {
    window.location.href = "./tutoriel.html";
  }, 2600);
}

function enregistrerScore(nomPlanete, score) {
  var ancienScore = localStorage.getItem("astrox_" + nomPlanete);

  if (ancienScore === null || score > parseInt(ancienScore)) {
    localStorage.setItem("astrox_" + nomPlanete, score);
  }
}

function mettreScore(score, total) {
  var pourcentage = Math.round((score / total) * 100);
  var rail = document.getElementById("railScore");
  var texteScore = document.getElementById("texteScore");

  rail.style.setProperty("--progression", pourcentage + "%");
  texteScore.innerHTML = score + " / " + total;
}

function animerFusee(score, total) {
  var scoreActuel = 0;

  mettreScore(0, total);

  var minuteur = setInterval(function () {
    mettreScore(scoreActuel, total);

    if (scoreActuel >= score) {
      clearInterval(minuteur);
    }

    scoreActuel++;
  }, 220);
}

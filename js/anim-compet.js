
// ----récupérer le titre---
const titre = document.getElementById("titre");

// ----créer une nouvelle variable----
const title = "Mes Compétences";

//----on initialise le i ----
var i = 0;

//faire apparaitre le texte lettre par lettre avec un temps défini
const play = () => {
    titre.innerHTML = title.slice(0, i);

    i++;

    if (i > titre.length) {
        i = 0;
    }
};

var time = setInterval(play, 100);

play();
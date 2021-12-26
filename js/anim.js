
// Compteur HTML

let number = document.getElementById("number");

let compteur = 0;

setInterval(() => {
    if (compteur == 65) {
        clearInterval();
    } else {
        compteur += 1;
        number.innerHTML = compteur + "%";
    }
}, 40);

//Compteur CSS



let number_css = document.getElementById("numbercss");

let compteur1 = 0;

setInterval(() => {
    if (compteur1 == 50) {
        clearInterval();
    } else {
        compteur1 += 1;
        number_css.innerHTML = compteur1 + "%";
    }
}, 40);



//Compteur JS

let number_js = document.getElementById("numberjs");

let compteur2 = 0;

setInterval(() => {
    if (compteur2 == 20) {
        clearInterval();
    } else {
        compteur2 += 1;
        number_js.innerHTML = compteur2 + "%";
    }
}, 40);
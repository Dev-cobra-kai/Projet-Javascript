const horloge = function() {
let date = new Date();

let heures = date.getHours();
let minutes = date.getMinutes();
let secondes = date.getSeconds();

if (secondes < 10) {
    secondes = "0" + secondes;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}

let affichage = heures + ":" + minutes + ":" + secondes;

document.querySelector("#horloge").innerText = affichage;
};

window.setInterval(horloge, 1000);
const APIKEY = "a68cb4f6ed2133260f38d64f6884fceb";

// Appel à l'API openWeather avec ville en parametre de fonction 
let apiCall = function (city) {

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url).then((response) =>
        response.json().then((data) => {
            console.log(data);
            document.querySelector("#city").innerHTML = data.name +  "<i class='far fa-building'></i>";
            document.querySelector("#temp").innerHTML = data.main.temp + " °C" +  "<i class='fas fa-thermometer-half'></i>";
            document.querySelector("#humidity").innerHTML = data.main.humidity + " %" +  "<i class='fas fa-tint'></i>";
            document.querySelector("#wind").innerHTML = data.wind.speed + "km/h" +  "<i class='fas fa-wind'></i>";
        })
    )
        .catch((err) => console.log("Erreur : " + err));
}

// Ecouteur d'événements sur la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector("#inputCity").value;

    apiCall(ville);
});

// Appel par défaut au chargement de la page
apiCall("Mison");
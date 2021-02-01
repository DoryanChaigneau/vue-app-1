const APIKEY = '366e5f70d9e70e45364730cb9a4f0221';

// Appel a l'API openWeather avec ville en parametre de fonction
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;
  
  fetch(url)
  .then((response) =>
    response.json().then((data) => {
      console.log(data);
      // On récupère la ville
      document.querySelector('#ville').innerHTML = data.name;
      // On récupère la température
      document.querySelector('#temperature').innerHTML = "<i class='fas fa-thermometer-half'></i>" + data.main.temp + '°';
      // On récupère le taux d'humidité
      document.querySelector('#humidite').innerHTML = "<i class='fas fa-tint'></i>" + data.main.humidity + '%';
      // On récupère le % de vent
      document.querySelector('#vent').innerHTML = "<i class='fas fa-wind'></i>" + data.wind.speed + 'km/h';
      // On affiche l'image en fonction de la météo
      document.querySelector('footer').innerHTML = `<img src='http://openweathermap.org/img/w/${data.weather[0].icon}.png' alt='temps'> Meteo`;
    })
  )
    // Si il y a une erreur une renvoie le message d'erreur
  .catch((err) => console.log('Erreur : ' + err));
};
  

// On récupère ce que l'utilisateur recherche
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;

  apiCall(ville);
});

// Appel par defaut au chargement de la page
apiCall('Nantes');
const APIKEY = '366e5f70d9e70e45364730cb9a4f0221';

/*Appel a l'API openWeather avec ville en parametre de fonction*/
let apiCall = function (city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

  

/*On récupère la ville saisie par l'utilisateur*/
document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault();
  let ville = document.querySelector('#inputCity').value;
  apiCall(ville);
});

//Appel par defaut au chargement de la page
apiCall('Nantes');
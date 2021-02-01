const APIKEY = '439d4b804bc8187953eb36d2a8c26a02';

let url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${APIKEY}`;

fetch(url).then((response) =>
    response.json().then((data) => console.log(data))
);
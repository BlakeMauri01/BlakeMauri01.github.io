const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=00bc0d40340fa2c9ef41a4d48244a960&&units=imperial';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    document.getElementById('imagesrc').textContent = imagesrc; 
    document.getElementById('icon').setAttribute('src', imagesrc);
    document.getElementById('icon').setAttribute('alt', desc);
  });
function getFiveDayForecast(cityId) {

    var daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Satuday"
    ];

    // insert city id into api url
    const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=9912e5970cae9f327e9077ffb4657b7c&units=imperial';

    fetch(apiForecastURL)
        .then(
            (response) => response.json()
        )
        .then(
            (forecasts) => {
                console.log(forecasts);

                let hourString = '18:00:00';
                let counter = 1;

                forecasts.list.forEach(
                    (forecast) => {
                        if (forecast.dt_txt.includes(hourString)) {

                            const tempElement = document.getElementById(`temp${counter}`);
                            tempElement.innerHTML = forecast.main.temp + '&deg;';

                            let nextDate = new Date(forecast.dt_txt);

                            const dayElement = document.getElementById(`day${counter}`);
                            dayElement.innerHTML = daysOfWeek[nextDate.getDay()];

                            counter += 1;
                        }
                    }
                )

            }
        )
}
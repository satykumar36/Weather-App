const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '533caf8167mshb1ae7f104c0dc3ap1d2a3fjsn628f2ca780f5',
        'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
    }
};

function getWeather(city) {
    cityName.innerHTML = city;

    fetch('https://yahoo-weather5.p.rapidapi.com/weather?location=' + city + '&format=json&u=c', options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            const current = response.current_observation;
            const forecasts = response.forecasts[0];

            // Update HTML elements with weather data
            temp.innerHTML = current.condition.temperature;
            temp2.innerHTML = current.condition.temperature;
            temp3.innerHTML = current.condition.temperature;

            feels_like.innerHTML = current.wind.chill;
            humidity.innerHTML = current.atmosphere.humidity;
            humidity2.innerHTML = current.atmosphere.humidity;
            humidity3.innerHTML = current.atmosphere.humidity;

            min_temp.innerHTML = forecasts.low;
            max_temp.innerHTML = forecasts.high;
            wind_speed.innerHTML = current.wind.speed;
            wind_speed2.innerHTML = current.wind.speed;
            wind_speed3.innerHTML = current.wind.speed;

            sunrise.innerHTML = response.astronomy.sunrise;
            sunrise2.innerHTML = response.astronomy.sunrise;

            sunset.innerHTML = response.astronomy.sunset;
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Delhi");

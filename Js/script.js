
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '348a21a1ffmsh95fc7dc87445ef0p1e3aabjsnea2f64e0360d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function getWeather(city) {
    cityName.innerHTML=city

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)

        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        temp3.innerHTML = response.temp


        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        humidity3.innerHTML = response.humidity


        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_speed3.innerHTML = response.wind_speed


            sunrise.innerHTML = response.sunrise
            sunrise2.innerHTML = response.sunrise

        sunset.innerHTML = response.sunset


    })

    .catch(err => console.error(err));
}
submit.addEventListener("click",(e)=>{
    e.preventDefault()

    getWeather(city.value)
})
getWeather("Delhi")
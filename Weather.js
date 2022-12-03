const findmylocation = () => {
    const success = (position) => 
    {
        console.log(position)
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=23a8e0c5f4dfb16199caa42184141848&units=metric'

        fetch(weatherUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            var descrip = data['weather']['0']['description']
            var temperature = data['main']['temp']
            var feelslike = data['main']['feels_like']
            var windspeed = data['wind']['speed']

            temp.innerHTML = 'Temperature: '+temperature+ ' C°'
            description.innerHTML = 'Current conditions: ' +descrip
            feels.innerHTML = 'It currently feels like: ' +feelslike+ ' C°'
            wind.innerHTML = 'Wind Speed: ' +windspeed+ ' Km/h'
        });
    }
    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success, error)

}

document.querySelector('.weather_buttons').addEventListener('click', findmylocation);
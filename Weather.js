// finding users location
const findmylocation = () => {
    const success = (position) => 
    {
        //Getting the location from the json and assigning it to variables
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        //Connecting to openweathermap API and adding in collected lat and lon variables to get current weather details
        const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=23a8e0c5f4dfb16199caa42184141848&units=metric';
        //Fetching information
        fetch(weatherUrl);
        .then(res => res.json());
        .then(data => {
            console.log(data);
            //Getting needed information from json fetched from openweathermap API and assigning ito to variables
            var descrip = data['weather']['0']['description'];
            var temperature = data['main']['temp'];
            var feelslike = data['main']['feels_like'];
            var windspeed = data['wind']['speed'];
            //Applying variables into HTML 
            temp.innerHTML = 'Temperature: '+temperature+ ' C°';
            description.innerHTML = 'Current conditions: ' +descrip;
            feels.innerHTML = 'It currently feels like: ' +feelslike+ ' C°';
            wind.innerHTML = 'Wind Speed: ' +windspeed+ ' Km/h';
        });
    }
    //Unable to retrieve weather alert
    const error = () => {
        status.textContent = 'Unable to retrieve your location';
    }
    navigator.geolocation.getCurrentPosition(success, error);
}
    document.querySelector('.weather_buttons').addEventListener('click', findmylocation);

    




const cities_Easy = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Mumbai", "Bejing", "Dhaka", "Osaka", "New York City", "Karachi", "Buenos Aires", "Chongqing", "Istanbul", "Kolkata", "Manila", "Lagos", "Rio de Janeiro", "Guangzhou", "Los Angeles", "Moscow", "Shenzen", "Banglore", "Paris", "Bogotá", "Lima", "Seoul", "Bangkok", "London", "Tehran", "Chicago", "Riyadh", "Santiago", "Madrid", "Houston", "Dallas", "Toronto", "Miami", "Atlanta", "Barcelona", "Johannesburg", "Saint Petersburg", "Washington DC"];
const citiesPhotos = [""];
const quotes = [""]

function randomPhoto(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("img").src = citiesPhotos[randomNum];

}

function randomQuote(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("quote").vaule = quotes[randomNum];

}

const cities = ["Toronto", "New York", "Tokyo", "Jakarta", "Chonqing", "Delhi", "Seoul", "São Paulo", "Mexico City", "Buenos Aires"];
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
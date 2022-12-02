


const cities_Easy = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Mumbai", "Bejing", "Dahaka", "Osaka", "New York City", "Dubai", "Buenos Aires", "Istanbul", "Venice", "Manila", "Lagos", "Rio de Janeiro", "Stockholm", "Los Angeles", "Moscow", "Shenzen", "Banglore", "Paris", "Bogotá", "Lima", "Seoul", "Bangkok", "London", "Vancouver", "Chicago", "Riyadh", "Santiago", "Madrid", "Houston", "Dallas", "Toronto", "Miami", "Atlanta", "Barcelona", "Ottawa", "Saint Petersburg", "Washington DC"];
const cities_Medium = ["Melbourne", "Alexandria", "Guadalajara", "Hanoi", "Sydney", "Monterrey", "Cape Town", "Tel Aviv", "Medellin", "Montreal", "Athens", "Milan", "Lisbon", "Caracas", "Taipei", "Manchester", "Perth", "Vienna", "Quebec City", "Auckland", "Calgary", "Johannesburg"];
const cities_Hard = ["Philadelphia", "Marseille", "Rosario Argentina", "Munich", "Edmonton", "San Jose", "Belgrade", "San Diego", "Copenhagen", "Helsinki", "Prague", "Dublin", "Cancun", "Jacksonville", "Columbus", "Liverpool City", "Indianapolis", "Guangzhou", "Denver", "Florence"];
const citiesPhotos = [""];
const quotes = ["We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein", "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi", "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. — Eleanor Roosevelt", "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill", "It is better to fail in originality than to succeed in imitation. — Herman Melville", "Success usually comes to those who are too busy looking for it. — Henry David Thoreau", "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie", "Dont let yesterday take up too much of today. — Will Rogers", "You learn more from failure than from success. Dont let it stop you. Failure builds character. — Unknown ", "If you are working on something that you really care about, you dont have to be pushed. The vision pulls you. — Steve Jobs", "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. — Alexander Graham Bell", "Im a greater believer in luck, and I find the harder I work the more I have of it. — Thomas Jefferson", "When we strive to become better than we are, everything around us becomes better too. — Paulo Coelho", "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins", "You've got to get up every morning with determination if you're going to go to bed with satisfaction. — George Lorimer", "" ]

function randomPhoto(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("img").src = citiesPhotos[randomNum];

}

function randomQuote(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("quote").vaule = quotes[randomNum];

}
var easy_Button = false;
var medium_Button = false;
var hard_Button = false;

const cities_Easy = ["Tokyo", "Delhi", "Shanghai", "São Paulo", "Mexico City", "Cairo", "Mumbai", "Bejing", "Dahaka", "Osaka", "New York City", "Dubai", "Buenos Aires", "Istanbul", "Venice", "Manila", "Lagos", "Rio de Janeiro", "Stockholm", "Los Angeles", "Moscow", "Shenzen", "Banglore", "Paris", "Bogotá", "Lima", "Seoul", "Bangkok", "London", "Vancouver", "Chicago", "Riyadh", "Santiago", "Madrid", "Houston", "Dallas", "Toronto", "Miami", "Atlanta", "Barcelona", "Ottawa", "Saint Petersburg", "Washington DC"];
const cities_Medium = ["Melbourne", "Alexandria", "Guadalajara", "Hanoi", "Sydney", "Monterrey", "Cape Town", "Tel Aviv", "Medellin", "Montreal", "Athens", "Milan", "Lisbon", "Caracas", "Taipei", "Manchester", "Perth", "Vienna", "Quebec City", "Auckland", "Calgary", "Johannesburg"];
const cities_Hard = ["Philadelphia", "Marseille", "Rosario Argentina", "Munich", "Edmonton", "San Jose", "Belgrade", "San Diego", "Copenhagen", "Helsinki", "Prague", "Dublin", "Cancun", "Jacksonville", "Columbus", "Liverpool City", "Indianapolis", "Guangzhou", "Denver", "Florence"];
const citiesPhotos1 = [""];
const quotes = ["We cannot solve problems with the kind of thinking we employed when we came up with them. — Albert Einstein", 
                "Learn as if you will live forever, live like you will die tomorrow. — Mahatma Gandhi", 
                "When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out. — Eleanor Roosevelt", 
                "Success is not final; failure is not fatal: It is the courage to continue that counts. — Winston S. Churchill", 
                "It is better to fail in originality than to succeed in imitation. — Herman Melville", 
                "Success usually comes to those who are too busy looking for it. — Henry David Thoreau", 
                "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success. —Dale Carnegie", 
                "Dont let yesterday take up too much of today. — Will Rogers", 
                "You learn more from failure than from success. Dont let it stop you. Failure builds character. — Unknown ", 
                "If you are working on something that you really care about, you dont have to be pushed. The vision pulls you. — Steve Jobs", 
                "Concentrate all your thoughts upon the work in hand. The sun's rays do not burn until brought to a focus. — Alexander Graham Bell", 
                "Im a greater believer in luck, and I find the harder I work the more I have of it. — Thomas Jefferson", 
                "When we strive to become better than we are, everything around us becomes better too. — Paulo Coelho", 
                "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins", 
                "You've got to get up every morning with determination if you're going to go to bed with satisfaction. — George Lorimer"]

//global varibles
    //people can add more cities if need be
    const cities = ["Toronto", "New York", "Tokyo", "Jakarta", "Chonqing", "Delhi", "Seoul", "São Paulo", "Mexico City", "Buenos Aires"];
    //the aspect ratio should be a good quality and the postion of the array element corrseponds to the cites at the top
    const citiesPhotos = ["https://upload.wikimedia.org/wikipedia/commons/6/65/Toronto_Skyline_Summer_2020.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
                "https://content.r9cdn.net/rimg/dimg/1b/61/ad879e55-city-22380-17ea1cf2107.jpg?crop=true&width=1020&height=498",
                "https://upload.wikimedia.org/wikipedia/commons/6/67/Chongqing_Nightscape.jpg",
                "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
                "https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg",
                "https://cdn.britannica.com/54/101754-050-3FA9B4A0/Downtown-Sao-Paulo.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1200px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg",
                "https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg"];


//function commenting later
function initalize(easy, medium, hard){
    
    if(easy == true){
        var allCityphotos = cities_Easy;
    }

    else if(medium == true){
        allCityphotos = cities_Medium;
    }

    else if (hard == true){
        allCityphotos = cities_Hard;
    }

    else {
        var allCityphotos = cities_Easy;
    }

    var newQuote = document.getElementById("quote");
    var cityPhoto = document.getElementById("city");
    var loadingPhoto = document.getElementById("loadingPhoto");
    var loadingText = document.getElementById("loadingText");

    var copyCityphotos = citiesPhotos;
    var allQuotes = quotes;


    var randomNum = Math.floor(Math.random() * copyCityphotos.length);
    var randomNum2 = Math.floor(Math.random() * allQuotes.length);

    //values and scr set to a random array num
    cityPhoto.src = copyCityphotos[randomNum];
    newQuote.value = allQuotes[randomNum2]

    //splicingArray(copyCityphotos, randomNum);
    //splicingArray(allQuotes, randomNum2);

    loadingPhoto.src = "https://flevix.com/wp-content/uploads/2019/12/Barline-Loading-Images-1.gif";

    loading(loadingText, copyCityphotos, allQuotes);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

}

function splicingArray(arr, value) {

    var index = arr.indexOf(value);
      arr.splice(index, value);
    return arr;
  }

async function loading(loadingText, copyCityphotos, allQuotes, previousNumberphoto, previousNumberquote) {

    var cityPhoto = document.getElementById("city");
    var newQuote = document.getElementById("quote");
    var counter = 0;
    var previous = [];
    var previous2 = [];

    previous.push(previousNumberphoto);
    previous.push(previousNumberquote);

    //sleeping at the begining of the new page

    await sleep(counter +2 * 1000);

    while(counter!= 5){

        do{
            randomNum = Math.floor(Math.random() * copyCityphotos.length);
            if(previous[counter] != randomNum){
                break;
            }
        }while (previous2 != randomNum);
        

        previous.push(randomNum);

        //randomNum = Math.floor(Math.random() * copyCityphotos.length);
        cityPhoto.src = copyCityphotos[randomNum];
        //splicingArray(copyCityphotos, randomNum);

        do{
            for(var i = 0; i < previous2.length; i++){

                if(previous2[i]){
                    
                }
            }

            randomNum = Math.floor(Math.random() * allQuotes.length);
            
        }while (tmp != randomNum);

        previous2.push(randomNum);
        
            
        randomNum2 = Math.floor(Math.random() * allQuotes.length);
        newQuote.value = allQuotes[randomNum2];
        //splicingArray(allQuotes, randomNum2);
        
        //alert(allQuotes);
        //alert(copyCityphotos);
        
        //alert(copyCityphotos, randomNum);

        counter++;

        switch(counter){

            case 1:
                loadingText.innerHTML = "Loading 20%";
                
                break;

            case 2:
                loadingText.innerHTML = "Loading 40%";
                break;

            case 3:
                loadingText.innerHTML = "Loading 60%";
                break;

            case 4:
                loadingText.innerHTML = "Loading 80%";
                break;

            case 5:
                loadingText.innerHTML = "Loading 100%";
                await sleep(counter +2 * 1000);
                break;
                

            default:
                break;
        }

        await sleep(counter * 1000);
    }
}

function difficulty_Button()
{


 if (document.getElementById("easy").clicked == true)
 {
    document.getElementById("easy").style.backgroundColor = "white";
    document.getElementById("easy").style.Color = "Black";
    easy_Button = true;
    medium_Button = false;
    hard_Button = false;
 }
 else if (document.getElementById("medium").clicked == true)
 {
    document.getElementById("medium").style.backgroundColor = "white";
    document.getElementById("medium").style.Color = "Black";
    easy_Button = false;
    medium_Button = true;
    hard_Button = false;
 }
 else if (document.getElementById("hard").clicked == true)
 {
    document.getElementById("hard").style.backgroundColor = "white";
    document.getElementById("hard").style.Color = "Black";
    easy_Button = false;
    medium_Button = false;
    hard_Button = true;
 }
}


function randomPhoto(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("img").src = citiesPhotos[randomNum];

}

function randomQuote(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("quote").vaule = quotes[randomNum];

} 
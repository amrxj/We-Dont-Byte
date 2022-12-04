var easy_Button = false;
var medium_Button = false;
var hard_Button = false;


let score = Number(sessionStorage .getItem('globalScore')) || 0;; 
let count = Number(sessionStorage .getItem('guessCounter')) || 0;
let cityCounter =  Number(sessionStorage .getItem('cityCounter')) || 0;
let playAgain =  Number(sessionStorage .getItem('playAgain')) || 0;

var citiesPhotos_ = [];
var mute = false;

var correct_sound = new Audio('Correct_Sound.mp3');
var wrong_Sound = new Audio('Wrong_sound.mp3');
//window.sessionStorage.setItem("cityPhotos", JSON.stringify(cityPhotos)) || "";

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
                "You've got to get up every morning with determination if you're going to go to bed with satisfaction. — George Lorimer"];

//global variables
    //people can add more cities if need be
    /*
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
                "https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg"];*/

    const cities =  ["Toronto", "New York", "Tokyo", "Paris", "Montreal", "Delhi", "Seoul", "SÃo Paulo", "Mexico City", "Buenos Aires", "Shanghai", "Mumbai", "Vancouver", "Dubai", "Sydney", "Melbourne", "Hanoi", "Chicago", "Cape Town", "Tel Aviv", "Athens", "Lisbon", "Caracas", "Bogota", "Taipei", "Perth", "Auckland", "Calgary", "Quebec City", "Nice", "Bejing", "los Angeles", "Cairo", "London", "Houston", "San Francisco", "Orlando", "Miami", "Hong Kong", "Barcelona", "Madrid", "Manila", "Istanbul", "Rio De Janeiro", "Moscow", "Lima", "Bangkok", "Saint Petersburg", "Rome", "Venice"];
    //the aspect ratio should be a good quality and the postion of the array element corrseponds to the cites at the top
    const citiesPhotos = ["https://upload.wikimedia.org/wikipedia/commons/6/65/Toronto_Skyline_Summer_2020.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg/1200px-View_of_Empire_State_Building_from_Rockefeller_Center_New_York_City_dllu.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg",
                "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900",
                "https://upload.wikimedia.org/wikipedia/commons/2/2c/Montreal_-_QC_-_Skyline.jpg",
                "https://cdn.britannica.com/37/189837-050-F0AF383E/New-Delhi-India-War-Memorial-arch-Sir.jpg",
                "https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg",
                "https://cdn.britannica.com/54/101754-050-3FA9B4A0/Downtown-Sao-Paulo.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg/1200px-Sobrevuelos_CDMX_HJ2A4913_%2825514321687%29_%28cropped%29.jpg",
                "https://lp-cms-production.imgix.net/2019-06/4c410251e0146b2edd2b8b1d64a02047-buenos-aires.jpg",
                "https://i.natgeofe.com/n/302104d1-7616-4ba2-8fa4-316a96b9d718/shanghai_travel.jpg",
                "https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg",
                "http://res.cloudinary.com/simpleview/image/upload/v1589990523/clients/vancouverbc/Vancouver_Aerial_2017_1__72115131-4a31-42dc-b369-7a5ccec8273f.jpg",
                "https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg",
                "https://i.natgeofe.com/n/5c32242b-830e-449b-8e27-88f242ebbeb4/sydney-travel_16x9.jpg",
                "https://www.travelandleisure.com/thmb/2dm9PhvurpcG5g3D2r1Heq0wUsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/melbourne-australia-MELBOURNETG0721-62ff9ae2570945ec80160ddf46ee7cb1.jpg",
                "https://media.timeout.com/images/105241454/image.jpg",
                "https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-05/2af94a274ebf7f6716f9b2068595581c.jpeg?h=a98222f4&itok=o5jaY4kH",
                "https://scontent-fra5-2.cdninstagram.com/v/t51.29350-15/314733579_701502298076891_7415407995522984990_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=y8IvAysbMqoAX_O1muz&_nc_ht=scontent-fra5-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfDAGIL2pGVnFQlo1yr3ZuY6bgaXHZHaxxtPCj57hUMDhA&oe=638E5A4E",
                "https://static.timesofisrael.com/www/uploads/2020/02/Untitled-4-6.jpg",
                "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg",
                "https://images.thestar.com/AjM8npQm6Orzy43RmIfhdfrzgiI=/1086x724/smart/filters:cb(1655384062223):format(webp)/https://www.thestar.com/content/dam/thestar/life/travel/2022/06/17/where-to-go-in-lisbon-portugal-five-unique-gems-in-the-city-from-a-beautiful-new-museum-to-a-quirky-speakeasy/lisbon_portugal_credit_sean3810_istock.jpg",
                "https://planetofhotels.com/guide/sites/default/files/styles/big_gallery_image/public/text_gallery/CARACAS-1.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/4/4c/Centro_internacional.JPG",
                "https://lp-cms-production.imgix.net/2019-06/f15f7b57ab31c217f471c6712a2654e0-taipei-101.jpg",
                "https://content.r9cdn.net/rimg/dimg/ba/de/deacb4c5-city-11563-17a3ef27550.jpg?width=1366&height=768&xhint=4145&yhint=2485&crop=true",
                "https://media.timeout.com/images/105906099/image.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/9/92/Downtown_Calgary_2020-2.jpg",
                "https://a.cdn-hotels.com/gdcs/production69/d1733/3cfa8c91-8090-4409-8b2e-a70e7dde33d7.jpg",
                "https://lp-cms-production.imgix.net/2019-06/3cb45f6e59190e8213ce0a35394d0e11-nice.jpg",
                "https://www.tripsavvy.com/thmb/Vj0ijS1KJj_uYl7ETYDF3HZ5dRg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beijing-central-business-district-buildings-skyline--china-cityscape-477749918-ddee5166b7474fd881b53f87244cc6d2.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
                "https://cdn.britannica.com/46/189746-050-C790AE3F/Skyline-Cairo.jpg",
                "https://media.gq-magazine.co.uk/photos/5d13992e4858d32b28005197/16:9/w_2560%2Cc_limit/London-GQ-13Jan16_Istock_b.jpg",
                "https://www.visittheusa.com/sites/default/files/styles/16_9_1280x720/public/2016-10/0%20HERO_HoustonTX_GettyImages-532390052_0.jpg?h=c5520b1b&itok=QYZzO_gS",
                "https://upload.wikimedia.org/wikipedia/commons/6/61/San_Francisco_from_the_Marin_Headlands_in_August_2022.jpg",
                "https://a.cdn-hotels.com/gdcs/production138/d1647/c1cab211-33d5-4210-b00e-47d627e80c12.jpg",
                "https://i.natgeofe.com/n/5de6e34a-d550-4358-b7ef-4d79a09c680e/aerial-beach-miami-florida_16x9.jpg",
                "https://www.business.hsbc.com/-/media/cmb/international-business-guide/hk/images/doing-business-hongkong.jpg?h=961&w=1440&la=en-GB&hash=58C2D49B6CB7D83991A7B683E4D802CC",
                "https://digital.ihg.com/is/image/ihg/kimpton-barcelona-1700x750-v2",
                "https://content.r9cdn.net/rimg/dimg/5f/38/353ec907-ap-MAD-551b0685.jpg?width=1366&height=768&xhint=826&yhint=409&crop=true",
                "https://cdn.britannica.com/81/196781-050-CA29F2C8/Manila.jpg",
                "https://www.cuddlynest.com/blog/wp-content/uploads/2022/10/day-trips-from-istanbul-scaled.jpg",
                "https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg",
                "https://upload.wikimedia.org/wikipedia/commons/8/85/Saint_Basil%27s_Cathedral_and_the_Red_Square.jpg",
                "https://i0.wp.com/roadsandkingdoms.com/uploads/2019/05/shutterstock_1047718252.jpg?w=2400&quality=95&strip=color&ssl=1",
                "https://www.ask.com/wp-content/uploads/sites/3/2022/04/The-Grand-Palace-of-Bangkok.jpg",
                "https://cdn.britannica.com/42/178442-050-417FEC6F/Cathedral-of-the-Resurrection-Christ-St-Petersburg.jpg",
                "https://media.timeout.com/images/105211701/image.jpg",
                "https://www.travelandleisure.com/thmb/ubTOmrdr85740HVyLq_nGhinVWE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/venice-italy-VENICETG0521-cddab02114ae44f08ba49c8c3fc9158c.jpg"
            ];


//function commenting later
function initalize(){
    

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


    loadingPhoto.src = "https://flevix.com/wp-content/uploads/2019/12/Barline-Loading-Images-1.gif";

    loading(loadingText, copyCityphotos, allQuotes, randomNum, randomNum2);
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
            var tmp = 0;

            randomNum = Math.floor(Math.random() * copyCityphotos.length);

            for(var i = 0; i < previous.length; i++){

                if(previous[i] != randomNum){
                }

                else if(previous[i] == randomNum){
                    tmp++;
                }

            }
            
        }while (tmp != 0);

        //alert(randomNum);
        
        previous.push(randomNum);

        cityPhoto.src = copyCityphotos[randomNum];

        do{

            var tmp = 0;
            randomNum2 = Math.floor(Math.random() * allQuotes.length);

            for(var i = 0; i < previous2.length; i++){

                if(previous2[i] != randomNum2){
                          
                }

                else if(previous2[i] == randomNum2){
                    tmp++;
                }
            }
            
        }while (tmp != 0);

        previous2.push(randomNum2);
        
        newQuote.value = allQuotes[randomNum2];

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

    if(!alert("The game has finished loading!")) document.location = 'WDB_Gameplay.html';

}
function randomPhoto(){
    

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("img").src = citiesPhotos[randomNum];

}

function randomQuote(){

    var randomNum = Math.floor(Math.random() * 10);
    var newPhoto = document.getElementById("quote").vaule = quotes[randomNum];

} 

function randomImage(){

    var copyCityphotos = citiesPhotos;
    var cityPhoto = document.getElementById("photo");
    var array = JSON.parse(sessionStorage.getItem("citiesPhotos_")) || [];

    if(array.length == 50){
        if(!alert("You have run out of cities! Please close the page and restart! But you can see your score for the session first!")) return document.location = 'WDB_EndScreen.html';
    }

    if(array.length == 0 || playAgain == -1){

        do{
            
            var rightNumber = false;
            var userInput = parseInt(prompt("How many cites would you like to guess? (You can guess from 1 to 50 cities at a time.)"));

            if(userInput < 0){
                alert("You entered a negative number try again.");
            }

            else if(userInput > 50){
                alert("We don't have that many cities.");
            }

            else if(userInput == null){
                alert("You need to enter in a number!");
            }

            else if(userInput > 0 && userInput < 51){
                rightNumber = true;
            }
            else{
                alert("Thats not a number!");
            }
        

        }while(!(rightNumber))

        count = userInput -1;

        sessionStorage .setItem('playAgain', 0);

    }


    do{
        var tmp = 0;
        var randomNum = Math.floor(Math.random() * copyCityphotos.length);

        for(var i = 0; i < copyCityphotos.length; i++){
                
            for(var j = 0; j < array.length; j++){
;
                if(array[j].includes(copyCityphotos[randomNum])){
                    tmp++;
                    break
                    }
              }
        }
    }while (tmp != 0); 

    cityPhoto.src = copyCityphotos[randomNum];

    array.push(copyCityphotos[randomNum]);

    sessionStorage.setItem("citiesPhotos_", JSON.stringify(array));

    console.log(array);
}

function guess(){

    var copyCityphotos = citiesPhotos;
    var location = document.getElementById("photo").src;

    sessionStorage .setItem('guessCounter', count - 1);

    for(var i = 0; i < copyCityphotos.length; i++){
        if(location == copyCityphotos[i]){
            randomNum = [i]
        }
    }
    var cityName = cities[randomNum];

    var guess = document.getElementById("answer_Text").value.toLowerCase();

    if(guess == cityName.toLowerCase()){
        if (mute == false)
        {
            correct_sound.play();
        }
        alert("Correct! the answer was " + cityName + ".");
        sessionStorage .setItem('globalScore', score + 5);
      
    }

    else{
        if (mute == false)
        {
            wrong_Sound.play();
        }
        alert("Wrong city, the answer was " + cityName + ".");
    
    }

    window.location.reload();

    if (count == 0){
       if(!alert("Here are the results!")) document.location = 'WDB_EndScreen.html';
    }

}

function finalScore(){
    var finalScore = document.getElementById("score");
    finalScore.innerText += score;
    sessionStorage .setItem('playAgain',  -1);
}

function FullscreenHelp(){
    alert("To Go Fullscreen, Press F11.")
}

function muted(){
    alert("Game is now muted! To unmute click Un-mute.")
}
function unmute(){
    alert("Game is now unmuted! To mute click Un-mute.")
}



$('#mute-button').on('click', function(){

    $('audio,video').each(function(){
       $(this).volume = 0.0;
    });

});

$('un#mute-button').on('click', function(){

    $('audio,video').each(function(){
       $(this).volume = 1.0;
    });

});
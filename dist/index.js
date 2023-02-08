

const API_KEY = "524d5bfd93164efbb54eea8c1847c051"
const BUSINESS_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=business&apiKey=524d5bfd93164efbb54eea8c1847c051"
const GENERAL_URL= "https://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=524d5bfd93164efbb54eea8c1847c051"
const TECHNOLOGY_URL= "https://newsapi.org/v2/top-headlines?country=tr&category=technology&apiKey=524d5bfd93164efbb54eea8c1847c051"
const SPORT_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=sport&apiKey=524d5bfd93164efbb54eea8c1847c051"
const ENTERTAINMENT_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&apiKey=524d5bfd93164efbb54eea8c1847c051"

const sportBtn= document.getElementById("sport");
const homeBtn = document.getElementById("homePage");



var newsDataArr = [];
var businessDataArr = [];
var generalDataArr = [];
var technologyDataArr = [];
var sportDataArr = [];
var entertainmentDataArr = [];

const newsDetailsBusiness = document.getElementById("newsDetailsBusiness");


/*fetch(url).then(
    response => {
        return response.json()
    }
).then(responseJson =>{
    console.log(responseJson)
    displayNews();
})
*/

homeBtn.addEventListener("click",function(){
   // newsType.innerHTML="<h4>Business news</h4>";
    fetchBusinessNews();
    fetchTurkeyNews();
    fetchEntertainmentNews();
    fetchSportNews();
    fetchTechnologyNews();
});


sportBtn.addEventListener("click", function(){
    newsType.innerHTML="<h4>Sport news</h4>";
    fetchSportNews();
} );



const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_URL);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
     
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetailsBusiness.innerHTML = "<h5>No data found.</h5>"
        return;
       
    }

    displayNews();
}

const fetchTurkeyNews = async () => {
    const response = await fetch(GENERAL_URL);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
     
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetailsTurkey.innerHTML = "<h5>No data found.</h5>"
        return;
       
    }

    displayNews();
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_URL);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
     
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetailsTechnology.innerHTML = "<h5>No data found.</h5>"
        return;
       
    }

    displayNews();
}

const fetchSportNews = async () => {
    const response = await fetch(SPORT_URL);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
     
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
       
    }

    displayNews();
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_URL);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
     
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
       
    }

    displayNews();
}



function displayNews() {

   

        newsDataArr.forEach(news => {

        var date = news.publishedAt.split("T");

        var col = document.createElement('div');
        col.className="row-span-1 ... border border-gray-900 bg-blue-800 shadow-xl shadow-blue-500/50";

        var image = document.createElement('img');
        image.className ="w-full h-full ";
        image.src=news.urlToImage;

        var newsAuthor = document.createElement('div');
        newsAuthor.className ="pt-0.5 pl-5 pb-0  font-medium text-red-600";
        newsAuthor.innerHTML = news.author;

        var card = document.createElement('div');
        card.className = "w-64";

        var cardBody = document.createElement('div');

        var newsHeading = document.createElement('h5');
        newsHeading.className = "pt-0.5 pl-7 pb-0  font-medium";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "w-64";
        dateHeading.innerHTML = date[0];

        var description = document.createElement('p');
        description.className="pt-0.5 pl-8 pb-1 font-light";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

            /*
        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";
            */
        
        cardBody.appendChild(newsAuthor);
        cardBody.appendChild(newsHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetailsBusiness.appendChild(col);

    });




}
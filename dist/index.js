

const API_KEY = "97ac60f3bcf9482380eaea05ed713d3f"
const BUSINESS_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=business&?page=1&pageSize=2&apiKey=97ac60f3bcf9482380eaea05ed713d3f"
const GENERAL_URL= "https://newsapi.org/v2/top-headlines?country=tr&category=general&?page=1&pageSize=2&apiKey=97ac60f3bcf9482380eaea05ed713d3f"
const TECHNOLOGY_URL= "https://newsapi.org/v2/top-headlines?country=tr&category=technology&?page=1&pageSize=1&apiKey=97ac60f3bcf9482380eaea05ed713d3f"
const SPORT_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=sport&?page=1&pageSize=1&apiKey=97ac60f3bcf9482380eaea05ed713d3f"
const ENTERTAINMENT_URL = "https://newsapi.org/v2/top-headlines?country=tr&category=entertainment&?page=1&pageSize=1&apiKey=97ac60f3bcf9482380eaea05ed713d3f"

const homeBtn = document.getElementById("homePage");

const businessCard = document.getElementById("businessCard");
const turkeyCard = document.getElementById("turkeyCard");
const technologyCard =document.getElementById("technologyCard");
const sportCard= document.getElementById("sportCard");
const entertainmentCard= document.getElementById("entertainmentCard");


homeBtn.addEventListener("click",function(){
   // newsType.innerHTML="<h4>Business news</h4>";
    
    
});

// 1. habere basınca detaylar geliyor diğerlerinde url hatası veriyor.
// detay sayfasındaki haberin orjinal kaynağını gösteren link çalışmıyor
// desing hataları
//... 


async function displayBusinessNews(){
    await fetch(BUSINESS_URL)
        .then(d => d.json())
        .then(response => {
            console.log(response.articles);

            for(var i = 0;i < response.articles.length; i++){
                console.log(response.articles[i].title)
                console.log(response.articles[i].urlToImage)

                const output = document.getElementById('businessCard');

                try{

                 
                    businessCard.innerHTML += `
                    <div id="card" class="mt-6 xl:gap-x-8">
                        <div id="card-body" class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img " class="rounded-t-lg px-5 py-2" src="${response.articles[i].urlToImage}"/>
                            
                            <div class="p-5">
                                <a href="#" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <h5 id="title" >${response.articles[i].title}</h5>    
                                </a>
                                <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                <h5>${response.articles[i].author}</h5>
                                </div>
                                    <div id="card-text">
                                    <p class="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">${response.articles[i].description}</p>
                               
                                     <a onclick="window.location.href='news-details.html?title=${encodeURIComponent(response.articles[i].title)}&description=${encodeURIComponent(response.articles[i].description)}&url=${encodeURIComponent(response.articles[i].url)}&img=${encodeURIComponent(response.articles[i].urlToImage)}'" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                     Read more
                                      </a>
                                    </div>
                               
                            </div>   
                         </div>
                    </div>    
                
                
                `
                    
                }catch(err){
                    console.log(err);
                }

            }

        })
 
}


displayBusinessNews()


async function displayTurkeyNews(){
    await fetch(GENERAL_URL)
        .then(d => d.json())
        .then(response => {
            console.log(response.articles);

            for(var i = 0;i < response.articles.length; i++){
                console.log(response.articles[i].title)
                console.log(response.articles[i].urlToImage)

                const output = document.getElementById('turkeyCard');

               

                try{

                 
                    turkeyCard.innerHTML += `
                    <div id="card" class="mt-6 xl:gap-x-8">
                        <div id="card-body" class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg px-5 py-2" src="${response.articles[i].urlToImage}"/>
                            
                            <div class="p-5">
                                <a href="#" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <h5>${response.articles[i].title}</h5>    
                                </a>
                                <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                <h5>${response.articles[i].author}</h5>
                                </div>
                                <div id="card-text">
                                <p class="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">${response.articles[i].description}</p>
                           
                                 <a onclick="window.location.href='news-details.html?title=${encodeURIComponent(response.articles[i].title)}&description=${encodeURIComponent(response.articles[i].description)}&url=${encodeURIComponent(response.articles[i].url)}&img=${encodeURIComponent(response.articles[i].urlToImage)}'" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                  </a>
                                </div>
                               
                            </div>   
                         </div>
                    </div>    
                
                
                `
                    
                }catch(err){
                    console.log(err);
                }

            }

        })
 
}

displayTurkeyNews()

async function displayTechnologyNews(){
    await fetch(TECHNOLOGY_URL)
        .then(d => d.json())
        .then(response => {
            console.log(response.articles);

            for(var i = 0;i < response.articles.length; i++){
                console.log(response.articles[i].title)
                console.log(response.articles[i].urlToImage)

                const output = document.getElementById('technologyCard');

               

                try{

                   
                    technologyCard.innerHTML += `
                    <div id="card" class="mt-6 xl:gap-x-8">
                        <div id="card-body" class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg px-5 py-2" src="${response.articles[i].urlToImage}"/>
                            
                            <div class="p-5">
                                <a href="#" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <h5>${response.articles[i].title}</h5>    
                                </a>
                                <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                <h5>${response.articles[i].author}</h5>
                                </div>
                                <div id="card-text">
                                <p class="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">${response.articles[i].description}</p>
                           
                                 <a onclick="window.location.href='news-details.html?title=${encodeURIComponent(response.articles[i].title)}&description=${encodeURIComponent(response.articles[i].description)}&url=${encodeURIComponent(response.articles[i].url)}&img=${encodeURIComponent(response.articles[i].urlToImage)}'" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                  </a>
                                </div>
                               
                            </div>   
                         </div>
                    </div>    
                
                
                `
                    
                }catch(err){
                    console.log(err);
                }

            }

        })
 
}

displayTechnologyNews();

async function displaySportNews(){
    await fetch(SPORT_URL)
        .then(d => d.json())
        .then(response => {
            console.log(response.articles);

            for(var i = 0;i < response.articles.length; i++){
                console.log(response.articles[i].title)
                console.log(response.articles[i].urlToImage)

                const output = document.getElementById('sportCard');

               

                try{

                   
                    sportCard.innerHTML += `
                    <div id="card" class="mt-6 xl:gap-x-8"">
                        <div id="card-body" class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg px-5 py-2" src="${response.articles[i].urlToImage}"/>
                            
                            <div class="p-5">
                                <a href="#" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <h5>${response.articles[i].title}</h5>    
                                </a>
                                <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                <h5>${response.articles[i].author}</h5>
                                </div>
                                <div id="card-text">
                                <p class="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">${response.articles[i].description}</p>
                           
                                 <a onclick="window.location.href='news-details.html?title=${encodeURIComponent(response.articles[i].title)}&description=${encodeURIComponent(response.articles[i].description)}&url=${encodeURIComponent(response.articles[i].url)}&img=${encodeURIComponent(response.articles[i].urlToImage)}'" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                  </a>
                                </div>
                         </div>
                    </div>    
                
                
                `
                    
                }catch(err){
                    console.log(err);
                }

            }

        })
 
}

displaySportNews();

async function displayEntertainmentNews(){
    await fetch(ENTERTAINMENT_URL)
        .then(d => d.json())
        .then(response => {
            console.log(response.articles);

            for(var i = 0;i < response.articles.length; i++){
                console.log(response.articles[i].title)
                console.log(response.articles[i].urlToImage)

                const output = document.getElementById('entertainmentCard');

                try{

                  
                    entertainmentCard.innerHTML += `
                    <div id="card" class="mt-6 xl:gap-x-8"">
                        <div id="card-body" class="max-w-xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                            <img class="rounded-t-lg px-5 py-2" src="${response.articles[i].urlToImage}"/>
                            
                            <div class="p-5">
                                <a href="#" class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                <h5>${response.articles[i].title}</h5>    
                                </a>
                                <div class="text-xs font-bold uppercase text-teal-700 mt-1 mb-2">
                                <h5>${response.articles[i].author}</h5>
                                </div>
                                <div id="card-text">
                                <p class="line-clamp-2 mb-3 font-normal text-gray-700 dark:text-gray-400">${response.articles[i].description}</p>
                           
                                 <a onclick="window.location.href='news-details.html?title=${encodeURIComponent(response.articles[i].title)}&description=${encodeURIComponent(response.articles[i].description)}&url=${encodeURIComponent(response.articles[i].url)}&img=${encodeURIComponent(response.articles[i].urlToImage)}'" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                 Read more
                                  </a>
                                </div>
                               
                            </div>   
                         </div>
                    </div>    
                
                
                `
                    
                }catch(err){
                    console.log(err);
                }

            }

        })
 
}

displayEntertainmentNews();



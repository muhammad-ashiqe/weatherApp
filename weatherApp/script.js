

let search = document.querySelector('.searchBar').value;

const apiKey = "3a38884f2e9cf4d25c3b192191de09a4"

const urlWeather= `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`

let searchBar = document.querySelector('.searchBar');
let searchBtn = document.querySelector('.searchBtn');
let weatherIcon =document.querySelector('.weatherIcon');

async function checkWether(city){
    const response = await fetch(urlWeather + city +`&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector('.error').style.display ="block";
        document.querySelector('.weather').style.display ="none";

    }
    else{
        
    let data = await response.json();

    // console.log(data);
    let cityName =document.querySelector('.city').innerHTML=data.name;
    let temp = document.querySelector('.temp').innerHTML = data.main.temp + "°C";
    let humidity = document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    let wind = document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main === "Clouds"){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src="images/mist.png"
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src="images/snow.png"
    }

    
    document.querySelector('.weather').style.display="block"
    document.querySelector('.error').style.display="none"
    }


}


// console.log(search)


searchBtn.addEventListener('click',()=>{
    checkWether(searchBar.value);

})

//api quest
const api = 
{
    key:"8f702fc5007e2829706d3be0724bb7d2",
    url:"https://api.openweathermap.org/data/2.5/weather"
}

//variables
const body = document.querySelector('#body');
const boxSearch = document.querySelector('#boxSearch');
const search = document.querySelector('.searchBox');
const city = document.querySelector('.city');
var date = document.querySelector('.date');
var temp = document.querySelector('.temp');
var weather = document.querySelector('.weather');
var hi = document.querySelector('.hi');
var low = document.querySelector('.low');
var hour = document.querySelector('.hour');
var img = document.querySelector('.app-wrap');


const fecha = new Date();

var dia = fecha.toDateString();


//declarar la api
boxSearch.addEventListener('submit', onSubmit);
async function apiSearch(query)
{
    try
    {
        const response = await fetch(`${api.url}?q=${query}&appid=${api.key}&lang=es `);
        const data = await response.json();
        city.innerHTML = `${data.name}, ${data.sys.country}`;
        date.innerHTML = `${dia}`;
        temp.innerHTML = `${celsius(data.main.temp)} ºC`;
        weather.innerHTML = data.weather[0].description;
        hi.innerHTML = `min: ${celsius(data.main.temp_min)} ºC`;
        low.innerHTML = `max: ${celsius(data.main.temp_max)} ºC`;
        updateImage(data);
        console.log(data);
    }
    catch(error)
    {
        console.log(error);
        alert("hubo un error");
    }
}


//funciones
function onSubmit(e)
{
    e.preventDefault();
    apiSearch(search.value);
    alert(search.value);
}

function celsius(kelvin)
{
    return Math.round(kelvin - 273.15);
}

function updateImage(data)
{
    const temperature = celsius(data.main.temp);
    if(temperature <= 10)
    {
        body.style.background = "url(./assets/inviernoNoche.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        img.style.background = "url(./assets/inviernoDia.jpeg)";
        temp.style.color ="red";
        weather.style.color ="red";
        date.style.color ="red";
        city.style.color ="red";
        hi.style.color ="red";
        low.style.color ="red";

        console.log('invierno');
    }
    else if(temperature <= 17)
    {
        body.style.background = "url(./assets/otoñoNoche.jpg)";
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        img.style.background = "url(./assets/fondo.png)";
        temp.style.color ="wheat";
        weather.style.color ="wheat";
        date.style.color ="wheat";
        city.style.color ="wheat";
        hi.style.color ="wheat";
        low.style.color ="wheat";
        console.log('otoño');

    }
    else if(temperature <= 25)
    {
        body.style.background = "url(./assets/primaveraDia.jpg)"
        body.style.backgroundSize = "cover";
        body.style.backgroundRepeat = "no-repeat";
        img.style.background = "url(./assets/primaveraNoche.jpg)";
        img.style.backgroundSize = "cover";
        img.style.backgroundRepeat = "no-repeat";
        temp.style.color ="wheat";
        weather.style.color ="wheat";
        date.style.color ="wheat";
        city.style.color ="wheat";
        hi.style.color ="wheat";
        low.style.color ="wheat";
        console.log('primavera');
    }
    else if(temperature >= 26)
    {
        body.style.background = "url(./assets/veranoNoche.jpg)"
        img.style.background = "url(./assets/veranoDia.png)";
        img.style.backgroundSize = "cover";
        img.style.backgroundRepeat = "no-repeat";
        temp.style.color ="tomato";
        weather.style.color ="blue";
        date.style.color ="tomato";
        city.style.color ="blue";
        hi.style.color ="blue";
        low.style.color ="blue";
        console.log('verano');
    }
    return 
}





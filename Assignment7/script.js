const button = document.querySelector('#submitBtn');
const input = document.querySelector('#city-input');
const cityname = document.querySelector('#city-name');
const countryname = document.querySelector('#country-name');
console.log(countryname)
const date = document.querySelector('#date');
const temp = document.querySelector('#temp-display');
const description = document.querySelector('#weather-visibilty');
const max = document.querySelector('#min');
const min = document.querySelector('#max');
const weatherDispl = document.querySelector('#weather-data-container');


button.addEventListener('click',function(e){
    e.preventDefault();
    const inputCity = input.value;
    console.log(inputCity);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=068fdac74c4e7f62f6bd63310af16e9c`)
    .then((response) => response.json())
    .then((data)=> {
        console.log(data);
        const nameVal= data['name'];
        const countryVal = data.sys.country;
        const tempVal = data.main.temp;
        const descriptionVal = data.weather[0].description;
        const minTempVal = data.main.temp_min;
        const maxTempVal = data.main.temp_max;

        cityname.textContent = nameVal;
        countryname.textContent = countryVal;
        temp.textContent = tempVal;
        description.textContent = descriptionVal;
        max.textContent = maxTempVal;
        min.textContent = minTempVal;

        weatherDispl.style.display ="block";


    })
    .catch((error) =>{
        console.log(error);
        alert("Entered Wrong city");
        weatherDispl.style.display ="none";
    } );
    input.value = "";

});

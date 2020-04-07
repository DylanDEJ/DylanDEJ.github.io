let nasa = 'https://api.nasa.gov/planetary/apod?api_key=fv541Y3ZPVfxftErB0gKMgOn39ZBHB9cn2s47cbU'

fetch(nasa)

.then(function(nasaresponse) {
    return nasaresponse.json();
})

.then(function(nasaresponse){
    console.log(nasaresponse);
    document.getElementById("datum").innerHTML = nasaresponse.date;
    document.getElementById("ruimte").style.backgroundImage = "url(" + nasaresponse.hdurl + ")";
})

let weather = 'https://api.openweathermap.org/data/2.5/weather?q=chile&appid=284bcb1291d51383a786521c08d4a6e6'

fetch(weather)

.then(function(weatherresponse) {
    return weatherresponse.json();
})

.then(function(weatherresponse){
    console.log(weatherresponse);
    document.getElementById("temp-nummer").innerHTML = weatherresponse.main.temp;
    document.getElementById("wind-nummer").innerHTML = weatherresponse.wind.speed;
    document.getElementById("wolken-nummer").innerHTML = weatherresponse.clouds.all;

    if(weatherresponse.main.temp < 300) {
        document.getElementById("temp").style.color = "#1B998B"
    }
    else {
        document.getElementById("temp").style.color = "#E84855"
    }

    if(weatherresponse.wind.speed < 8) {
        document.getElementById("wind").style.color = "#1B998B"
    }
    else {
        document.getElementById("wind").style.color = "#E84855"
    }

    if(weatherresponse.clouds.all < 80) {
        document.getElementById("wolken").style.color = "#1B998B"
    }
    else {
        document.getElementById("wolken").style.color = "#E84855"
    }


    if(weatherresponse.main.temp < 300 && weatherresponse.wind.speed < 8 && weatherresponse.clouds.all < 80) {
        document.getElementById("fout").classList.add("hidden");
        document.getElementById("fout-beschrijving").classList.add("hidden");
    }
    else {
        document.getElementById("goed").classList.add("hidden");
        document.getElementById("goed-beschrijving").classList.add("hidden");
    }
})

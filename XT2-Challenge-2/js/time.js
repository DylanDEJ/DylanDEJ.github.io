let datum = document.getElementById("datum")
let digital = document.getElementById("digitaal");


let statusText = document.getElementById("statustekst");

let ontbijtFase = document.getElementById("ontbijten");
let vrijetijdFase = document.getElementById("vrijetijd");
let avondetenFase = document.getElementById("avondeten");
let slapenFase = document.getElementById("slapen");

function current() {
    let date = new Date();

    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let year = date.getFullYear();

    datum.innerHTML = day + '/' + month + '/' + year;

    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    hour = update(hour);
    minute = update(minute);
    second = update(second);

    digital.innerHTML = hour + " : " + minute + " : " + second;
    var time = setTimeout(function(){ current() }, 1000);

    if(hour >= 8 && hour <= 11){
        slapenFase.style.fill = "transparent";
        ontbijtFase.style.fill = "#045185";
        statusText.innerHTML = "Ontbijt";
    }
    else if(hour >= 12 && hour <= 17){
        ontbijtFase.style.fill = "transparent";
        vrijetijdFase.style.fill = "#045185";
        statusText.innerHTML = "Vrije Tijd";
    }
    else if(hour >= 18 && hour <= 21){
        vrijetijdFase.style.fill = "transparent";
        avondetenFase.style.fill = "#045185";
        statusText.innerHTML = "Avond Eten";
    }  
    else {
        avondetenFase.style.fill = "transparent";
        slapenFase.style.fill = "#045185";
        statusText.innerHTML = "Slapen";
    }

    change(second)
}

function update(t) {
    if (t < 10) {
        return "0" + t;
      }
      else {
        return t;
      }
}

function change(s){
    if (s >= 00 && s <= 01){
        digital.classList.add('verandering-digitaal');
        document.getElementsByTagName('body')[0].classList.add('verandering-body');
    }
    else {
        digital.classList.remove('verandering-digitaal');
        document.getElementsByTagName('body')[0].classList.remove('verandering-body');
    }
}

current()





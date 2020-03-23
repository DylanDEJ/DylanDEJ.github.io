let participantChart = document.getElementById('participantChart').getContext('2d')
let activityChart = document.getElementById('activityChart').getContext('2d')
let signChart = document.getElementById('signChart').getContext('2d')

Chart.defaults.global.defaultFontColor = '#252525'
Chart.defaults.global.defaultFontFamily = 'Oxanium';


function random() {
    return Math.floor(Math.random() * 20) + 1;
};

function sortNumber(a, b) {
        return b - a;
};

let numArray = [random(),random(),random(),random(),random()];
numArray.sort(sortNumber);


function getTime(hour){
    var date = new Date();
    if(date.getHours() + hour >= 24){
        return "0" + hour + ":00"
    }
    else{
        return date.getHours() + hour + ":00";
    }
}


let currentParticipantChart = new Chart(participantChart, {
    type:'pie',
    data:{
        labels:['Kartbaan', 'Lasergamen', 'Escaperoom', 'Bioscoop', 'Voetballen','Hockey','Pool','Dansles'],
        datasets:[{
            label:'Actuele deelnemers',
            data:[
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random(),
            random()
            ],
            backgroundColor:[
                '#1ab967',
                '#e94040',
                '#8560a8',
                '#252525',
                '#c7b299',
                '#0072bc',
                '#f68e56',
                '#6dcff6'
            ]
        }]
    },
    
    options:{
        title:{
            display: true,
            text: 'Actuele Deelnemers',
            fontSize: 20
        },
        legend:{
            position: 'left'
        }
    }
})

let topActivityChart = new Chart(activityChart, {
    type:'bar',
    data:{
        labels:['Kartbaan', 'Lasergamen', 'Escaperoom', 'Bioscoop', 'Voetballen'],
        datasets:[{
            label:'Activiteiten',
            data:numArray.sort(sortNumber),
            backgroundColor:[
                '#1ab967',
                '#e94040',
                '#8560a8',
                '#252525',
                '#c7b299'
            ]
            }]
    },
    
    options:{
        title:{
            display: true,
            text: 'Top 5 activeiten gekozen door passagiers',
            fontSize: 20
        },
        legend: {
            display: false
        }
    }
})

let signActivityChart  = new Chart(signChart, {
    type: 'line',
    data: {
        labels:[getTime(0), getTime(1), getTime(2), getTime(3), getTime(4)],
        datasets:[
        {
            label:'Kartbaan',
            lineTension: 0,
            borderColor: '#1ab967',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Lasergamen',
            lineTension: 0,
            borderColor: '#e94040',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false    
        },
        {
            label:'Escaperoom',
            lineTension: 0,
            borderColor: '#8560a8',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Bioscoop',
            lineTension: 0,
            borderColor: '#252525',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Voetballen',
            lineTension: 0,
            borderColor: '#c7b299',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Hockey',
            lineTension: 0,
            borderColor: '#0072bc',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Pool',
            lineTension: 0,
            borderColor: '#f68e56',
            data:[           
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        },
        {
            label:'Dansles',
            lineTension: 0,
            borderColor: '#6dcff6',
            data:[            
                random(),
                random(),
                random(),
                random(),
                random()],
            fill: false
        } 
    ]
    },

    options: {
        title:{
            display: true,
            text: 'Aantal inschrijven per activiteit',
            fontSize: 20
        },
        legend: {
            align: 'center',
        }
        
    }
})
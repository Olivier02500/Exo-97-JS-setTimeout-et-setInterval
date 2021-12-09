let timeOut = document.getElementById('timeout');

timeOut.addEventListener('click' ,function (){
    setTimeout(function (){
        let div = document.createElement('div');
        let timeOutDiv = document.getElementById('timeout-div');
        div.style.backgroundColor = 'purple';
        div.style.color = 'yellow'
        timeOutDiv.appendChild(div).innerHTML ="Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
    },2000)
})

//parti 2
let intervalStart = document.getElementById('interval-start');
let intervalStop = document.getElementById('interval-stop');
let intervalDiv = document.getElementById('interval-div');
let count = 0;

intervalStart.addEventListener('click', function (){
    let intervalId = setInterval(function (){
        if (count < 60){
            count++;
            intervalDiv.innerHTML = "vous êtes a " + count + " s" ;
        }
        else {
            clearInterval(intervalId);
        }
        intervalStop.addEventListener('click' ,function (){
            clearInterval(intervalId);
        })
    },1000)
})
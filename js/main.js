let digital = document.querySelector("#digitalWatch");
let id = 0;

document.getElementById('local').innerText = new Date().toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

for(i = 0; i <= 2; i++){
    let p = document.createElement('p');
    p.id = id++;
    digital.appendChild(p);
}

let time = {};

setInterval(() =>{

    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    time = {
        hour: hours,
        minute: minutes,
        second: seconds
    };

    let elements = digital.querySelectorAll('p');

    elements.forEach((element) =>{

        if(element.id == 0){
            element.innerText = time.hour.toString().padStart(2, '0');
        }
        if(element.id == 1){
            element.innerText = time.minute.toString().padStart(2, '0');
        }
        if(element.id == 2){
            element.innerText = time.second.toString().padStart(2, '0');
        }
    })

    let analogic = document.getElementById("#analogicWatch");
    
    let analogicTime = {
        hour: (hours * 30) + (minutes/2),
        minute: (minutes * 6),
        second: (seconds * 6)
    };
    
    let pHora = document.getElementById("hora");
    let pMinuto = document.getElementById("minuto");
    let pSegundo = document.getElementById("segundo");
    
    pHora.style.transform = `translateX(-50%) rotate(${analogicTime.hour}deg)`;
    
    pMinuto.style.transform = `translateX(-50%) rotate(${analogicTime.minute}deg)`;
    
    pSegundo.style.transform = `translateX(-50%) rotate(${analogicTime.second}deg)`;


}, 100);

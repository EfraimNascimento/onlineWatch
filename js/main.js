
let digital = document.querySelector("#digitalWatch")
let horario = 0

for(i = 0; i <= 2; i++){
    let p = document.createElement('p');
    p.innerText = `${horario++}`
    digital.appendChild(p)

    
}

let elements = digital.querySelectorAll('p');
elements.forEach((element) =>{
    element.innerText 
})

// setInterval(() => {
//     let date = new Date();
    
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();


//     console.log(date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds())
// }, 1000)

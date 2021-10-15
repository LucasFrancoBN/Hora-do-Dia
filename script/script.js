let msg = document.getElementById("msg");
let img = document.getElementById("img")

function loaded() {
    let date = new Date();
    // let hours = date.getHours();
    let hours = 15
    let minutes = date.getMinutes();
    
    msg.innerHTML = `<h3>Agora são ${hours} horas e ${minutes} minutos </h3>`

    if(hours >= 0 && hours < 12) {
        // BOM DIA! 
        img.src = "../assets/manha.png"
        document.body.style.background = "#e7d072"
    } else if (hours > 12 && hours < 18 ) {
        // BOA TARDE! 
        img.src= "../assets/Tarde.png"
        document.body.style.background = "#dbab29"
    } else {
        // BOA NOITE!
        img.src = "../assets/noite.png"
        document.body.style.background = "#0e3561"
    }
}
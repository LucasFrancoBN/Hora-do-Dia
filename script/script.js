let msg = document.getElementById("msg");
let img = document.getElementById("img")

function loaded() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    
    msg.innerHTML = `<h3>Agora são ${hours} horas e ${minutes} minutos </h3>`

    if(hours >= 0 && hours < 12) {
        // BOM DIA! 
        img.src = "./assets/manha.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.4), rgb(0, 0, 0, 0.4)), url(./assets/foto-manha.jpg)";
        document.body.style.backgroundPosition = "center";

    } else if (hours >= 12 && hours < 18 ) {
        // BOA TARDE! 
        img.src= "./assets/Tarde.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.3), rgb(0, 0, 0, 0.3)), url(./assets/natureza.jpg)";
        document.body.style.backgroundPosition = "center";
        
    } else {
        // BOA NOITE!
        img.src = "./assets/noite.png";
        document.body.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.75), rgb(0, 0, 0, 0.75)), url(./assets/ceu-estrelado.jpg)";
        // document.body.style.backgroundPosition = "center";
    }
}

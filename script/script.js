let msg = document.getElementById("msg");
let photo = document.getElementById("photo")

function loaded() {
    let date = new Date();
    // let hours = date.getHours();
    let hours = 7
    let minutes = date.getMinutes();
    
    msg.innerHTML = `<h3>Agora são ${hours} horas e ${minutes} minutos </h3>`

    if(hours >= 0 && hours < 12) {
        // BOM DIA! 
        photo.src = './manha.png'
        document.body.style.background = "#ffe6be"
    } else if (hours > 12 && hours < 18 ) {
        // BOA TARDE! 
        photo.src= 'Tarde.png'
    } else {
        // BOA NOITE!
        photo.src = 'noite.png'
    }
}
    // Dodela tipa goriva
const buttons = document.querySelectorAll('.btn-gorivo')

buttons.forEach(btn => {
    btn.addEventListener('click', setActive)
    btn.addEventListener('click', dodeliGorivo)
});

let gorivo;

function dodeliGorivo(event) {
    if(gorivo != undefined)
        return

    switch(event.target.id){
        case 'benzin':
            gorivo = "benzin"
            break;
        case 'dizel':
            gorivo = "dizel"
            break;
        case 'gas':
            gorivo = "gas"
            break;
    }
}
function setActive(event){
    console.log(gorivo);
    if(gorivo != undefined){
        //Blink na selektovano gorivo
        const targetButton = document.getElementById(gorivo)
        targetButton.classList.add("button_blink")
        window.setInterval(() => {
            targetButton.classList.remove("button_blink")
        }, 250)
    }else
        event.target.classList.add("button-active")
}

    //Uzimanje user inputa i racunanje
const izracunajBtn = document.querySelector(".izracunaj-btn")
const inputKilometraza = document.getElementById("inp-kilometraza")
const inputPotrosnja = document.getElementById("inp-potrosnja")


izracunajBtn.addEventListener('click', calculate)

let kilometraza;
let potrosnja;

function calculate(){
    iscitajVrednosti()

    if(proveraVrednosti(kilometraza, potrosnja) === true){
        //Izracunaj potrosnju
    }else{
        //Greska prilikom unosa vrednosti
    }
}

let iscitajVrednosti = () => {
    kilometraza = inputKilometraza.value;
    potrosnja = inputPotrosnja.value;
}

let proveraVrednosti = (km, po) => {
    if(isNaN(km) || isNaN(po))
        return false
    if(km > 5000)
        return false
    if(potrosnja > 50)
        return false

    return true
}
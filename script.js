    // Dodela tipa goriva
const buttons = document.querySelectorAll('.btn-gorivo')

buttons.forEach(btn => {
    btn.addEventListener('click', dodeliGorivo)
});

var gorivo;

function dodeliGorivo(event) {
    switch(event.target.classList[1]){
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

    //Uzimanje user inputa i racunanje
const izracunajBtn = document.querySelector(".izracunaj-btn")
const inputKilometraza = document.getElementById("inp-kilometraza")
const inputPotrosnja = document.getElementById("inp-potrosnja")

var kilometraza;
var potrosnja;

izracunajBtn.addEventListener('click', calculate)

function calculate(){
    iscitajVrednosti()
}

var iscitajVrednosti = () => {
    kilometraza = inputKilometraza.value;
    potrosnja = inputPotrosnja.value;
}
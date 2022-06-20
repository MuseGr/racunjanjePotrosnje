const buttonsGorivo = document.querySelectorAll('.btn-gorivo')

buttonsGorivo.forEach(btn => {
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
let prosloOdabranoGorivo;

function setActive(event){
    if(prosloOdabranoGorivo === undefined){ // prvo odabrano gorvo
        event.target.classList.add("button-active")
        prosloOdabranoGorivo = event.target.id;
    }else{ // naredna goriva
        //skini active sa proslog
        buttonsGorivo.forEach(element => {
            if(element.id === prosloOdabranoGorivo)
                element.classList.remove("button-active")
        });

        //stavi active na trenutno
        event.target.classList.add("button-active")
        prosloOdabranoGorivo = event.target.id;
    }
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


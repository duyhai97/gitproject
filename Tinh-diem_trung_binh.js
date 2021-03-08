let inputVatly ;
let inputHoahoc ;
let inputSinhhoc ;

inputVatly = prompt("Enter the Vatly");
inputHoahoc = prompt("Enter the Hoahoc");
inputSinhhoc = prompt("Enter the Sinhhoc");

let Vatly = parseInt(inputVatly);
let Hoahoc = parseInt(inputHoahoc);
let Sinhhoc = parseInt(inputSinhhoc);

let average = (Vatly + Hoahoc + Sinhhoc )/3

    document.write("the average is : " + average)
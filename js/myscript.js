/**
 *
 * > Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
> Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

    il prezzo del biglietto è definito in base ai km (0.21 € al km)
    va applicato uno sconto del 20% per i minorenni
    va applicato uno sconto del 40% per gli over 65.
> L'output del prezzo finale va messo fuori in forma umana in pagina (con massimo due decimali, per indicare centesimi sul prezzo).
> Questo richiederà un minimo di ricerca.
 */



// ? chiedo all'utente chilometri ed età li converto da subito con un parseInt() in interi

// ? calcolo il prezzo del biglietto considerando le due condizioni di sconto e una che ne è priva

// ? converto il risultato a due decimali

const distance = parseInt( prompt('Insert the distance of your trip in chilometers'));
const age = parseInt( prompt('Insert the actual age of the traveler'));

let price = distance * 0.21;
let message;

if ( age > 125  || age < 0 || isNaN(age)){
    message = 'You have entered an invalid age!'
    // price = 0;
} else if ( age < 18 ){
    message = 'Since your traveler has less than 18 years old, you have a 20% discount on the final price.'
    price = price - (price * (20 / 100));
} else if ( age >= 65){
    message = 'Since your traveler has more than 65 years old, you have a 40% discount on the final price.'
    price = price - (price * (40 / 100));
} else {
    message = 'Your traveler has received no discounts on the final price.'
}

document.getElementById('output').innerHTML += price.toFixed(2) +'€' + ' ' + message;
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



const journeyLenght = prompt('Quanti chilometri vuoi percorrerre?');

const passengerAge = prompt('Quanti anni hai?');

const price = parseFloat(journeyLenght * 0.21).toFixed(2);
console.log('Il tuo biglietto viene', price,'£');

if (passengerAge < 18) {
    const discount = parseFloat(20 * price / 100).toFixed(2);
    console.log('I minorenni hanno diritto ad uno sconto del 20%, Il tuo biglietto viene', price - discount, '£');
}

if (passengerAge > 65) {
    const discount = parseFloat(40 * price / 100).toFixed(2);
    console.log('Gli over 65 hanno diritto ad uno sconto del 40%, Il tuo biglietto viene', price - discount, '£');
}
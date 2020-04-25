// gioco pari o dispari contro il pc: chiedere all'utente un numero tra 1 e 5 e generare un numero random tra 1 e 5. Chiedere all'utente se sceglie pari o dispari, quindi fare la somma dei due numeri (giocata utente + giocata pc), quindi valutare se il risultato è pari o dispari e comunicare all'utente se ha vinto o meno

// 1 - Chiedere all'utente un numero tra 1 e 5
var numero_utente = parseInt(prompt('Digita un numero da 1 a 5'));
console.log('L\'utente ha digitato il seguente numero: ' + numero_utente);

// 2 - Generare un numero random tra 1 e 5
function generaRandom (min, max) {
    var numero_random = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero_random;
}
var random_pc = generaRandom(1, 5);
console.log('Il PC ha generato il seguente numero: ' + random_pc);

// 4 - Fare la somma dei due numeri (giocata utente + giocata pc)
var somma = random_pc + numero_utente;
console.log('La somma tra il numero scelto dall\'utente ' + numero_utente + ' e il numero ' + random_pc + ' generato dal PC è: ' + somma);

// 3 - Chiedere all'utente se sceglie pari o dispari
var pari_dispari = prompt('Scegli Pari o Dispari e scrivilo qui sotto');
console.log('L\'utente ha scelto: ' + pari_dispari);

// 5 - Valutare se il risultato è pari o dispari
// 6 - Comunicare all'utente se ha vinto o meno
if ((somma % 2 == 0) && (pari_dispari == 'pari')) {
    alert('Complimenti hai vinto! Prova di nuovo aggiornando la pagina.');
    console.log('Complimenti hai vinto! Prova di nuovo aggiornando la pagina.');
} else if ((somma % 2 != 0) && (pari_dispari == 'dispari')) {
    alert('Complimenti hai vinto! Prova di nuovo aggiornando la pagina.');
    console.log('Complimenti hai vinto! Prova di nuovo aggiornando la pagina.');
} else {
    alert('Hai perso! Prova di nuovo aggiornando la pagina.');
    console.log('Hai perso! Prova di nuovo aggiornando la pagina.');
}

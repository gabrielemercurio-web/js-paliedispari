// palindroma: scrivere una funzione per capire se una parola è palindroma:

 // 1 - chiedere una parola all'utente,
var parola_utente1 = prompt('Scrivi una parola'); // NB. il prompt mi fornisce una STRINGA

// 2.0 ------ Utilizzare la funzione per sapere se la parola inserita è palindroma: ------
// 2.1 - Analizzare le singole lettere della parola inserita dall'utente partendo dalla posizione 0 fino alla posizione N.length
// 2.1 - Analizzare le singole lettere della parola inserita dall'utente partendo dalla posizione N.length fino alla posizione 0

// function func_palindroma() {
//     var palindroma = '';
//     for (var i = parola_utente1.length; i >= 0 ; i--) {
//         var singole_lettere = parola_utente1.charAt(i);
//         palindroma = palindroma + singole_lettere;
//     }
//     console.log('La tua parola scritta al contrario: ' + palindroma);
//
//     // 3.0 ------ Stampare un messaggio appropriato: ------
//     // 3.1 - Se queste lettere sono uguali allora scrivi "Parola palindroma" (If ==)
//     // 3.2 - Se queste lettere sono diverse allora scrivi "Parola NON palindroma" (Else !=)
//     if (parola_utente1 == palindroma) {
//         console.log('La parola inserita è palindroma');
//     } else {
//         console.log('La parola inserita NON è palindroma');
//     }
// }
//
// func_palindroma();


function func_palindroma() {
    var palindroma = '';
    for (var i = parola_utente1.length; i >= 0 ; i--) {
        var singole_lettere = parola_utente1.charAt(i);
        palindroma = palindroma + singole_lettere;
    }

    // 3.0 ------ Stampare un messaggio appropriato: ------
    // 3.1 - Se queste lettere sono uguali allora scrivi "Parola palindroma" (If ==)
    // 3.2 - Se queste lettere sono diverse allora scrivi "Parola NON palindroma" (Else !=)
    if (parola_utente1 == palindroma) {
        return ('La parola ' + '\"' + parola_utente1 + '\"' + ' da te inserita è palindroma');
    } else {
        return ('La parola ' + '\"' + parola_utente1 + '\"' + ' da te inserita NON è palindroma. ' + '('+ palindroma +')');
    }
}

var risultato = func_palindroma();
console.log(risultato);








// END

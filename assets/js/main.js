//mail
//Chiedi all’utente la sua email
//prompt

const userEmail = prompt('Inserisci la tua email')
console.log(userEmail);

// creo una lista di persore che possono accedere con array


const validatedEmails = ["pippo", "pluto", "paperino"]
let isValid = false
for (let i = 0; i < validatedEmails.length; i++) {
    // console.log(validatedEmails[i]);
    //con if statment verifica se l'email inserita è uguale a un elemento nella lista array accedi al gioco 
    if (userEmail == validatedEmails[i]) {
        isValid = true
    }
}

console.log(isValid);
if (isValid == true) {
    const giocaOra = `<p>Gioca</p> <button class="btn btn-light">Lancia dado!</button>`
    document.querySelector('.validation').innerHTML = giocaOra
    console.log("Gioca!");
} else {
    const nomeErrato = `<p>Mi dispiace, non sei nella lista giocatori!</p> <button class="btn btn-light">Riprova!</button>`
    document.querySelector('.validation').innerHTML = nomeErrato
    console.log("Mi dispiace non puoi giocare!");
}

//controlla che sia nella lista di chi può accedere
//verifico con if statement se l'email è presente nella mia lista 
//array con email partecipanti
//stampa un messaggio appropriato sull’esito del controllo.
//insertAdjacentHTML


//Gioco dei dadi
//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
//Math.floor(Math.random() * 10) + 1;
//chi fa il punteggio più alto vince.
//decretare il numero più alto con if statement

const pcNumber = Math.ceil(Math.random() * 6);
const playerNumber = Math.ceil(Math.random() * 6);

console.log(pcNumber, playerNumber);
let winner;
if (pcNumber > playerNumber) {
    winner = "pc"
} else if (playerNumber > pcNumber) {
    winner = "player"
} else {
    winner = "both"

}
console.log("Vince " + winner);

// ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function changeTitle(){
    document.querySelector('#title').innerText = 'Una pagina brutta';
}

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function changeBackground(){
    document.querySelector('body').style.backgroundColor = 'gray'
}

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
function changeAddress(){
    document.querySelector('.address').innerHTML = 'Via dei cammelli 10, 84091 Battipaglia (SA)'
}

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
function newLink(){
    document.querySelectorAll('a').className = 'newLink'
}
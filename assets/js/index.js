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
    let tag = document.querySelectorAll('a')
    for(i = 0; i < tag.length; i++){
        tag[i].classList.add('nuovoLink')
    }
}

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
function togliImmagine(){
    let immagini = document.querySelectorAll('img')
    for(i = 0; i < immagini.length; i++){
        const immagineSingola = immagini[i]
        immagineSingola.classList.toggle('hidden')
    }
}

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
function randomColor(){
    const red = Math.round(Math.random() * 255)
    const blue = Math.round(Math.random() * 255)
    const green = Math.round(Math.random() * 255)
    return 'rgb(' + red +', ' + green + ', ' + blue + ')'
}

function setRandomColor(){
    let coloreRandom = randomColor()
    let prezzi = document.querySelectorAll('.prezzo')
    for (i = 0; i < prezzi.length; i++){
        let prezzoSingolo = prezzi[i]
        prezzoSingolo.style.color = coloreRandom
    }
}
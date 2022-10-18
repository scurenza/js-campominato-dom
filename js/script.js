/* **Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata. */

/* **Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */


// Dati
const btn = document.getElementById("btn");
const container = document.querySelector(".square-container");
const counter = document.getElementById("result");

let isGameOver = false;


// Creazione della griglia al click del bottone
btn.addEventListener ("click" , function() {

    // "Pulisco" il container
    container.innerHTML = "";
    counter.innerHTML = "";
    clickNum = 1;
    scoreboard.classList.add("hidden");
    isGameOver = false;
    
    // Prendo l'input della difficoltà
    const difficulty = parseInt( document.getElementById("difficulty").value);
    
    console.log(difficulty);
    arrayBomb = rndBomb(difficulty);
    console.log(arrayBomb);  

    // Creazione degli elementi uno ad uno
    for(let i = 1; i <= difficulty; i++) {
        const num = i;
        const thisSquare = createSquares(num);

        
        

        // Differenziazione della griglia in base alla difficoltà scelta
        if (difficulty === 100) {
            thisSquare.classList.add("lg");
        } else if (difficulty === 81) {
            thisSquare.classList.add("md");
        } else {
            thisSquare.classList.add("sm");
        }

        // aggiungo la funzione active sullo square al click
        thisSquare.addEventListener("click", actionOnSquares);
        

        // Inserisco gli elemento dentro il container
        container.append(thisSquare);
    }

        
        
    
});




// Funzione per creare gli squares -- Condizione panelSize ancora da aggiungere

/**
 * Description
 * @param {number} innerNum
 * @returns {object} elemento square all'interno del DOM
 */

function createSquares (innerNum) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.innerHTML = innerNum;
    return newSquare;
}

// Funzione per colorare gli square e stampare il numero in console

let clickNum = 1;
/**
 * Description
 * @returns {background color}
 */

function actionOnSquares () {
    if(!isGameOver) {
    const squareNum = parseInt(this.textContent);
    const scoreboard = document.getElementById("scoreboard");
    const win = document.getElementById("win");
    
    
    
    if (arrayBomb.includes(squareNum)) {
        this.classList.add("red");
        isGameOver = true;
        
        console.log("Bomba num:",squareNum," Numero di click:",clickNum);
        counter.innerHTML = clickNum;
        scoreboard.classList.remove("hidden");

        let allSquares = document.querySelectorAll(".square");
        console.log(allSquares);
        
        for (let i = 0; i < arrayBomb.length; i++) {
            allSquares[arrayBomb[i] - 1].classList.add("red");
        }
    } else {
    this.classList.add("blue");
    
    console.log("Cella num:",squareNum," Numero di click:",clickNum);
    }

    clickNum++;

    if (clickNum === parseInt(document.getElementById("difficulty").value) - 15 ) {
        win.classList.remove("hidden");
    }
}
}




// SECONDA CONSEGNA
/* **Consegna**
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
****
Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100.
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
**BONUS:**
1 - L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
**2- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
****3- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste */


              

// 
/**
 * Description Funzione per creare le bombe
 * @param {number} maxSquares // prelevo il livello di difficoltà
 * @returns {array} array con bombe tutte diverse tra loro
 */
function rndBomb (maxSquares) {
    let bombs = [];
    while (bombs.length < 16) {
        const rndBomb = Math.floor(Math.random() * (maxSquares - 1 + 1) ) + 1;
        if (!bombs.includes(rndBomb)) {
            bombs.push(rndBomb);
        }
    }
    return bombs;
}



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



// Creazione della griglia al click del bottone
btn.addEventListener ("click" , function() {

    // "Pulisco" il container
    container.innerHTML = "";
    
    // Prendo l'input della difficoltà
    const difficulty = parseInt( document.getElementById("difficulty").value);
    
    console.log(difficulty);

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


/**
 * Description
 * @returns {background color}
 */

function actionOnSquares () {
    const squareNum = parseInt(this.textContent);
    this.classList.add("blue");
    console.log("Cella num:",squareNum);
}
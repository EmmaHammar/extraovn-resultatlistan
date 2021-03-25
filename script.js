const inputPlayer = document.getElementById("inputPlayer");
const inputScore = document.getElementById("inputScore");
const btnAddPlayer = document.getElementById("btnAddPlayer");
const divAllPlayers = document.querySelector(".divAllPlayers");

btnAddPlayer.addEventListener("click", function(e) {
    // console.log(e);

    let divNewPlayer = document.createElement("DIV");
    divNewPlayer.classList = "divNewPlayer";
    divNewPlayer.id = inputPlayer.value;
    divAllPlayers.appendChild(divNewPlayer);

    //create btns + append to newPlayer
    const btnContainer = document.createElement("DIV");
    btnContainer.id = "btnContainer";
    divNewPlayer.appendChild(btnContainer);

    const btnMinus = document.createElement("BUTTON");
    btnMinus.classList = "btnMinus"
    btnMinus.textContent = "-";
    btnContainer.appendChild(btnMinus);

    const btnPlus = document.createElement("BUTTON");
    btnPlus.id = inputPlayer.value;
    btnPlus.textContent = "+";
    btnContainer.appendChild(btnPlus);
    // console.log(btnContainer);

    divNewPlayer.insertAdjacentHTML("afterbegin", 
        `<hr> <p>${inputPlayer.value}</p>`
    );

    let score = inputScore.value;
    // console.log(inputScore.value);

    let scoreDisplay = document.createElement("DIV");
    scoreDisplay.id = inputPlayer.value;
    scoreDisplay.textContent = score + " poäng"; 
    divNewPlayer.appendChild(scoreDisplay);
    // console.log(scoreDisplay.innerText);
    
    // console.log("first score", score);

    //btnPlus öka med 1
    btnPlus.addEventListener("click", function(e) {
        // console.log(divNewPlayer.id);
        // console.log(btnPlus.id);
        
        score++;
        // console.log("newScore", score);

        scoreDisplay.innerHTML = score + " poäng"; 
    });   

    //btnMinus minska med 1
    btnMinus.addEventListener("click", function(e) {
        // console.log("klick btnMinus", e);
        score--;
        scoreDisplay.innerHTML = score + " poäng"; 
    }); 
});





/*
Nu skall du skapa en resultatlista som går att använda till valfritt spel.

x Det skall dynamsikt gå att lägga till nya spelare till listan. 
x Varje tillagd spelare skall sedan visas med namn samt poäng, börja med 0.
Sedan skall varje spelare ha en “+” och en “-” knapp med vilket du skall kunna öka och minska den spelarens poäng. 
*/
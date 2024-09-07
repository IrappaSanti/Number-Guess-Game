let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let random = Math.ceil(Math.random() * 100);
console.log(random);

function checkGuess() {
    let read = parseInt(userInput.value);
    if (read === random) {
        gameResult.textContent = "Match is successful!!!..";
        gameResult.style.backgroundColor = "green";
        gameResult.style.color = "white";
    } else if (read < random) {
        gameResult.textContent = "Too Low!!..";
        gameResult.style.backgroundColor = "blue";
        gameResult.style.color = "white";
    } else if (read > random) {
        gameResult.style.backgroundColor = "blue";
        gameResult.textContent = "Too High!!..";
        gameResult.style.color = "white";
    } else {
        gameResult.textContent = "Provide proper Input!!..";
        gameResult.style.color = "white";
        gameResult.style.backgroundColor = "red";
    }
}
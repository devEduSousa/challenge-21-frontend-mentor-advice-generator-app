const diceButtonDiv = document.querySelector(".dice-container");
const adviceIdSpan = document.querySelector(".id");
const adviceH1 = document.querySelector(".advice");

function randomNumber() {
    const min = 1;
    const max = 224;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}

async function newAdvice() {
    response = await fetch(`https://api.adviceslip.com/advice/${randomNumber()}`);
    json = await response.json();
    adviceIdSpan.textContent = json.slip.id;
    adviceH1.textContent = json.slip.advice;
};

diceButtonDiv.addEventListener("click", newAdvice);
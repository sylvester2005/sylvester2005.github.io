function roll(){
const Numofdice   = document.getElementById(`textbox`).value;
const diceResult  = document.getElementById(`diceResult`);
const diceImage   = document.getElementById(`diceImage`);
const diceResults = [];
const diceImages  = [];

for(let i = 0; i < Numofdice; i++ ){
 let value = Math.floor(Math.random() * 6) + 1;
 diceResults.push(value);
 diceImages.push(`<img src="images/${value}.png" alt="Dice : ${value}">`);
}
diceResult.textContent=`Dice: ${diceResults.join(",")}`;
diceImage.innerHTML=diceImages.join("");
}

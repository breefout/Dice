const diceContainer = document.getElementById("dice-container"),
    sumDice = document.getElementById("sum-dice"),
    generateDie = document.getElementById("generate-die"),
    rollDice = document.getElementById("roll-dice")
let diceArray = [];

generateDie.addEventListener("click", () => {
    diceArray.push(new Die());
});

rollDice.addEventListener("click", () => {
    diceArray.forEach(die => {
        die.roll();
    });
});

sumDice.addEventListener("click", () => {
    let sum = 0
    diceArray.forEach(die => {
        sum = sum + die.value
    });

    alert(sum);
});

class Die {
    constructor() {
        this.value = null;
        this.container = $('<div class="myContainer"></div>');
        this.span = $('<span class="dice"></span>');
        this.img = $('<img src="d20.jpg" class="diceimg"></img>');
        this.container[0].appendChild(this.span[0]);
        this.container[0].appendChild(this.img[0]);
        this.roll();
        diceContainer.appendChild(this.container[0]);
    }

    roll() {
        this.value = Math.round(Math.random() * 6);
        this.span[0].innerText = this.value;
    }
}


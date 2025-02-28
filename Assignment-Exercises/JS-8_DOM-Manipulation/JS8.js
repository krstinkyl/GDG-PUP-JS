// your code starts here
let counterText = document.getElementById("counter-text");
let addButton = document.getElementById("button-add");
let subtractButton = document.getElementById("button-subtract");

let counter = 0;

//even listener for the buttons
addButton.addEventListener("click", function () {
    counter++;
    counterText.textContent = counter;
});

subtractButton.addEventListener("click", function () {
    if (counter > 0) {
        counter--;
    }
    counterText.textContent = counter;
});

let button = document.getElementById("colorButton");

//button event listener
button.addEventListener("click", function () {
    //hex colors in random
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    //apply to body
    document.body.style.backgroundColor = randomColor;
  });
  
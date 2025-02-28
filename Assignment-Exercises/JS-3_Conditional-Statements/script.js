function checkAge() {
    let age = document.getElementById("ageInput").value;
    let resultText = "";
    
    if (age === "" || isNaN(age)) {
        resultText = "Invalid age. Please enter a valid number";
    } else {
        age = parseInt(age);
        if (age >= 0 && age <= 12) {
            resultText = "Child";
        } else if (age >= 13 && age <= 19) {
            resultText = "Teenage";
        } else if (age >= 20) {
            resultText = "Adult";
        } else if (age < 60) {
            resultText = "You are an adult.";
        } 
    }
    
    document.getElementById("result").innerText = resultText;
}

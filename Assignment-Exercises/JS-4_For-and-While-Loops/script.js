// scripts.js

// Example Using a for loop to print numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(`Number: ${i}`);
}

// Using a while loop to print a list of hobbies
let hobbies = [
  "Makeup", 
  "Reading",
  "Cooking",
  "Travelling",
  "Designing",
  "Coffee Runs", 
  "Gaming", 
  "Crocheting", 
  "Photography"
  
];

let index = 0;
while (index < hobbies.length) {
  console.log(`Hobby ${index + 1}: ${hobbies[index]}`);
  index++;
}

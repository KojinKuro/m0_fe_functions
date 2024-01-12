// Defining Our Own Functions
// For each exercise below, write the function according to the requirements. 
// Store the return value of the function call in a variable, and use console.log() to see the return value in the console.
// If a function takes parameters, call the function at least twice, passing different arguments each time.

// 1: Write a function named greeting that returns a string with a general greeting. 
function greeting() {
  return "Hello there.";
}
console.log(greeting());

// 2: Write a function named customGreeting that returns a greeting WITH a specific name.
function customGreeting(name) {
  return `You were my brother, ${name}. I loved you.`
}
console.log(customGreeting("Anakin"));
console.log(customGreeting("Mando"));

// 3: Write a function named greetPerson that takes in 3 strings, a first, middle, and last name, and returns a sentence with the full name.
function greetPerson(first, middle, last) {
  var nickName = first.substring(0,1) + "-Dog";
  return `${first} ${middle} ${last}? That's a bit long. I'm going to call you ${nickName}.`;
}
console.log(greetPerson("John", "Jacob", "Jingleheimer-Schmidt"));
console.log(greetPerson("Sacha", "Baron", "Cohen"));

// 4: Write a function named square that takes in one number, and returns the square of that number.
// BONUS: Print a sentence that interpolates the return value of your square function.
function square(num) {
  return `The square of ${num} is ${num ** 2}`; 
}
console.log(square(2));
console.log(square(10));


// 5: Write a function named checkStock that satisfies the following interaction pattern:
// Hint: You will only write one checkStock function that checks the quantity and then prints the corresponding statement.
function checkStock(stock, item) {
  var stockText;
  if(stock <= 0) {
    stockText = " - OUT of stock!";
  } else if (stock <= 3) {
    stockText = " - running LOW"
  } else {
    stockText = " is stocked"
  }
  return `${item}${stockText}`;
}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
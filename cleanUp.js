// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
// function askForName() { console.log("Hello, what is your name?") }

// askForName()
function askForName() { 
  console.log("Hello, what is your name?");
}

askForName();
// Two changes have been made to example 1. First, semicolons were added as a best practice.
// Secondly he function was moved to 3 take 3 lines instead of one line to be more readable.

// EX 2:
// function addThreeNums(first, second, third) {
// var sum = first + second + third
// return ;
//       }

// addThreeNums(1, 2, 3);
// addThreeNums(4, 2, 7);

function addThreeNums(first, second, third) {
  return first + second + third;
}
  
console.log(addThreeNums(1, 2, 3));
console.log(addThreeNums(4, 2, 7));
// The sum was removed and the logic was moved to the return statement because the code is
// simple enough to understand without it and keeps the code tidier. Console.log
// was added to lines 35 and 36 to output the result to console. The curly bracket on line 33
// was moved to the start of the line to format properly.


// EX 3:
// func makeFreshPesto(){
//   console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
//   console.log("Pulse basil and pine nuts");
//   console.log("Add garlic and cheeses");
//   console.log("Slowly pour in oil");
//   console.log("Season");    }

// makeFreshPesto();
function makeFreshPesto() { 
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();
// Changed func to function on line 52. Brackets on line 52 ad 57 moved for readability.


//  EX 4:
// function average(num1, num2) 
//   {
// var sum = num1 + num2;
//     var avg = sum / 2;

// return avg
//   }
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum / 2;

  return avg
}
// The code should work without issues, but should be formatted to be better. The lone curly brace after the parameters
// was moved to format it correctly, and all text was tabbed to fit in the code block against the same margin.
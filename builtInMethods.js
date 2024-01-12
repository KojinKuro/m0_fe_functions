// SECTION 1: Calling methods on string or integer objects.
// Run each line of code below (either from this file or in dev tools).
// Then, in a comment, write 1-2 sentences describing what is happening, using ALL the involved vocabulary terms you've learned in this lesson so far.

// EXAMPLE
// The toLowerCase() method is called on the string "Hello World"
// No arguments are passed; toLowerCase() has one clear job which is to lowercase all letters that exist in the String
// The return value is "hello world"
"Hello World".toLowerCase();


"Hello World".includes("Hello");
// includes() takes a string argument and checks to see if the string is in the string attached. It is case sensitive.
// It will return a true or false value (in this case true)


"Hello World".endsWith("Hello");
// endsWith() checks to see if the last characters of "Hello World" matches the string argument. It is case sensitive.
// It will return a boolean. In this case false.


"Hello World".endsWith("rld");
// endsWith() was already explained, so another explanation will not be included.
// Because "Hello World" does endWith "rld" it will return true.


// SECTION 2: Calling methods on variables assigned to strings.
// Declare 2 variables assigned to strings.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// Include comments above each method call explaining the impact and return value of that method.

// EXAMPLE
// The startsWith() method is called on the firstName variable, which stores the string object "Jeff". 
// The startsWith() method returns true if the data in the firstName variable starts with the argument passed in.
// In this example, the return value is true, because "Jeff" does start with "J".
// The console.log() statements prints the return value of the startsWith() method (true) to the console.
var firstName = "Jeff";
console.log(firstName.startsWith("J"));


// String.prototype.concat()
// This function will attach the string arguments in order to the string that concat is being run on.
// It will return a **new** string and does not affect the original.
console.log("\nString.prototype.concat()");
var gameName = "Dark";
console.log(gameName); //expected output: Dark
gameName.concat(" ", "Souls");
console.log(gameName); //expected output: Dark
gameName = gameName.concat(" ", "Souls");
console.log(gameName); //expected output: Dark Souls

// String.prototype.split()
// This function will take a string and split it into an array based on the pattern given.
// It will return this array for you to use.
console.log("\nString.prototype.split()");
var allStar = `Somebody once told me the world is gonna roll me, I ain't the sharpest tool in the shed.`
var allStarWords = allStar.split(" ");
console.log(allStarWords[3]); //expected output: me


// SECTION 3: Calling methods on variables assigned to arrays.
// Declare 2 variables assigned to arrays.
// Call a different built-in JavaScript method on each of your variables. 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Include comments above each method call explaining the impact and return value of that method.

// Array.prototype.pop()
// Removes the last element in the array. In this case it should be 4. These changes
// will be done on the original array. When pop() is run it will also return the last
// element before deleting it.
console.log("\nArray.prototype.pop()");
var array1 = [0,1,2,3,4];
console.log(array1);
console.log(array1.pop());
console.log(array1);

// Array.prototype.filter()
// filter() will run a check, generally done through a function, that needs to return a Boolean.
// This check will run on each element in the array. Each element that returns true will
// be added to a new array that is returned out.

console.log("\nArray.prototype.filter()");
var array2 = [0,1,2,3,4,5,6,7,8];
console.log(array2);
var array2_filtered = array2.filter((value) => !(value%2)); //returns true on even numbers
console.log(array2); // should be the same because filter does not affect the original
console.log(array2_filtered)
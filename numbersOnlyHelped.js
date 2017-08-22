/*Make a function that copies an array, ONLY accepting the items that are numbers.

IT SHOULD RETURN A NEW ARRAY

ex:

var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);
// newArray is [1, -3, 0.5]
Copy
HINT

Use typeof to determine type (ex: typeof 24 === "number" would be true)

Bonus (Only If You Have Time):

Make a second function that removes them from the given array. (instead of copying to a new array)
Do you need to return the array?
*/

// function numbersOnly(newArray) {
// "array" is the argument or "input", not the new array
function numbersOnly(array) {

  // var numArray = [];
  var newArray = []; // This is the temporary new array

// for (var i = 0; i < newArray.length; i++) {
  for (var i = 0; i < array.length; i++) {

 // if typeof(newArray(i)) === "number" {
    if (typeof array[i] === 'number') {

      // numArray.push(i); You were pushing the index or "i" to the new array instead of the value or array[i]
      newArray.push(array[i]);

    }

  }

  return newArray; // You need to return the new array
  // console.log(numArray);

}

// numbersOnly(1, 2, 3) There was no array being passed to the function, instead you were passing 3 arguments to the function
var originalArray = [1, 'apple', -3, 'orange', 0.5];
var theNewArray = numbersOnly(originalArray);
console.log('Original:',originalArray);
console.log('New:',theNewArray);

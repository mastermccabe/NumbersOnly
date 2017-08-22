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

// MAIN TASK
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
function numbersOnly(array) {

  var newArray = [];

  for (var i = 0; i < array.length; i++) {

    if (typeof array[i] === 'number') {

      newArray.push(array[i]);

    }

  }

  return newArray

}
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:


// BONUS
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
Array.prototype.numbersOnly = function(){

  for (var i = 0; i < this.length; i++) {

    if (typeof this[i] != 'number') {

      this.splice(i,1);

    }

  }

};
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:
// :-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:-:

// Original Array
var originalArray = [1, 'apple', -3, 'orange', 0.5];

// MAIN TASK
console.log('MAIN TASK:');

console.log('Original:',originalArray);
console.log('New:',numbersOnly(originalArray));

// BONUS
console.log("\nBONUS:");

console.log('Original:',originalArray);
originalArray.numbersOnly()
console.log('New:',originalArray);

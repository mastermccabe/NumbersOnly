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
function numbersOnly(newArray) {

  var numArray = [];

  for (var i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] === 'number') {
      numArray.push(newArray[i]);
      //  console.log(numArray);

    }

  }

  return numArray;

}

/******BONUS**************/

function removeNonNumbers(newArray) {
  for (var i = 0; i < newArray.length; i++) {
    if (typeof newArray[i] != 'number') {
      newArray.splice(i, 1);
    }
  }
}

// Main
console.log('MAIN:');
var originalArray = [1, "apple", -3, "orange", 0.5];

console.log('Original Array:',originalArray);
var numbersOnlyArray = numbersOnly(originalArray);
console.log('Numbers Only:',numbersOnlyArray);


// BONUS
console.log('\nBONUS:');
console.log('Original Array:',originalArray);
removeNonNumbers(originalArray);
console.log('Numbers Only:',originalArray);

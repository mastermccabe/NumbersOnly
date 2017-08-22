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

    // Notice syntax of if and typeof
    // Double quotes suck!!!! "number"
 // if typeof(newArray(i)) === "number" {
    if (typeof newArray[i] === 'number') {

      numArray.push(i);

    }

  }

  console.log(numArray);

}

// Was
// numbersOnly(1, 2, 3);

// Should be
numbersOnly([1,2,3]);

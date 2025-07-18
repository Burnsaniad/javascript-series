// Task-11
// Create an array of 10 elements(numbers 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop.
{
  const numbers = [1,2,3,4,5,6,7,8,9,10]
  for(let i=0; i<numbers.length; i++){
    if(numbers[i] == 5)
      numbers.length = 6
      break
  }
  console.log(numbers)
}

// Task-12
// Create an Array of 10 elements. Use the splice() method to empty the array.
{
    const arr = [1,2,3,4,5,6,7,8,9,10]
    arr.splice(0, arr.length) // 📝splice(startIndexNum, deleteCount, addingItems)
    console.log(arr)
}

// Task-13
// Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why?
{
const arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Method 1: Using length property
arr13.length = 0;
// Method 2: Using pop()
// while (arr13.length > 0) arr13.pop();
// Method 3: Using shift()
// while (arr13.length > 0) arr13.shift();
// Method 4: Setting to []
// arr13 = [];
// Method 5: Using splice()
// arr13.splice(0, arr13.length);

console.log(arr13); // []

// Efficiency Analysis for Task-13:

// length = 0: Most efficient. It instantly truncates the array by setting its length to zero, with a time complexity of O(1). It doesn't iterate or process elements individually.
// pop(): Inefficient for large arrays. It removes one element at a time from the end, requiring O(n) operations for n elements.
// shift(): Least efficient. It removes one element from the start, shifting all remaining elements, leading to O(n) per operation, so O(n²) for n elements.
// Setting to []: Efficient but creates a new array, which may not be desirable if the original array reference is needed (e.g., in functions or objects). Time complexity is O(1), but it depends on garbage collection.
// splice(0, length): Less efficient than length = 0. It removes all elements in one operation but involves internal array manipulation, with a time complexity of O(n) due to element shifting.

// Most Efficient: Setting length = 0 is the most efficient because it’s a single operation (O(1)) that doesn’t involve iterating or shifting elements and preserves the original array reference.

}

// Task-14
// What happens when you concatenate two empty arrays?
{
    const arr1 = []
    const arr2 = []
    const arr3 = arr1.concat(arr2)
    console.log(arr3)
}

// Task-15
// How can you check if a value is partially matching with any of the elements of an Array?
{
    const fruits = ['apple', 'banana', 'orange', 'grape'];
    const searchFruit = 'app';
    const hasPartialMatch = fruits.some(element => element.includes(searchFruit));
    console.log(hasPartialMatch); 
}

// Task-16
// What is the difference between the slice() and splice() methods?
{
    // 📌 slice(start, end):
    // Returns a shallow copy of a portion of an array from start to end (exclusive).
    // Immutable: Does not modify the original array.
    // Parameters: start (inclusive index), end (optional, exclusive index).
    // Time complexity: O(n), where n is the sliced portion's length.
    // Example: arr.slice(1, 3) returns elements at indices 1 and 2.

    // 📌 splice(start, deleteCount, ...items):
    // Modifies the array by removing, replacing, or adding elements at start.
    // Mutable: Changes the original array and returns the removed elements.
    // Parameters: start (index to begin), deleteCount (number of elements to remove),     items (optional elements to add).
    // Time complexity: O(n) due to shifting elements after modification.
    // Example: arr.splice(1, 2, 'new') removes 2 elements from index 1 and adds 'new'.

    const arrSlice = [1, 2, 3, 4, 5];
    console.log(arrSlice.slice(1, 3)); // [2, 3] slice(stIndex, endIndex)
    console.log(arrSlice); // [1, 2, 3, 4, 5] (unchanged)

    const arrSplice = [1, 2, 3, 4, 5];
    console.log(arrSplice.splice(1, 2, 'new')); // [2, 3] (removed elements) 
    console.log(arrSplice); // [1, 'new', 4, 5] (modified)
}

// Task-17
// Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified.
{
    const arr = ['a1', 'z9', 'b2', 'y8', 'c3'];
    const accending = arr.toSorted()
    const decending = accending.toReversed()
    console.log(accending)
    console.log(decending)
}

// Task-18
// Can you give examples of sparse and dense arrays?
{
// Sparse Array
const sparse = [];
sparse[0] = 1;
sparse[3] = 4;
console.log(sparse); // [1, <2 empty items>, 4]
console.log(sparse.length); // 4

// Dense Array
const dense = [1, 2, 3, 4];
console.log(dense); // [1, 2, 3, 4]
console.log(dense.length); // 4
}

// Task-19
// Give a practical usages of the .fill() method
{
    const colors = ['red', 'blue', 'green', 'pink', 'yellow', 'orange']
    colors.fill('black', 3,6)
    console.log(colors)
}

// Task-20
// How to convert an array to a string?
{
    const arr = [1,2,3,4,5]
    console.log(arr.join('')) // 🧠Preferred Method
    console.log(String(arr))
    console.log(arr.toString())
}
// Task-01
// Create an array of 5 elements using the Array Constructor.
{
  const arr = new Array(1, 2, 3, 4, 5);
  console.log(arr);
}

// Task-02
// Create an array of 3 empty slots.
{
  const arr = new Array(3);
  console.log(arr);
}

// Task-03
// Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property.
{
  const arr = [1, 2, 3, 4, 5, 6];
  console.log(arr[arr.length - 3]);
}
// Task-04
// Use the for loop on the above array to print elements in the odd index.
{
  const arr = [1, 2, 3, 4, 5, 6];
  for (let i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
}

// Task-05
// Add one element at the front and the end of an array.
{
  const arr = [1, 2, 3, 4, 5, 6];
  arr.unshift(0); // 📝insert in the front
  arr.push(7); // 📝insert in the back
  console.log(arr);
}

// Task-06
// Remove an element from the front and the end of an array.
{
  const arr = [10, 20, 30, 40, 50];
  arr.pop(); // 📝remove from the back
  arr.shift(); // 📝remove from the front
  console.log(arr);
}

// Task-07
// Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring.
{
  const foods = [
    "mango",
    "apple",
    "jack-fruit",
    "guava",
    "pinapple",
    "banana",
    "orange",
    "pizza",
    "burger",
    "sandwich",
  ];
  const [,,,,,sixFoodItem] = foods
  console.log(sixFoodItem)
}

// Task-08
// Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.
{
    const foods = [
    "mango",
    "apple",
    "jack-fruit",
    "guava",
    "pinapple",
    "banana",
    "orange",
    "pizza",
    "burger",
    "sandwich",
  ];
   const [,, ...lastEight] = foods
   console.log(lastEight)
}

// Task-09
// Clone an Array(Shallow cloning)
{
    const arr = [1,2,3,4,5]
    const arrClone = [...arr]
    console.log(arr)
    console.log(arrClone)
}

// Task-10
// Empty an array using its length property
{
    const arr = [1,2,3,4,5]
    arr.length = 0
    console.log(arr.length)
}

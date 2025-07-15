                        // Array static methods, syntax Array.something()
            

// The isArray() method
{
  const arr = [1,2,3,4];
  Array.isArray(arr); // true
  Array.isArray({}); // false
  Array.isArray(1); // false
  Array.isArray([]); // true 📝 if we want to create an array of different type of element
}


// The Array.of() method
{
  const a = new Array(2,3,4);
  const b = [4,5,6];
  const c = Array.of(2, false, 'test', {'name': 'Alex'});
}


// Array Like
{
  const array_like = {
      0: 'A',
      1: 'B',
      2: 'C',
      length : 3
  }
  
//   console.log(array_like[1])
  
// A    rray from()
  Array.from(array_like) // 📌 convert the array_like to an array

  function checkArgs() {
    console.log(arguments.length);// logs 2.
  }
}
checkArgs(1,2)

// Array.fromAsync()
{
    Array.fromAsync({
    length: 3,
    0: Promise.resolve('tapaScript'),
    1: Promise.resolve('Google'),
    2: Promise.resolve('Apple'),
  }).then((array) => console.log(array));
}
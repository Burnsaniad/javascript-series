// Create Object using constructor
function Car(name, model) {
    this.name = name;
    this.model = model
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
// console.log(bmwCar)
// console.log(audiCar)

console.log(bmwCar instanceof Car);

// Create Object:
const person = new Object()
person.name = "Alpha";
person.age = 76;
// console.log(person);


function createUser(name, age) {
    return {
       name,
       age,
    }
}

const user1 = createUser("tapas", 39)
// console.log(user1)

let profile = {
    name: "tapas",
    company: "CreoWis",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "Bangalore",
        pin: 56032,
        state: "Karnataka",
        country: "India",
        greeting: function() {
            console.log("Welcome to India")
        }
    }
}
// for ... in

for (let key in profile) {
    // console.log(key)
    // console.log(profile[key]);
}

let fruits = {name: "mango"}
const anotherfruits = {name: "mango"}

// console.log(fruits == anotherfruits)
// console.log(fruits === anotherfruits)

fruits = anotherfruits

// console.log(fruits == anotherfruits)
// console.log(fruits === anotherfruits)


obj2 = Object.assign({}, fruits)
// console.log(obj2)
// console.log(fruits)

// console.log(obj2 === fruits)

const target = {p:1, a:2};
const source = {a:3, b:5};

const retrunedObj = Object.assign(target, source);
// console.log(retrunedObj);
// console.log(target)


const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
// console.log(obj4); // Output: {a: 1, b: {c: 2}}
obj4.b.c = 3;  // ✅ obj3.b.c also becomes 3 — because b is shared (reference).
obj4.a = 100;  // ❌ obj3.a stays the same if you change obj4.a, because primitives are copied by value.

// console.log(obj4.a); // 100
// console.log(obj3.a); // 1 Cause primitives are copied by value

// console.log(obj4.b.c) // 3
// console.log(obj3.b.c) // 3 Cause non primitives are shared refference

// 🧠 structuredClone() – Deep Copy 
// structuredClone(obj) creates a deep copy of the object.
// All nested objects, arrays, and values are cloned.
// The original and the cloned object become completely independent.
const obj5 = structuredClone(obj3); 

obj5.a = 300;
obj5.b.c = 30;

// console.log(obj5.a); // 300
// console.log(obj3.a); // 1

// console.log(obj5.b.c) // 30
// console.log(obj3.b.c) // 2

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
])

const entries1 = [["foo", "bar"],["baz", 42]]

// console.log(entries)
const objEntries = Object.fromEntries(entries) // From arrayMap to object
// console.log(objEntries);

// console.log(entries1)
const objEntries1 = Object.fromEntries(entries1) // From array to object
// console.log(objEntries1)


// 🧊 Object.freeze()
const constants = {
  PI: 3.14159,
  E: 2.71828
};
// You cannot add new properties.
// You cannot remove existing properties.
// You cannot modify existing properties.
// You cannot reconfigure properties.
Object.freeze(constants);

constants["SPEED_OF_LIGHT"] = 299792458;  
delete constants.E;  
constants.PI = 3.14;  
constants.GOLDEN_RATIO = 1.618;   

console.log(constants); // Still: { PI: 3.14159, E: 2.71828 }
console.log(Object.isFrozen(constants));  // true
// "use strict", if we use this it will throw Error

//❗Important Notes:
// Object.freeze() only does a shallow freeze. If your object contains nested     objects, those nested objects are NOT frozen
const configs = {
  app: {
    name: "MyApp",
    version: "1.0"
  },
  debug: true
};

Object.freeze(configs);

configs.debug = false;  // Fails
configs.app.version = "2.0";  // Works!
console.log(configs.app.version);  // "2.0"

const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Bangalore"
delete dept.name; // Does't work

dept.name = "HR"
console.log(dept)

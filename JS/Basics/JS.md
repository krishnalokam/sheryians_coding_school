# JS divided into 6 Phases

## phase 1: Foundations ()

1990s - Tim Bernles-lee
HTML
http
Server

Netscape wants to build a browser to build dynamic pages
mosiac -

First website in the world - https://info.cern.ch/

Netscape - Brenden Eic (employee) ->
Mocha language (Netscape Navigator)
Live script:-
livescript named to javascript:-

microsft - internet Explorer :- Jscript

ECMA - European Computer Manufacturers Association -
ECMA script - standard
ES1 ES2 ES3 ES3.1 ES5
ES6 - ES2015
...

Netscape -- developed Mozilla
2008 - Chrome browser - V8 Engine

Ryan Dhal found Nodejs in 2009

# JavaScript

JavaScript is a single threaded Synchronous programming language which can be used for multiple purposes

- Frontend
- Server
- Backend
- can use multiple libraries (React, Angular, Express)
- can built mobile applications (for eg: React Native)
- can built Desktop applications
- Robots
- DAPPS ()

  ![alt text](image.png)

### Client Side

### Server Side

### JS is dynamically interpreted language

## DataTypes

- Primitive
  - Number (10, 20.55, -10, 99999)
  - String ('h', 'hello',"Sheryians Coding School")
  - Boolean (true, false)
  - undefined (variable is declared but not initialized and default value taken by JS is undefined)
  - null (primitive datatype, intentional absence of any object value)
  - BigInt (number's range is 2^53-1 , beyond that range is BigInt)
  - Symbol (Symbol is a unique and immutable primitive data type)
- Non-primitive (Reference )
  - Array
  - Objects
  - Function

  Primitive : at one point of time , only one value will be stored

# Type Coercion

- Type coercion is the automatic or implicit conversion of values from one data type to another

Binary Operators
Arithmetic Operators
Assignment Operators

## phase 2 : Functions, arrays, objects

loops
var, let, const

when we use var, it becomes a global variable

var and let -- value updation allowed
const = value updation not allowed

var is function scoped
let and const block scoped

## Web API

webapi : provides,
alert, prompt, confirm, DOM, console,location service, history, local storage, Timer, setTimeout,Promise
Fetch api,

## Functions

- accessible
- reusable
- systematic
  block of code

  DRY - Dont Repeat Yourself phenomenon

  function greet(parameters) {
  console.log("hello " + parameters);
  }

arguments = "Siva";
greet(arguments);

### Types of functions

- Function declaration
  function a1() {
  console.log("hello guys1");
  }
- Function expression
  var b1 = function (){
  console.log("hello guys2");

}

- Arrow function
  var c1 = () => {
  console.log("hello guys3");
  };

  a1()
  b1()
  c1()

### IIFE (Immediately Invoked Function Expression)

(function(){
console.log("This is IIFE");
})();

IIFE is used, as to create a local scope to var and use it immediately.
As let, const come in ES5, usage of IIFE is reduced..

array
objects

Pure Functions
Impure Functions

Extra arguments will be ignored
Extra parameters will take undefined value

Passing function as argument

#### Higher order functions

A higher-order function is a function that either takes one or more functions as arguments (often called callbacks) or returns a function as its result

#### PartB

Arrays:

DataTypes;
primitive;

non - primitive;
functions;

### arrays:

    arrays.js
    arrays can take similar data types, or multiple data types
    //Mutating methods
    arr.push(1); //add element 1 at the end
    arr.pop(); // remove and return the last element
    arr.shift();// remove and return the first element
    arr.unshift(20); // add 20 at index 0

    arr.splice(startIndex, deleteCount, newItems);//starting from startIndex, remove elements
    arr.reverse()
    arr.sort(); //sort only
    arr2.sort((a, b) => a - b); //sort ascending
    string.startsWith('a');

    foreach - iteration
    map - transformation
    filter - filteration
    reduce - reduce
    find
    findIndex
    some
    every
    //destructing and rest operator
    var [a,b] = [10,20,30,40]
    var [a,b,..c] = [10,20,30,40].
    c //[30,40]

    var [a,,c] = [10,20,30,40]
    //a - 10, c - 30

    var ans = arr.find(function (elem) {

    return elem.toLowerCase() == "buvi";
    });
    var ans = arr.findIndex(function (elem) {
      return elem.toLowerCase() == "buvi";
    });

    var some = arr.some((ele) => ele.includes("a"));
    console.log(some);

    var every = arr.every((ele) => ele.includes("a"));
    console.log(every);

    for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }

    //for of used only on iterables
    for (value of arr) {
      console.log(value);
    }

    for (index in arr) {
      console.log(index);
      console.log(arr[index]);
    }

    //Non mutating methods
    arr.slice(startIndex,endIndex);
    arr.concat(arr2);
    arr.includes(3);
    arr.indexOf(3);
    arr.split(" ");
    arr.join("-");

     let  twoDArray = [
        [10, 20, 30],
        [40, 50, 60],
      ];

      console.log(twoDArray.includes([10, 20, 30])); //false
      console.log(twoDArray.includes(10)); //false
      console.log(twoDArray[0].includes(10)); //true



    var instituion = "Sheryians Coding School";

    let sArr = instituion.split(" ");

    let sCombined = sArr.join("-");
    console.log(sCombined);// Sheryians-Coding-School

    Spread operator
    let arr = [10, 20, 30, 40];
    let arr2 = [...arr];
    console.log(arr2

arr.forEach((element, index, arr) => {
console.log(element);
});
let arr2 = arr.map((element, index, arr) => {
element = element \* 2;
return element;
});

Day 16 - read before 43:00 sec

### objects

    Collection of key-value pairs, Arrays store ordered data, Objects store named data.
    let Person = {
        name: "Siva Lokam",
        age: 40,
        city: "Hyderabad",
    };

    console.log(Person);
    console.log(Person.name);
    console.log(Person.age);
    console.log(Person.city);

- Crud
  let student = {
  name: "Kishan",
  age: 20,
  marks: 78,
  isSingle: true,
  batch: "Cohort 3.0",
  };

  //Create

  student.city = "Las Vegas";

  //Read

  console.log(student.age);

  //Update

  student.name = "Ramesh";

  //Delete

  delete student.marks;

  //Read

  console.log(student);

  console.log(Object.keys(student));

  console.log(Object.values(student));

  console.log(Object.entries(student));

* keys, values, and entries

  console.log(Object.keys(student));

  console.log(Object.values(student));

  console.log(Object.entries(student));

* object inside object
  let user = {
  name: "Virat Kohli",
  age: 36,
  team: "India",
  isMarried: true,
  skills: ["Batting", "Dancing", "Fielding"],
  spouse: {
  name: "Anushka Sharma",
  profession: "Acting",
  age: 30,
  },
  };

  console.log(user.name);
  console.log(user.skills);
  console.log(user.spouse);
  console.log(user.spouse.name);
  console.log(user.spouse.profession);
  console.log(user.spouse.age);

---

    let obj = {
      name: "Chitti",
      ram: "20mb",
      isWorking: false,
      age: 1,
      skills: ["fight", "walk", "dance"],
      creator: {
        name: "Vaashi",
        age: 40,
        isIntelligent: true,
      },
      greet: function () {
        console.log("Hello I am Chitti, Robot");
      },
    };

    obj.greet();

---

    let calculator = {
      add: (a, b) => a + b,
      square: (a) => a * a,
      cube: (a) => a * a * a,
      mul: (a, b) => a * b,
    };

    console.log("addition of 20, 39:", calculator.add(20, 39));
    console.log("Square of 25:", calculator.square(25));
    console.log("Cube of 25:", calculator.cube(25));
    console.log("Multiplication of 25 with 4:", calculator.mul(25, 4));

---

    console.clear();
    let arr = [10, 20, 30, 40];

    arr[-1] = 99;
    arr["name"] = "Siva";
    console.log(arr);
    console.log(arr.name);
    let index = 0;
    console.log(arr["name"]);
    arr.age = 40;
    console.log(arr);
    console.log(typeof arr);

---

    const groom = {
      name: "Salman",
      age: 60,
    };

    const bride = {
      name: "Katrina",
      age: 42,
    };

    groom.name = "Vicky";

    console.log(groom.name + " Weds " + bride.name);

    Object.seal(groom);
    //Seal allows updation but, restricts creation or deletion

    groom.city = "Mumbai";

    console.log(groom); // city not added

    delete groom.age;
    console.log(groom); // age not deleted

    groom.age = 62;
    console.log(groom); //age updated

    Object.freeze(bride);

    bride.city = "Mumbai"; //creation
    delete bride.age; //deletion
    bride.name = "Priyanka"; //updation
    console.log(bride); //no change to original object

---

    /*
    Arrays seal and freeze

    */
    let arr = [10, 20, 30, 40];

    Object.seal(arr);

    // arr.push(50);//Cannot add property 4, object is not extensible

    // arr[4] = 55; // no error but did nothing

    // delete arr[2]; // no error, but did nothing

    arr[0] = 100; // will update the 0th index to 100
    console.log(arr); //

    Object.freeze(arr);
    arr[0] = 1000; // no error, but did nothing
    console.log(arr);

---

##### Destructuring

      let arr = [10, 20, 30, 40];

      // let [a, b, c, d] = arr;
      // console.log(a);

      let [a, , _, d] = arr;
      console.log(a);
      // console.log(b);
      // console.log(c);
      console.log(d);

- destructuring obj
  let obj = {
  name: "John Doe",
  age: 35,
  };

  let { name, ...rest } = obj;
  console.log(name);
  console.log(rest)

## phase 3: the HOW Begins ()

## Phase 4:Objects Deeper & this

## phase 5: Asynchronous

## phase 6: Modern & Practical JS

# References:

https://www.jshero.net/en/koans/var.html

// call by value and call by reference are the differnce points/categorisation base of primitive and non primitive datatype
// how data is stored in memory and how data is accessed from memory has divided data into two types i.e; primitive and non primitive

// Primitive datatype => call by value: data copied with no reference to the original value of data and any changes done in copied data will be registered in copied data only

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
// javascript => dynamically typed i.e; no need to define datatype of a variable explicitly and here variables can hold values of different types during runtime 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id === anotherId);

const BigNumber = 345845885458545855545555n

// Reference(Non Primitive) => refernce of the data can be directly allocated to the user

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"]
let myObj = {
    name: "Lav",
    age: 20
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof BigNumber)
// https://262.ecma-international.org/5.1/#sec-11.4.3

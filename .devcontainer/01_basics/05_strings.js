const name = "lav"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`LHello my name is ${name} and my repo count is ${repoCount} `);// "``" => backticks -> string interpolation

// String declaration in other way
const gameName = new String('Lav-HC')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("v"));

const newString = gameName.substring(0, 4) // "substring()" => print only that part of the string provided under the start and end points arguments
// console.log(newString);

const anothjerString = gameName.slice(-5, 4)//"slice()" => cuts and print the string as provided with start and end point arguments
// console.log(anothjerString);

const newStringOne = "    lav      "
// console.log(newStringOne);
// console.log(newStringOne.trim());// "trim()"" => removes unnecessary spaces from string

const url = "https://lav.com/lav%20sinha"
console.log(url.replace('%20', '-'))

const name = "Anjali"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Anjali-Up')
console.log(gameName[0]);
console.log(gameName._proto_);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(0,4);  // Use negative values to get the character in reverse order
console.log(anotherString);

const newStringOne = "   Anjali   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://upadhyayanjali.com//anjali%23upadhyay"
console.log(url.replace('%23', '-'))

console.log(url.includes('anjali'));

console.log(gameName.split('-'));
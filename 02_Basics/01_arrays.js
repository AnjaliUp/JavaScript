// array

const myArr = [0,1,2,3,4,5]
const myHeros = ['Shaktiman' , 'nagraj']

const myArr2 = new Array(1,2,3,4)

// console.log(myArr[1]);

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop();

// myArr.unshift(0)
// myArr.shift();

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(myArr);
// console.log(typeof newArr);

// console.log(myArr);

// Slice and Splice

console.log("A" , myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1,3) // Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log("C" , myArr);
console.log(myn2);

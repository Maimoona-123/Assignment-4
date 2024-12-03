// Question : 1

const arr = [1, 2, 3, 4, 5, true, undefined];
const stringArr = arr.map(String);

console.log(stringArr); // Output: ['1', '2', '3', '4', '5', 'true', 'undefined']



// Question : 2

let array = [1, 2, 5, "string", true, null, 3, "hello", 42, undefined];

let numbersOnly = array.filter(item => typeof item === 'number');

console.log(numbersOnly); // [1, 2, 5, 3, 42]



// Question : 3

const Array = [1, 'hello', true, null, undefined, { name: 'Alice' }, [1, 2, 3]];

Array.forEach(element => {
  console.log(typeof element);
});



// Question : 4

const mixArr = [1, 'hello', 3, true, 5, null, 10, 'world',];

const sum = mixArr.reduce((acc, current) => {
  if (typeof current === 'number') {
    return acc + current;
  }
  return acc;
}, 0);

console.log(sum);



// Question : 5

const boolean = [1, true, 5, false, 'world', undefined];

const firstBoolean = array.find(element => typeof element === 'boolean');

console.log(firstBoolean);



// Question : 6

const findArr = [1, 'hello', true, { name: 'Alice' }, 5, { name: 'Bob' }, null];

const index = findArr.findIndex(element => typeof element === 'object' && element !== null);

console.log(index);



// Question : 7

const someArr = ['hello', true, 5, null, 'world'];

const containsNumber = someArr.some(element => typeof element === 'number');

console.log(containsNumber);  // Output: true



// Question : 8

const everyArr = ['hello', 'world', 'JavaScript'];

const allStrings = everyArr.every(element => typeof element === 'string');

console.log(allStrings);  // Output: true

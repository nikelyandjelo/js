'use strict'

const palindrome=str => {
	str = str.toLowerCase();
	return str === str.split('').reverse().join('');
}
let odin=palindrome('racecar');
let dva=palindrome('table');
let tri=palindrome('Анна');

console.log(odin);
console.log(dva);
console.log(tri);
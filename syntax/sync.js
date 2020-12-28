const fs = require('fs');

//readFileSync
/*
console.log('A');
const result = fs.readFileSync('./sample.txt', 'utf8'); sync가 있으면 비동기적
console.log(result);
console.log('C');
*/

console.log('A');
fs.readFile('./sample.txt', 'utf8', function(err, result){ // sync가 없으면 비동기적
    console.log(result);
});
console.log('C');
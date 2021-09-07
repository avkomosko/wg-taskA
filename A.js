let input = [1,3,1,4,5,8,9,10,12];

function solve(input) {
  let set = new Set(input);
  if (set.has(',')) {
    set.delete(',');
  }
  let array = Array.from(set);
  array.sort((a,b)=> a - b);
  console.log(array);
  
  function findSequence(arr) {
    let stack = [];
    for (let i = 1; i < arr.length; i++) {
      stack.push(arr[0]);
      if ((arr[i] !== stack[stack.length-1]+1 && arr[i]+1 === arr[i+1]) || (i === 0 && arr[i]+1 === arr[i+1])) {
        sequence.push('start');
      } else if (arr[i] === arr[i-1]+1 && arr[i]+1 !== arr[i+1]) {
        sequence.push('end');
      } else if (arr[i] === arr[i-1]+1 && arr[i]+1 === arr[i+1]){
        sequence.push('sequence');
      } else {
        return sequence.push(0);
      }
    }
    return sequence;
  }
 
  console.log(findSequence(array));
  return array;
}
solve(input);

const fs = require('fs')
const input = fs.readFileSync(0,
console.log(solve(input))
'utf-8')
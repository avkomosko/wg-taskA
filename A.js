let input = [1,3,1,4,5,8,9,10,11,12,15];

function solve(input) {
  let set = new Set(input);
  if (set.has(',')) {
    set.delete(',');
  }

  let array = Array.from(set);
  array.sort((a,b)=> a - b);
  
  function findSequence(arr) {
    let sequence =[];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr[i-1]+1 && arr[i]+1 === arr[i+1] && i!== 0) {
        sequence.push(0);
      } else if (arr[i] === arr[i-1]+1 && arr[i]+1 !== arr[i+1]) {
        sequence.push(2);
      } else if (arr[i] === arr[i-1]+1 && arr[i]+1 === arr[i+1]){
        sequence.push(1);
      } else {
        sequence.push(-1);
      }
    }
    return sequence;
  }
  
  function makeSequence(arr) {
    let arr2 = findSequence(arr);
    do {
      let start = 0;
      let end = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr2[i] === 0) {
          start = i;
        } else if (arr2[i] === 2) {
          end = i;
        }
      }
      if (end !== 0) {
        arr.splice(start, end-start+1, `${arr[start]}-${arr[end]}`);
        arr2.splice(start, end-start+1, -1);
      } 
    } while (arr2.includes(0));
  }

  makeSequence(array);
  return array.join(',');
}
solve(input);

const fs = require('fs')
const input = fs.readFileSync(0,
console.log(solve(input))
'utf-8')
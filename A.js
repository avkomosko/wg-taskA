let input = '1,3,5,8,10,9,2,4';

function solve(input) {
  let set = new Set(input.split(','));
  let array = Array.from(set);
  array = array.map(el => el = +el);
  array.sort((a,b)=> a - b);
  
  function findSequence(arr) {
    let sequence = arr.map((item, index) => item - index);
     
    // for (let i = 0; i < arr.length; i++) {
    //   sequence.push(arr[i] - i);
    // }

    return sequence;
  }
  console.log(findSequence(array));

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
        arr.splice(start, end - start + 1, `${arr[start]}-${arr[end]}`);
        arr2.splice(start, end - start + 1, -1);
      }
    } while (arr2.includes(0));
  }

  if (array.length >=3) {
    makeSequence(array);
  }
  
  return array.join(',');
}
solve(input);

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input));

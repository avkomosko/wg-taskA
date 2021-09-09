let input = '1,2,5,7,8,3,15,4,19,13,14,25,35,9,17,14,16,37,20,36';
let input2 = '1,3,6,9,11';
let input3 = '9,6,4,7,11,55,79,8,5,4,3,2,1,47';

function solve(input) {
  let set = new Set(input.split(','));
  let array = Array.from(set);
  array = array.map(el => el = +el);
  array.sort((a,b)=> a - b);
  
  function findSequence(arr) {
    let sequence = arr.map((item, index) => item - index);
		let stack = [];
    let map = new Map();
		for (let i = 0; i < sequence.length; i++) {
			let length = sequence.filter((item) => item === sequence[i]).length;
			if (length >= 3) {
        if (stack[stack.length - 1] !== length) {
          stack.push(length);
          map.set(i,length);
        }
			}
		}
    return map;
  }

  function joinSequence(arr) {
    let map = findSequence(arr);
    if (map.size !==0) {
      for (let i = arr.length-1; i >= 0; i--) {
        if (map.has(i)) {
          arr.splice(i, map.get(i), `${arr[i]}-${arr[i + map.get(i)-1]}`);
        }
      }
    }   
  }

  if (array.length >=3) {
    joinSequence(array);
  }
  
  return array.join(',');
}

solve(input);

const fs = require('fs');
const input = fs.readFileSync(0, 'utf-8');
console.log(solve(input));

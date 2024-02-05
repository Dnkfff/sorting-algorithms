'use strict';

// initialising start array
const A: number[] = [30, 19, 9, 15, 55, 24, 3, 78, 46, 41];

// creating 2 arrays to push arguments in
const oddA: number[] = [];
const evenA: number[] = [];

// loop for sorting A array and find odd and even elements
for (let value of A) {
  if (value & 1) {
    oddA.push(value);
  } else {
    evenA.push(value);
  }
}

// functions that provide sorting of our arrays 
const oddSorted: number[] = oddA.sort((a, b) => b - a);
const evenSorted: number[] = evenA.sort((a, b) => {if (a > b) return 1;if (a === b) return 0;if (a < b) return -1;return 0;});

// concating oddSorted and evenSorted
const done: number[] = evenSorted.concat(oddSorted);

// output on display
console.log('starting array ' + A);
console.dir('procedured task ' + done);

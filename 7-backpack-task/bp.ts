'use strict';

class Item {
  constructor(wi: number, vi: number){
    this.wi = wi;
    this.vi = vi;
  }
  wi: number;
  vi: number;
}

const max = (a: number, b: number): number => (a > b) ? a : b;

const fillInBackpack = (items: Item[], w: number): { cost: number, itemsInBackpack: Item[] } => {
  const n = items.length-1;
  const itemsInBackpack: Item[] = [];
  const v = (i: number, x: number): number => {
    if(i == -1) {
      return 0;
    }
    const a = v(i-1, x);
    let b = 0;
    let m = 0;
    if(x >= items[i].wi){
      b = v(i-1, x-items[i].wi) + items[i].vi;
      m = max(a, b);
      if(m === b){
        if(!itemsInBackpack.includes(items[i])){
          itemsInBackpack.push(items[i]);
        }
      } else {
        if(itemsInBackpack[itemsInBackpack.length-1] === items[i]){
          itemsInBackpack.pop();
        }
      }
    } else {
      m = a;
    }
    return m;
  }

  const cost = v(n, w);

  return { cost, itemsInBackpack };
}

const inputItems: [number, number][] = [
  [10, 12],
  [1, 2],
  [5, 6],
  [7, 16],
  [8, 4],
  [22, 40],
  [18, 15],
  [15, 30],
  [19, 25],
  [1, 1],
  [9, 9],
  [12, 6],
  [6, 12]
];
// inputed backpack "W" parameter
const w: number = 100;

// create items
const items: Item[] = [];
inputItems.forEach( item => {
  items.push(new Item(...item));
});

console.log('\n--- Input "W" parameter: ');
console.log(w);
console.log('--- Input items: ');
console.dir(items);

const {cost, itemsInBackpack} = fillInBackpack(items, w);

console.log('\n--- Cost items in backpack: ');
console.log(cost);
console.log('--- Items in backpack: ');
console.dir(itemsInBackpack);
console.log('\n');

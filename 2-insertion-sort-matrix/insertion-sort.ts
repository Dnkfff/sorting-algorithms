const input: number[][] = [
  [0, 1 ,5, 3, 3],
  [3, 7, 2, 1, 2],
  [5, 2, 4, 3, 1],
  [1, 2, 3, 4, 5],
  [6, 4, 3, 1, 5]
];

const inversions = (arr: number[]): number => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) count++;
    }
  }  
  return count;
};

const compare = (matrix: number[][], x: number): void => {
  const list: [number, number][] = [];
  const diffs: [number, number][] = [];
  
  for (let i = 0; i < matrix.length; i++) {
    const user = matrix[i];
    const inv = inversions(user);
    list.push([i, inv]);
  };
  
  const inv_x = list[x][1];
  
  for (let i = 0; i < list.length; i++) {
    if (i !== x) {
      const diff = Math.abs(inv_x - list[i][1]);
      diffs.push([i, diff]);
    }  
  }
  
  diffs.sort((a, b) => a[1] - b[1]);
  console.log(`User: ${x} Inversions: ${inv_x}`)
  diffs.forEach((val) => {
    const user = val[0];
    console.log(list[user]);
  })
}

compare(input, 4);

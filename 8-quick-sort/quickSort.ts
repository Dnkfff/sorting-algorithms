let myArray: number[] = [3, 7, 2, 5, 1, 4, 6, 8];

const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot: number = arr[0];
    let leftArr: number[] = [];
    let rightArr: number[] = [];
  
    for (let i: number = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i]);
      }
    }
  
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };

console.log(quickSort(myArray))

const arr: number[] = [233, 1231, 2, 1, 54, 23, 22, 12, 56];
const array: string[] = ["a", "b", "c", "d", "j", "a", "2", "1"];

const BackBubbleSort = (arr: number[] | string[]): (number | string)[] => {
    for (let i: number = arr.length; i > 0; i--) {
        for (let j: number = 0; j < i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const tmp: number | string = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(BackBubbleSort(array));
console.log(BackBubbleSort(arr));

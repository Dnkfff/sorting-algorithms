"use strict";

 const arr = [233, 1231, 2, 1, 54, 23, 22, 12, 56];
const array = ["a", "b", "d", "j", "a", "2", "1",];

const bubble = (arr) => {
    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    return arr;
}

console.log(bubble(array));



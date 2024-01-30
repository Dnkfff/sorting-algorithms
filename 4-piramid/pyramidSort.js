'use strict'

function Piramida(arr) {
    let temp = [];
    let k = 1;
    while (k <= arr.length) {
        temp = [];
        for ( let i = 0; i < k; i++) {
            temp.push(arr[i]);
        }
        temp.sort();
        if (temp.length % 2 != 0) {
            console.log(temp[Math.floor(temp.length/2)]);
        }
        else {
            console.log(temp[Math.floor(temp.length/2)-1], temp[Math.floor(temp.length/2)]);
        }
        k++;
    }
}

Piramida([1,2,3,4,5]);

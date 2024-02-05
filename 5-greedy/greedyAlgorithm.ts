'use strict';

//implementation of the greedy algorithm for the traveling salesman task
function DFS(matrix: number[][], a: number): number[] {
    let stack: number[] = [];
    let k: number = 1;
    let numbersOfPoint: number[] = [];
    let activePoint: number = 0;
    let flag: boolean = true;

    for (let i: number = 0 ; i < matrix.length; i++) {
        numbersOfPoint[i] = 0;
    }

    numbersOfPoint[a-1] = 1; 
    stack.push(a-1);

    while (stack.length > 0) {
        flag = true;
        activePoint = stack[stack.length -1];
        for (let i: number = 0 ; i < matrix.length; i++) {
            if (matrix[activePoint][i] !== 0 && numbersOfPoint[i] === 0) {
                k++;
                numbersOfPoint[i] = k;
                stack.push(i);
                flag = false;
                break;
            }
        }
        if (flag) {
            stack.pop();
        }
    }
    return numbersOfPoint;
};

function minTree(matrix: number[][]): number[][] {
    let result: number[][] = [];
    let array: string[][] = [];
    let mnoj: string[][] = [];
    let obj: {[key: string]: number} = {};
    let count: number = 0;
    let flag: boolean = true;
    let plus: boolean = true;
    let flagarr: number[] = [];

    for (let i: number = 0 ; i < 100; i++) {
        array[i] = [];
    }

    for (let i: number = 0 ; i < matrix.length; i++) {
        result[i] = [];
        for (let j: number = 0 ; j < matrix.length; j++) {
            result[i][j]= 0;
        }
    }

    for (let i: number = 0 ; i < matrix.length; i++) {
        for (let j: number = i+1 ; j < matrix.length; j++) {
            if ( matrix[i][j] !== 0) {
                obj[`${i}${j}`] = matrix[i][j];
            }
        }
    }
for (let key in obj) {
    array[obj[`${key}`]].push(key);
}

//starting our iteration from nodes which have smallest length
 for (let i: number = 0 ; i < array.length; i++ ) {

    //on each step of iteration checking is number of checked nodes != matrix length
    flagarr = 0;
    count = 0;
    flagarr = DFS(result,1);
    console.log(flagarr);
     for (let j: number = 0 ; j < flagarr.length; j++) {
         if (flagarr[j] !== 0 ) {count++;}
     }
     if (count === matrix.length) break;

    if ( array[i][0] !== undefined ) {

        //Перебираємо усі ребра що мають однакову довжину
        for (let q: number = 0; q < array[i].length; q++) {
            flag = true;
            plus = true;
            for (let j: number = 0 ; j < mnoj.length; j++){
                if ( mnoj[j].includes(array[i][q][0]) && mnoj[j].includes(array[i][q][1]) ) {flag = false; break }

                else if ( mnoj[j].includes(array[i][q][0]) &&  !mnoj[j].includes(array[i][q][1]))  { plus = false;mnoj[j].push(array[i][q][1]);break }

                else if ( !mnoj[j].includes(array[i][q][0]) && mnoj[j].includes(array[i][q][1]) ) { plus = false;mnoj[j].push(array[i][q][0]);break }
        }

        if (plus === true && flag === true) {mnoj.push([array[i][q][0], array[i][q][1]])}

        if (flag === true) {result[array[i][q][0]][array[i][q][1]] = i; result[array[i][q][1]][array[i][q][0]] = i}

    }
    }
}

return result;

}
console.log(minTree([
    [0,6,1,5,0,0],
    [6,0,5,0,3,0],
    [1,5,0,5,6,4],
    [5,0,5,0,0,2],
    [0,3,6,0,0,6],
    [0,0,4,2,6,0]
]));
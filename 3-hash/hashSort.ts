function HashTable(size: number = 13): any {
    const store: any[] = [];

    function hash(string: string): number {
        let index: number = 0;
        for (let i: number = 0; i < string.length; i++) {
            index += string.charCodeAt(i) * (i + 1);
        }
        return index % size;
    }

    function findMatchingIndex(list: any[], key: string): number | null {
        for (let i: number = 0; i < list.length; i++) {
            if (list[i][0] === key) {
                return i;
            }
        }
        return null;
    }

    return {
        getElement(key: string): any {
            const index: number = hash(key);

            if (store[index]) {
                const list: any[] = store[index];
                const matchingIndex: number | null = findMatchingIndex(list, key);
                if (matchingIndex !== null) return list[matchingIndex][1];
            }
        },
        setElement(key: string, value: any): void {
            const index: number = hash(key);
            if (!store[index]) {
                store[index] = [[key, value]];
            } else {
                const list: any[] = store[index];
                const matchingIndex: number | null = findMatchingIndex(list, key);
                if (matchingIndex !== null) {
                    list[matchingIndex] = [key, value];
                    return;
                }
                list.push([key, value]);
            }
        },
        dump(): any[] {
            return store;
        },
    };
}

const ht: any = HashTable();

function search(arr: number[], int: number): void {
    let count: boolean = false;
    for (let i: number = 0; i < arr.length; i++) {
        for (let j: number = i + 1; j < arr.length; j++) {
            ht.setElement(`${i + 1}` + `${j + 1}`, arr[i] + arr[j]);
            if (ht.getElement(`${i + 1}` + `${j + 1}`) === int) count = true;
        }
    }
    console.log(count);
}

search([1, 2, 3, 4], 5);

console.log(ht.dump());

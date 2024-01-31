function HashTable(size = 13) {
    const store = [];

    function hash(string) {
        let index = 0;
        for ( let i = 0; i < string.length; i++) {
            index += string.charCodeAt(i) * (i+1);
        }
        return index % size ;

    }
    function findMatchingIndex(list, key) {
        for ( let i = 0; i < list.length; i++) {
            if ( list[i][0] === key ) {
                return i;
            }
        }
    }
    return {
        getElement(key) {
            const index = hash(key);

            if (store[index]) {
                const list = store[index];
                const matchingIndex = findMatchingIndex(list, key);
                if (matchingIndex !== null) return list[matchingIndex][1];   
            }

        },
        setElement(key, value) {
            const index = hash(key);
            if (!store[index]) {
                store[index] = [[key, value]];
            }
            else {
                const list = store[index];
                const matchingIndex = findMatchingIndex(list, key);
                if (matchingIndex !== null) {
                    list[matchingIndex] = [key, value];
                    return;
                }

                list.push([key, value]);
            }

        },
        dump() {
            return store;
        },
    }
}

const ht = new HashTable();

function search (arr, int) {
    let count = false;
    for (let i = 0 ; i < arr.length; i++) {
        for ( let j = i+1; j < arr.length; j++) {
            ht.setElement(`${i+1}`+`${j+1}`, arr[i] + arr[j])
            if (ht.getElement(`${i+1}`+`${j+1}`) === int) count = true;
        }
    }
    console.log(count);
};

search([1,2,3,4], 5);

console.log(ht.dump());

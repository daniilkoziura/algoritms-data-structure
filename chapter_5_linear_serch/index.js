const data = ['a', 'b', 'c', 'd'];

const linearSearch = (list, item) => {
    for (const [i, element] of list.entries()) {
        if (element === item) {
            return i;
        }
    }
}


const key = linearSearch(data, 'd');


console.log(`${key}:${data[key]}`);
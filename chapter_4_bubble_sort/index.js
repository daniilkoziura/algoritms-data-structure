function bblSort(arr) {
    let checkSwap = false;
    for (let i = 0; i < arr.length; i++) {
        // checkSwap = false;
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                checkSwap = true;
            }
        }
        // console.log(checkSwap);
        if (!checkSwap) {
            console.log(checkSwap);
            break;
        }
    }
    console.log(arr)
    return arr;
}

// const arr = [3, 5, 8, 7, 1, 4];
const arr = [1,2,3,4,5,6];
// const arr = [1,2,3,4,5,6];

bblSort(arr);



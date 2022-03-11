const insertionSort = (arr) => {
    if (!arr) throw new Error('Cannot sort the array.');
    if (!arr.length || arr.length === 1) return arr;

    let index, item, j;
    for (index = 1; index < arr.length; index++) {
        item = arr[index];
        j = index - 1;

        while (j >= 0 && arr[j] > item) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = item;
    }

    return arr;
};

module.exports = {
    insertionSort,
}
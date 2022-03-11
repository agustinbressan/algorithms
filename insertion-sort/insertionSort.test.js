const { insertionSort } = require('./insertionSort');

test('given null value, when insertion sort is applied, it should return an error', () => {
    try {
        insertionSort(null);

        // I left this message just because it is cool lol
        throw new Error('I have failed you, Anakin');
    } catch (err) {
        expect(err.message).toBe('Cannot sort the array.');
    }
});

test('given undefined value, when insertion sort is applied, it should return an error', () => {
    try {
        insertionSort(undefined);

        // I left this message just because it is cool lol
        throw new Error('I have failed you, Anakin');
    } catch (err) {
        expect(err.message).toBe('Cannot sort the array.');
    }
});

test('given an empty array, when insertion sort is applied, it should return an empty array', () => {
    const result = insertionSort([]);

    expect(result).toEqual([]);
});

test('given an array with 1 item, when insertion sort is applied, it should return the same array', () => {
    const result = insertionSort([1]);

    expect(result).toEqual([1]);
});

test('given an unsorted array of 3 items, when insertion sort is applied, it should return the sorted version', () => {
    const arr = [100, 91, 5];

    const result = insertionSort(arr);

    expect(result).toEqual([5, 91, 100]);
});

test('given an unsorted array of items, when insertion sort is applied, it should return the sorted version', () => {
    const arr = [100, 91, 5, -3, 7, 35];

    const result = insertionSort(arr);

    expect(result).toEqual([-3, 5, 7, 35, 91, 100]);
});
const { bubbleSort } = require('./bubbleSort');

test('given null value, when bubble sort is applied, it should return an error', () => {
    try {
        bubbleSort(null);

        // I left this message just because it is cool lol
        throw new Error('I have failed you, Anakin');
    } catch (err) {
        expect(err.message).toBe('Cannot sort the array.');
    }
});

test('given undefined value, when bubble sort is applied, it should return an error', () => {
    try {
        bubbleSort(undefined);

        // I left this message just because it is cool lol
        throw new Error('I have failed you, Anakin');
    } catch (err) {
        expect(err.message).toBe('Cannot sort the array.');
    }
});

test('given an empty array, when bubble sort is applied, it should return an empty array', () => {
    const arr = [];

    const result = bubbleSort(arr);

    expect(result).toEqual([]);
});

test('given an array with 1 item, when bubble sort is applied, it should return an array with 1 item', () => {
    const arr = [1];

    const result = bubbleSort(arr);

    expect(result).toEqual([1]);
});

test('given an array with all 0 items, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [0, 0, 0, 0];

    const result = bubbleSort(arr);

    expect(result).toEqual([0, 0, 0, 0]);
});

test('given an array with 2 items, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [15, -2];

    const result = bubbleSort(arr);

    expect(result).toEqual([-2, 15]);
});

test('given an array with 3 items, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [15, -2, 30];

    const result = bubbleSort(arr);

    expect(result).toEqual([-2, 15, 30]);
});

test('given an array with 2 equal items, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [7, 7];

    const result = bubbleSort(arr);

    expect(result).toEqual([7, 7]);
});

test('given an array with repetitive items, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [100, 6, 5, 7, 7, 1, 2, 7];

    const result = bubbleSort(arr);

    expect(result).toEqual([1, 2, 5, 6, 7, 7, 7, 100]);
});

test('given an unsorted array, when bubble sort is applied, it should return the sorted version', () => {
    const arr = [5, 100, 77, 65];

    const result = bubbleSort(arr);

    expect(result).toEqual([5, 65, 77, 100]);
});
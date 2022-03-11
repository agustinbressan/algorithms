const { binarySearch } = require('./binarySearch');

test('given a NOT sorted array, when the item exists, should return an Error', () => {
    const arr = [7, 2, 100, 36];
    const looksFor = 36;
    try {
        binarySearch(arr, looksFor);
    } catch (err) {
        expect(err.message).toBe('Cannot find the element in the array');
    }
});

test('given a sorted array, when the item NOT exists, should return an Error', () => {
    const arr = [0, 1, 2];
    const looksFor = 3;
    try {
        binarySearch(arr, looksFor);
    } catch (err) {
        expect(err.message).toBe('Cannot find the element in the array');
    }
});

test('given an empty array, when try to search, should return an Error', () => {
    const arr = [];
    const looksFor = 36;
    try {
        binarySearch(arr, looksFor);
    } catch (err) {
        expect(err.message).toBe('Cannot find the element in the array');
    }
});

test('given a sorted array (DESC), when the item exists, should return an Error', () => {
    const arr = [7, 5, 3, 2, 1];
    const looksFor = 2;

    try {
        binarySearch(arr, looksFor);
    } catch (err) {
        expect(err.message).toBe('Cannot find the element in the array');
    }
});

test('given a sorted array, when the item exists, should return the expected item', () => {
    const arr = [0, 1, 2];
    const looksFor = 1;

    const result = binarySearch(arr, looksFor);

    expect(result).toBe(1);
});

test('given a sorted array, when the item exists, should return the expected item when is the first one', () => {
    const arr = [0, 1, 2];
    const looksFor = 0;

    const result = binarySearch(arr, looksFor);

    expect(result).toBe(0);
});

test('given a sorted array, when the item exists, should return the expected item when is the last one', () => {
    const arr = [0, 1, 2];
    const looksFor = 2;

    const result = binarySearch(arr, looksFor);

    expect(result).toBe(2);
});

test('given a sorted array of 1 item, when looks for the only item, should return the expected item', () => {
    const arr = [0];
    const looksFor = 0;

    const result = binarySearch(arr, looksFor);

    expect(result).toBe(0);
});
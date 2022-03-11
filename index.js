const { binarySearch } = require('./binary-search/binarySearch');
const { bubbleSort } = require('./bubble-sort/bubbleSort');
const { insertionSort } = require('./insertion-sort/insertionSort');

const binarySearchExample = () => {
    const arr = [1, 2, 3, 4, 5];
    console.log('1) Binary Search algorithm. Given an arr [1, 2, 3, 4, 5], search for 2 and 4.');
    console.log(`binarySearch([${arr}], 2) => `, binarySearch(arr, 2));
    console.log(`binarySearch([${arr}], 4) => `, binarySearch(arr, 4));
};

const bubbleSortExample = () => {
    console.log('2) Bubble Sort algorithm.');
    console.log(`bubbleSort([${[105, 100, 77, 65]}]) => `, bubbleSort([105, 100, 77, 65]));
    console.log(`bubbleSort([${[100, 6, 5, 7, 7, 1, 2, 7]}]) => `, bubbleSort([100, 6, 5, 7, 7, 1, 2, 7]));
};

const insertionSortExample = () => {
    console.log('3) Insertion Sort algorithm.');
    console.log(`insertionSort([${[105, 100, 77, 65]}]) => `, insertionSort([105, 100, 77, 65]));
    console.log(`insertionSort([${[100, 6, 5, 7, 7, 1, 2, 7]}]) => `, insertionSort([100, 6, 5, 7, 7, 1, 2, 7]));
};

const examples = () => {
    binarySearchExample();
    bubbleSortExample();
    insertionSortExample();
};

examples();

// Binary search algorithm (recursive), also known as half-interval search, logarithmic search, or binary chop.
function binarySearch(searchArr, item) {
    if (!searchArr.length || searchArr.length === 1 && searchArr[0] !== item) throw Error('Cannot find the element in the array');

    const pivotIndex = Math.floor(searchArr.length / 2);
    const pivot = searchArr[pivotIndex];

    if (item === pivot) return pivot;

    if (item < pivot) {
        return binarySearch(searchArr.splice(0, pivotIndex), item);
    } else {
        return binarySearch(searchArr.splice(pivotIndex, searchArr.length), item);
    }
}

module.exports = {
    binarySearch
};
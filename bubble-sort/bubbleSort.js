const bubbleSort = (auxArr) => {
    if (!auxArr) throw new Error('Cannot sort the array.');

    let swapped = true;
    while (swapped) {
        let index = 0;
        swapped = false;
        while (index < auxArr.length - 1) {
            if (auxArr[index] > auxArr[index + 1]) {
                // Swap items
                const aux = auxArr[index + 1];
                auxArr[index + 1] = auxArr[index];
                auxArr[index] = aux;

                swapped = true;
            }

            index++;
        }
    }
    return auxArr;
};

module.exports = {
    bubbleSort,
}
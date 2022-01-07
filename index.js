/**
 * sortholes module.
 * @module testtask-sortholes/index
 */
function countHolesNumber(currentNumber) {
    /**
     * The function returns number of holes.
     * @param {number} currentNumber - Number.
     * @return {number} numberHoles - Number of holes.
     */
    let numberHoles = 0;
    let wholeRart = currentNumber;
    let remainder;
    while (wholeRart != 0) {
        remainder = wholeRart % 10;
        wholeRart = Math.trunc(wholeRart / 10);
        if (remainder === 8) {
            numberHoles += 2;
        }
        ;
        numberHoles += 1;
    }
    ;
    return numberHoles;
}
;
function sortNumbersHoles(sortArray) {
    /**
     * The function returns sorted arrays of numbers.
     * @param {Array<number>} sortArray - Array of numbers to sort.
     * @return {Array<number>} sortArray - Sorted array of numbers.
     */
    let tempArray = [];
    for (let i = 0; i < sortArray.length; i += 1) {
        let numHoles = countHolesNumber(sortArray[i]);
        if (tempArray[numHoles] === undefined) {
            tempArray[numHoles] = [sortArray[i]];
            continue;
        }
        ;
        tempArray[numHoles].push(sortArray[i]);
    }
    ;
    sortArray = [];
    for (let j = 0; j < tempArray.length; j += 1) {
        if (tempArray[j] !== undefined) {
            for (let k = 0; k < tempArray[j].length; k += 1) {
                sortArray.push(tempArray[j][k]);
            }
            ;
        }
        ;
    }
    ;
    return sortArray;
}
;
let testArray = [888, 44444, 88, 666, 99, 0]; // sortArray = [0, 99, 666, 88, 44444, 888]
console.log('Тестовый массив: ' + testArray);
console.log('Отсортированный массив: ' + sortNumbersHoles(testArray));

/**
 * sortholes module.
 * @module testtask-sortholes/index
 */

function countHolesNumber(currentNumber: number): number {
  /**
   * The function returns number of holes.
   * @param {number} currentNumber - Number.
   * @return {number} numberHoles - Number of holes.
   */
  let numberHoles: number = 0;
  let wholeRart: number = currentNumber;
  let remainder: number;
  while (wholeRart != 0) {
    remainder = wholeRart % 10;
    wholeRart = Math.trunc(wholeRart / 10);
    if (remainder === 8) {
      numberHoles += 2;
      continue;
    };
    numberHoles += 1;
  };
  return numberHoles;
};

function sortNumbersHoles(sortArray: number[]): number[] {
  /**
   * The function returns sorted arrays of numbers.
   * @param {Array<number>} sortArray - Array of numbers to sort.
   * @return {Array<number>} sortArray - Sorted array of numbers.
   */
  let tempArray: Array<number[]> = [];
  for (let i: number = 0; i < sortArray.length; i += 1) {
    let numHoles: number = countHolesNumber(sortArray[i]);
    if (tempArray[numHoles] === undefined) {
      tempArray[numHoles] = [sortArray[i]];
      continue;
    };
    tempArray[numHoles].push(sortArray[i]);
  };
  sortArray = [];
  for (let j: number = 0; j < tempArray.length; j += 1) {
    if (tempArray[j] !== undefined) {
      for (let k: number = 0; k < tempArray[j].length; k += 1) {
        sortArray.push(tempArray[j][k]);
      };
    };
  };
  return sortArray;
};

let testArray: number[] = [469089, 888, 44444, 4444, 86, 8, 9, 0];
// sortArray = [0, 9, 8, 86, 4444, 44444, 888, 469089]
console.log('Тестовый массив: ' + testArray);
console.log('Отсортированный массив: ' + sortNumbersHoles(testArray));
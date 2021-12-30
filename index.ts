function countHolesNumber(currentNumber: number): number {
  let numberHoles: number = 0;
  let wholeRart: number = currentNumber;
  let remainder: number;
  while (wholeRart != 0) {
    remainder = wholeRart % 10;
    wholeRart = Math.trunc(wholeRart / 10);
    if (remainder === 8) {
      numberHoles += 2; 
    };
    numberHoles += 1;
  };
  return numberHoles;
};

function sortNumbersHoles(sortArray: number[]): number[] {
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

let testArray: number[] = [888, 44444, 88, 666, 99, 0];

console.log(testArray);
console.log(sortNumbersHoles(testArray));
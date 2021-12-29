function countHolesNumber(currentNumber: number): number {
  let currentNumberStr: string = String(currentNumber);
  //console.log(currentNumberStr);
  let numberHoles: number = currentNumberStr.length;
  for (let i:number = 0; i < currentNumberStr.length; i += 1) {
    if (currentNumberStr[i] === '8') {
      numberHoles += 1;
    };
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

let testArray: number[] = [88, 444, 400, 666, 999, 44, 4];

console.log(testArray);
console.log(sortNumbersHoles(testArray));
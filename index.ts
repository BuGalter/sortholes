function countHolesNumber(currentNumber: number): number {
  let currentNumberStr: string = String(currentNumber);
  let numberHoles: number = currentNumberStr.length;
  for (let i:number; i < currentNumberStr.length; i += 1) {
    if (currentNumberStr[i] === '8') {
      numberHoles += 1;
    };
  };
  return numberHoles;
};

function sortNumbersHoles(sortArray: number[]): number[] {
  let tempArray: Array<number[]> = [];
  for (let i: number; i < sortArray.length; i += 1) {
    let numHoles: number = countHolesNumber(sortArray[i]);
    if (tempArray[numHoles] === undefined) {
      tempArray[numHoles] = [sortArray[i]];
    };
    tempArray[numHoles].push(sortArray[i]);
  };
  for (let j: number; j < tempArray.length; j += 1) {
    if (tempArray[j] !== undefined) {
      for (let k: number; k < tempArray[j].length; k += 1) {
        sortArray.push(tempArray[j][k]);
      };
    };
  };
  return sortArray;
};
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

function sortNumbersHoles(inputArray: number[]): number[] {
  return
};
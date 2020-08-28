type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

type User = {
  name: string,
  age: number
};

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
): Combinable => {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') result = +input1 + +input2;
  else result = input1.toString() + input2.toString();

  return result;
  // if (resultConversion === 'as-number') return +result;
  // return result.toString();
};

const combineAges = combine(30, 26, 'as-number');
console.log(combineAges);

const combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);

const combineNames = combine('Max', 'Nika', 'as-text');
console.log(combineNames);
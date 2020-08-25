const add = (
  n1: number,
  n2: number,
  print: boolean,
  phrase: string
): number | void => {
  const result = n1 + n2
  if (print) console.log(phrase, result)
  else return result;
};

const num1 = 1;
const num2 = 2.4;
const printResult = true;
const resultPhrase = 'The result is: ';

// console.log(add(num1, num2));
add(num1, num2, printResult, resultPhrase);

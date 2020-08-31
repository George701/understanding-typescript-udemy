const add = (n1: number, n2: number) => n1 + n2;

const printResult = (num: number): void => console.log('The result is ' + num);

printResult(add(7,6));

let combineValues: (x: number, y: number) => number;

combineValues = add;

console.log(combineValues(8, 8));

const addAndHandle = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

addAndHandle(10, 15, (result) => {
  console.log(result)
});
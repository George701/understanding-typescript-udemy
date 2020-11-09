const names: Array<string> = ['Max', 'Manu'];
// OR
// const names: string[] = ['Max', 'Manu']
names[0].split('');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000)
// });

function merge<T, U>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  }
};

const merged = merge({name: 'Max', hobbies: ['sports']}, {age: 30})
console.log(merged);
console.log(merged.name);
console.log(merged.age);

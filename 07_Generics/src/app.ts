const names: Array<string> = ['Max', 'Manu'];
// OR
// const names: string[] = ['Max', 'Manu']
names[0].split('');

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done')
//   }, 2000)
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return {
    ...objA,
    ...objB,
  }
};

const merged = merge({name: 'Max', hobbies: ['sports']}, {age: 30})
console.log(merged);
console.log(merged.name);
console.log(merged.age);

interface Lengthly {
  length: number;
}

function countAndDescribe<T extends Lengthly>(element: T): [T, string] {
  let descriptionText = 'Got no value';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 0) {
    descriptionText = 'Got ' + element.length + ' elements';
  }
  return [element, descriptionText]
};

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
};

extractAndConvert({ name: 'Max' }, 'name');



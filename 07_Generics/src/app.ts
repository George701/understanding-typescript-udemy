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

// beter usage for primitive types
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) return;
    this.data.splice(this.data.indexOf(item), 1);
  }

  getData() {
    return [...this.data];
  }
};

const textStorage = new DataStorage<string>();
textStorage.addItem('Max');
textStorage.addItem('Manu');
textStorage.addItem('Jose');
textStorage.removeItem('Max');
console.log(textStorage.getData());

// const objStorage = new DataStorage<object>();
// const objManu = { name: 'Manu'};
// objStorage.addItem({ name: 'Max'});
// objStorage.addItem(objManu);
// objStorage.addItem({ name: 'Jose'});
// objStorage.removeItem(objManu);
// console.log(objStorage.getData());


function Logger(logTarget: string){
  console.log('Logger factory');
  return function(constructor: Function) {
    console.log('Logging: ', logTarget);
    console.log(constructor);
  }
}

function WithTemplate(template: string, hookId: string){
  console.log('Template factory');
  return function<T extends {new(...args: any[]): { name: string }}>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log('Rendering template')
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
    }
  }
}

@Logger('Person')
@WithTemplate('<h1>Person<h1>', 'root')
class Person {
  name = 'Max';

  constructor(){
    console.log('Creating person object...');
  }
};

const pers = new Person();
console.log(pers);

// ---

function LogProp(target: any, propertyName: string | Symbol) {
  console.log('-- Property decorator --');
  console.log(target, propertyName);
};

function LogAccessor(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('-- Accessor decorator --');
  console.log(target);
  console.log(name);
  console.log(descriptor);
};

function LogMethod(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('-- Method decorator --');
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function LogParam(
  target: any,
  name: string | Symbol,
  position: number
) {
  console.log('-- Parameter decorator --');
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @LogProp
  title: string;
  private _price: number;

  @LogAccessor
  set price(val: number){
    if(val > 0) {
      this._price = val;
    } else {
      throw Error('Invalid price, it cannot be negative number!');
    }
  }

  constructor(t: string, p: number){
    this.title = t;
    this._price = p;
  };

  @LogMethod
  getPriceWithTax(@LogParam tax: number){
    return this._price * (this._price / 100 * tax);
  }
}

const p1 = new Product('Book', 29.99);
const p2 = new Product('Magazine', 19.99);
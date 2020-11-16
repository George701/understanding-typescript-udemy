function Logger(logTarget: string){
  return function(constructor: Function) {
    console.log('Logging: ', logTarget);
    console.log(constructor);
  }
}

@Logger('Person')
class Person {
  name = 'Max';

  constructor(){
    console.log('Creating person object...');
  }
};

const pers = new Person();
console.log(pers);
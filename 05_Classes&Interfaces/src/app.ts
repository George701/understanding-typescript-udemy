// interfaces CAN be replaced by custom types
// BUT they are not the same thing
// Interfaces are specifically bounded with objects
// while custom types are flexible 
interface Name {
  readonly name: string;
};

interface Greeting extends Name {
  greet: (s: string) => void;
};

// It is possible to inherit or extend only one thing
// While class may implements MULTIPLE interfaces
class Person implements Greeting {
  name: string;
  age = 30;
  constructor(n: string){
    this.name = n;
  }

  greet(phrase: string) {
    console.log('Hello ' + name + '! ' + phrase);
  }
}

let user1: Greeting;

user1 = new Person('George');

user1.greet('I am developer');
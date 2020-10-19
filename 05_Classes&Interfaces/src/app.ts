interface Person {
  name: string;
  age: number;

  greet: (s: string) => void;
};

let user1: Person;

user1 = {
  name: 'Max',
  age: 34,
  greet(p: string){
    console.log(p + ' ' + name);
  }
}
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;
// OR
// interface ElevatedEmployee extends Employee, Admin {};

const e1: ElevatedEmployee = {
  name: 'Mikko',
  privileges: ['create-project'],
  startDate: new Date()
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function overloads
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable){
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const resultOne = add(1,5);
// const resultTwo = add('Walter', 'White') as string;
const resultTwo = add('Walter', ' White');
resultTwo.split(' ');

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee){
  console.log('Name: ' + emp.name);
  if ('privileges' in emp){
    console.log('Privileges: ' + emp.privileges);
  }
  if ('startDate' in emp){
    console.log('Start Date: ' + emp.startDate);
  }
};

printEmployeeInformation(e1);

class Car {
  drive(){
    console.log('Driving...')
  }
}

class Truck {
  drive(){
    console.log('Driving a truck...')
  }
  loadCargo(amount: number){
    console.log('Loading cargo...' + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(v: Vehicle){
  v.drive();
  if (v instanceof Truck) {
    v.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

// Discriminated union - one common property for class/interface
interface Bird {
  type: 'bird',
  flyingSpeed: number;
}

interface Horse {
  type: 'horse',
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch(animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
      break;
  }
  console.log('Moving with speed: ' + animal);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

const paragraph = document.getElementById('message-output');
// const input = <HTMLInputElement>document.getElementById('user-input')!;
const input = <HTMLInputElement>document.getElementById('user-input')! as HTMLInputElement;
input.value = 'Hi';

interface ErrorContainer {
  [prop: string]: string;
}

const errorBug: ErrorContainer = {
  email: 'Not a user name',
  username: 'Must start from capital letter'
}
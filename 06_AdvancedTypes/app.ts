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
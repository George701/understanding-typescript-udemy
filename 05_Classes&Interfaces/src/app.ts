abstract class Department {
  // private name: string;
  static fiscalYear = 2020;
  protected employees: string[] = [];
  
  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  };

  static createEmployee(name: string){
    return {name: name}
  };

  abstract describe(this: Department): void;

  addEmployee = (employee: string) => {
    this.employees.push(employee);
  };

  printEmployeeInfo = () => {
    console.log(this.employees.length);
    console.log(this.employees);
  }
};

class ITDepartment extends Department{
  // constructor of Department is automatically used
  constructor(id: string, public admin: string[]){
    super(id, 'IT'); // super always go first
  };

  describe = () => {
    console.log('IT Department ID: ', this.id);
  }
}

class AccountingDepartment extends Department{
  private lastReport: string;

  get mostRecentReport(){
    if (!!this.lastReport) return this.lastReport;
    throw new Error('No report found')
  }

  set mostRecentReport(value){
    if (!value) throw new Error('Please pass in a valid value');

    this.addReports(value);
  }
  // constructor of Department is automatically used
  constructor(id: string, public reports: string[]){
    super(id, 'Accounting'); // super always go first
    this.lastReport = reports[0];
  };

  describe = () => {
    console.log('Accounting Department ID - ', this.id);
  };

  addEmployee = (name: string) => {
    if (name === 'Max') return;

    // private properties cannot be inherited
    this.employees.push(name);
  };

  addReports = (text: string) => {
    this.reports.push(text);
    this.lastReport = text;
  };

  printReports = () => {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Marvin');
console.log(employee1);
console.log(Department.fiscalYear);

const learningDp = new ITDepartment('01', ['Max']);

const accounting = new AccountingDepartment('01', []);

accounting.mostRecentReport = 'Lol';
accounting.describe();
// console.log(accounting.mostRecentReport);

// learningDp.addEmployee('Karen Brown');
// learningDp.addEmployee('John Doe');

// learningDp.describe();
// learningDp.printEmployeeInfo();
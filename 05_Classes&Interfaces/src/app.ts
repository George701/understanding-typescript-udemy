class Department {
  // private name: string;
  private employees: string[] = [];
  
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  };

  describe(this: Department){
    console.log(`Department ${this.id}: ${this.name}`);
  };

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
  }
}

class AccountingDepartment extends Department{
  // constructor of Department is automatically used
  constructor(id: string, public reports: string[]){
    super(id, 'Accounting'); // super always go first
  };

  addReports = (text: string) => {
    this.reports.push(text);
  };

  printReports = () => {
    console.log(this.reports);
  }
}

const learningDp = new ITDepartment('01', ['Max']);

const accounting = new Department('01', 'Accounting');

learningDp.addEmployee('Karen Brown');
learningDp.addEmployee('John Doe');

learningDp.describe();
learningDp.printEmployeeInfo();
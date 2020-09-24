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
const accounting = new Department('01', 'Accounting');

accounting.addEmployee('Karen Brown');
accounting.addEmployee('John Doe');

accounting.describe();
accounting.printEmployeeInfo();
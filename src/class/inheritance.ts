class Department {
  // private readonly id: string;
  // public name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    //
    super(id, "IT");
    // 다른 클래스로부터 상속받는 클래스에 고유 생성자를 추가할 경우 super 키워드를 추가하여 함수처럼 실행해야 한다.
    // super는 기본 클래스(프로토타입)의 생성자를 호출한다.(Department 클래스의 constructor)
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d2", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

it.describe();
it.printEmployeeInformation();
// 2
// ['Max', 'Manu']

console.log(it);
// ITDepartment {id: 'd2', name: 'IT', employees: Array(2), admins: Array(1)}
// Department 클래스에 있는 항목에 admins라는 ITDepartment의 고유 항목이 추가되어 출력된다.

const accounting = new AccountingDepartment("d1", []);

accounting.addReport("Something went wrong...");
accounting.printReports();
console.log(accounting);
// AccountingDepartment {id: 'd1', name: 'Accounting', employees: Array(0), reports: Array(1)}
// ITDepartment에 있는 admins 속성은 나타나지 않고, 고유 속성인 reports가 출력된다.

// export {};

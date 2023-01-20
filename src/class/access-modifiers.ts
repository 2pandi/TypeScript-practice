class Department {
  name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';
// Department 클래스에 employees 속성이 public(기본)일 때는 클래스 외부에서 접근이 가능하다.
// addEmployee가 유효성 검사등의 다른작업을 수행해야 하는 경우 외부에서 접근이 가능하게 두는 것은 위험할 수 있다.
// 따라서 외부에서 접근하지 못하도록 필드의 employees 앞에 private 키워드를 추가한다.
// private 키워드를 추가하면 Department 클래스 안에서만 접근이 가능하게 된다.
//    -> Property 'employee' is private and only accessible within class 'Department'.
// cf. private가 없는 필드 속성은 public으로 public 키워드가 붙으나 붙지 않으나 동일한 효과를 가진다.(default)

accounting.describe();
accounting.printEmployeeInformation();
// 2
// ['Max', 'Manu']

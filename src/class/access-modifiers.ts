class Department {
  private readonly id: string;
  public name: string;
  private employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  describe(this: Department) {
    console.log(`Department: (${this.id}) ${this.name}`);
  }

  addEmployee(employee: string) {
    // this.id = 'd2';
    // Cannot assign to 'id' because it is a read-only property.
    // readonly 접근제어자를 설정하면 초기화 이후 변경이 불가하게 된다.
    // 이는 추가적인 타입 안전성을 더해주고 의도를 명확하게 해줄 수 있다.
    // 나중에 코드를 다시 봤을 때나 다른 개발자들과 협업시 코드의 의도를 명확하게 해줄 수 있으므로
    // 코드를 작성할 때는 명확한 의도를 표시하고 깔끔하게 작성하는 것이 좋다.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

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

export {};

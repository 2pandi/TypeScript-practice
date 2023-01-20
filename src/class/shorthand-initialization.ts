class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // field에 속성을 선언하고 constructor에서 초기화를 하는 이중 초기화 과정을 하는 것보다
    // constructor의 매개 변수 앞에 접근제어자(access modifier)를 추가하여 인수로 주어지는 값을 바로 속성으로 초기화할 수 있다.
    //    -> 이는 생성자(constructor)에서 단순히 인수를 가져올 뿐 아니라 이 클래스에 동일한 이름의 속성을 생성하라는 명령이 된다.
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

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.describe();
// Department: (d1) Accounting
accounting.printEmployeeInformation();
// 2
// ['Max', 'Manu']

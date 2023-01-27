abstract class Department {
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  // 클래스 자체(static)의 내부(private)에서만 접근이 가능한 instance 속성

  private constructor(id: string, private reports: string[]) {
    // 싱글톤 패턴을 적용하기 위해 new 키워드로 인스턴스를 생성하지 못하도록 constructor를 private으로 설정한다.
    /** 싱글톤(Singleton) 패턴 - OOP
     * 특정 클래스의 인스턴스를 하나만 갖도록 하는 것.
     */
    super(id, "Accounting");
  }

  static getInstance() {
    // getInstance 메서드는 instance가 없으면 만들어서 저장하고 반환하고,
    // instance가 있으면 저장된 insance를 반환하기 때문에 instance 생성은 한 번만 수행된다.
    if (this.instance) return this.instance;
    // static 적용된 메서드 내에서 this는 클래스 자체를 가리킨다.
    // AccountingDepartment.instance로도 사용 가능.
    this.instance = new AccountingDepartment("d2", []);
    return this.instance;
  }
}

// const accounting = new AccountingDepartment("d1", []);
// Constructor of class 'AccountingDepartment' is private and only accessible within the class declaration.
// constructor가 private이기 때문에 new 키워드로 인스턴스를 생성할 수 없다.

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
// getInstance 메서드를 통해 여러번 변수를 선언해도 모두 동일한 하나의 인스턴스를 가리키게 된다.

console.log(accounting);
console.log(accounting2);
export {};

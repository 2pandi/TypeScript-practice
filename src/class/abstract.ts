abstract class Department {
  // 추상 클래스를 정의할 때는 class 앞에 abstract를 표기한다.
  // 추상 클래스는 인스턴스를 생성할 수 없고 상속만 될 수 있다.
  private employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  abstract describe(this: Department): void;
  // 추상 메서드를 정의할 때도 메서드 이름 앞에 abstract를 표기한다.
  // 추상 메서드는 정의만 있을 뿐 실제 구현 내용은 적지 않고 이름, 매개변수, 반환 타입만 정의한다.
  // 추상 클래스를 상속한 클래스는 반드시 추상 메서드를 구현해야 한다.
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  describe() {
    console.log("Accounting Department - ID: " + this.id);
  }
}

const it = new ITDepartment("d2", ["Max"]);
const accounting = new AccountingDepartment("d1", []);

it.describe();
accounting.describe();

export {};

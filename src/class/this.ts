class Department1 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe() {
    console.log("Department: " + this.name);
  }
}

const accounting1 = new Department1("Accounting");
console.log(accounting1);

const accountingCopy1 = { describe: accounting1.describe };
// Department 클래스의 함수(메서드) 자체를 전달함.
// 전달된 메서드는 accounting 객체를 참조하지 않으므로 함수 안의 this가 accounting을 참조하지 않는다.
//    -> this는 accountingCopy를 참조하게 됨.
// 따라서 아래 코드에서 accountingCopy에는 name속성이 없으므로 undefined를 출력하게 된다.
accountingCopy1.describe(); // Department: undefined
// 이를 방지해기 위해서는 Department2 클래스와 같이 메서드에 this를 매개변수로 추가할 수 있다.

class Department2 {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  // this의 타입으로 Department2 클래스를 설정한다.
  describe(this: Department2) {
    console.log("Department: " + this.name);
  }
}

const accounting2 = new Department2("Accounting");
console.log(accounting2);

// const accountingCopy2 = { describe: accounting2.describe };
// accountingCopy2.describe();
//    The 'this' context of type '{ describe: (this: Department2) => void; }' is not assignable to method's 'this' of type Department2.
//    Property 'name' is missing in type '{ describe: (this: Department2) => void; }' but required in type 'Department2'.
//    this(accountingCopy2)가 Department2 타입의 객체를 참조하는 것이 아니기 때문에 이러한 에러가 발생한다.

const accountingCopy2 = { name: "DUMMY", describe: accounting2.describe };
accountingCopy2.describe();
// accountingCopy2에 name 속성을 추가하면 에러가 발생하지 않음.

export {};

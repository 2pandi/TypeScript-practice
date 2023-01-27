class Department {
  static fiscalYear = 2023;
  // static으로 지정된 속성(또는 메서드)은 클래스를 인스턴스화 하지 않고도 클래스에서 직접 접근이 가능하도록 해준다.
  // 이는 유틸리티 함수나 클래스에 저장하고자 하는 전역 상수에 사용할 수 있다.
  //   -> new Math 호출 없이 Math의 메서드를 사용하는 것과 비슷함.
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // console.log(this.fiscalYear);
    // Property 'fiscalYear' does not exist on type 'Department'.
    // Did you mean to access the static member 'Department.fiscalYear' instead?
    // fiscalYear속성이 static으로 지정되었기 때문에 인스턴스에서 접근이 불가하다.
    //    -> this는 클래스를 기반으로 생성된 인스턴스를 참조한다.
    console.log(Department.fiscalYear);
  }

  static createEmployee(name: string) {
    return { name };
  }
}

const employee1 = Department.createEmployee("Max");

console.log(employee1, Department.fiscalYear);
// { name: 'Max' } 2023

const department = new Department("id", "name");
// constructor에서 호출된 코드로 인해 Department.fiscalYear가 콘솔 로그된다.

export {};

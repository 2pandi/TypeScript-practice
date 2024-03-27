/**
  [  고급 타입 (Advanced Typing Concepts)  ]
1. 교차 타입(Intersection Types)
2. 타입 가드(Type Guards)
3. 구별된 유니온(Discriminated Unions)
4. 형 변환(Type Casting)
5. 함수 오버로딩(Function Overloads)
 */

// 2. 타입 가드(Type Guards)
// 유니온 타입은 타입을 유연하게 정의하여 쓸 수 있어서 좋지만
// 런타임에서 실제 타입이 무엇인지 알아야 하는 경우에 타입 가드를 사용할 수 있다.
// 타입 가드는 어떤 속성이나 메소드가 존재하는지 이용 전에 확인하는 접근법을 말한다.
// typeof, instanceof, in 등을 통해 타입 가드를 사용할 수 있다.

type T_admin = {
  name: string;
  privileges: string[];
};

type T_employee = {
  name: string;
  startDate: Date;
};

type T_elevatedEmployee = T_admin & T_employee;

const e1: T_elevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;

// 매개변수 a와 b의 타입 중 하나라도 숫자가 아니면(문자열이면) 문자열화 되어 더해진다.
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  // 위에서 a나 b가 숫자가 아닌 경우를 걸렀으므로 a와 b는 확실히 number타입이 된다.
  return a + b;
}

// 위의 함수에서 if문 부분을 타입 가드라고 한다.
// 유니온 타입의 유연성이라는 이점은 그대로 활용하면서
// 런타임에 코드가 제대로 실행될 수 있도록 해준다.
// 주의할 점은 typeof를 사용할 때 문자열 형식으로 작성해야 하므로
// 오타로 인한 에러 가능성이 있다는 것이다.

type UnknownEmployee = T_employee | T_admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name); // 정상
  // UnknownEmployee 타입은 T_employee일 수도 있는데
  // T_employee에는 privileges 속성이 없으므로(T_admin에만 존재) 에러 발생
  // console.log("Privileges: " + emp.privileges);

  // 여기서는 위처럼 typeof를 사용할 수 없다.
  //   -> if(typeof emp === 'object') 사용 불가
  //     -> emp의 타입을 조회해봤자 런타임에서는 object로만 나타나기 때문,,
  //        특정 속성의 존재여부를 알 수는 없다.
  //   -> if(typeof emp === 'Employee') 사용 불가
  //     -> Employee는 타입스크립트로 정의한 타입이기 때문에
  //        컴파일된 자바스크립트는 런타임에서 해당 타입을 알 수 없다.

  // 자바스크립트의 in 키워드를 사용하면
  // emp라는 객체 안에 privileges라는 속성이 존재하는지 확인할 수 있다.
  //   -> if(emp.privileges)로 적어도 오류 발생함(접근조차 허용안하는 js,,)
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("StartDate: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
/** console 출력 값
Name: Max 
Privileges: create-server
StartDate: Tue Mar 26 2024 17:08:14 GMT+0900 (한국 표준시)
 */

// 인자 값에 privileges 항목이 없으므로 출력되지 않는다. -> 타입 가드에 막힘
printEmployeeInformation({ name: "Manu", startDate: new Date() });
/** console 출력 값
Name: Manu
StartDate: Tue Mar 26 2024 17:08:14 GMT+0900 (한국 표준시)
 */

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo... " + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  // if ("loadCargo" in vehicle)로 확인할 수도 있겠지만
  // 문자열로 작성시 오타가 날 수도 있기 때문에
  // class의 경우 instanceof를 이용하는 것이 더 좋다.
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

// 자바스크립트는 여전히 Car와 Truck의 타입을 알 수 없지만
// class는 생성자 함수(자바스크립트 코드)를 통해 해석이 되므로
// vehicle의 생성자 함수가 Car의 것인지 Truck의 것인지 파악할 수 있다.
// 만약 class가 아닌 interface로 정의했다면
// 컴파일된 자바스크립트에 구현부가 존재하지 않고
// 객체 리터럴로 객체가 생성되므로 instanceof를 사용할 수 없다.

useVehicle(v1);
useVehicle(v2);

export {};

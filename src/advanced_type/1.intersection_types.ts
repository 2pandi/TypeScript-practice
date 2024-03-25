/**
  [  고급 타입 (Advanced Typing Concepts)  ]
1. 교차 타입(Intersection Types)
2. 타입 가드(Type Guards)
3. 구별된 유니온(Discriminated Unions)
4. 형 변환(Type Casting)
5. 함수 오버로딩(Function Overloads)
 */

// 1. 교차 타입(Intersection Types)

type T_admin = {
  name: string;
  privileges: string[];
};

type T_Employee = {
  name: string;
  startDate: Date;
};

// & 기호를 사용하여 두 타입을 조합한 새로운 타입을 만들 수 있다.
// T_elevatedEmployee는 name, privileges, startDate 세 속성을 모두 가져야 한다.
type T_elevatedEmployee = T_admin & T_Employee;

const e1: T_elevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// admin과 employee를 type이 아닌 interface로 정의한 경우에도
// type에 & 기호를 이용하여 새로운 type을 정의할 수 있고
// 상속을 통해 새로운 interface를 만들 수 있다.

interface I_admin {
  name: string;
  privileges: string[];
}

interface I_employee {
  name: string;
  startDate: Date;
}

type T_elevatedEmployee2 = I_admin & I_employee;

const e2: T_elevatedEmployee2 = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

interface I_elevatedEmployee extends I_admin, I_employee {}

const e3: I_elevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

// 교차 타입으로 객체 타입이 아닌 다른 타입도 조합할 수 있다.
// Combinalble과 Numeric이라는 두 유니온 타입이 있는 경우
// 두 타입을 교차시켰을 때 그 타입에 공통적으로 있는 타입이 교차 타입이 된다.
type Combinable = string | number | undefined;
type Numeric = number | boolean | undefined;

// 여기서 타입스크립트는 Universal 타입을 number | undefined로 판단한다.
type Universal = Combinable & Numeric;

// 결론
// 객체 타입을 교차시키면 각 객체의 속성을 모두 조합한 타입이 교차 타입이 된다.
// 유니온 타입을 교차시키면 각 타입간의 공통된 타입이 교차 타입이 된다.

export {};

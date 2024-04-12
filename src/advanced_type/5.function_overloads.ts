/**
  [  고급 타입 (Advanced Typing Concepts)  ]
1. 교차 타입(Intersection Types)
2. 타입 가드(Type Guards)
3. 구별된 유니온(Discriminated Unions)
4. 형 변환(Type Casting)
5. 함수 오버로딩(Function Overloads)
 */

// 5. 함수 오버로딩(Function Overloads)
// 함수 오버로딩은 하나의 함수에 여러 시그니처를 정의하는 것이다.
// 즉 하나의 함수를 다양한 방식으로 호출할 수 있다는 것이다.
// 들어가는 인자 값에 따라 함수의 실행 방식이 달라질 수 있다.

// 함수 오버로딩은 타입스크립트가 스스로 반환값 타입을 식별할 수 없을 때 유용할 수 있다.
// 넘겨지는 인자 타입 조합에 따라 함수가 어떤 타입을 반환하는지 명확하게 명시할 수 있다.

type Combinable = string | number;

function add(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// result의 추론된 타입은 number가 아니라 Combinable이다.
//   -> 타입스크립트는 result가 숫자인지 문자열인지 모른다.
const result = add(1, 5);

// 인수를 모두 문자열로 넣었을 때도 result1은 Combinable 타입이다.
// 따라서 result1에 string 함수를 사용할 수 없다. (number일 수도 있기 때문)
const result1 = add("Max", " Schwarz");
result1.split;

// 아래와 같이 대상 함수 위에 대상 함수와 같은 이름으로 중괄호 없이 함수의 타입을 명시해주면(함수오버로딩)
// 함수에 주어진 인자 값에 따라서 반환 타입까지 추론해낼 수 있다.
// 이는 자바스크립트로 컴파일되는 과정에서 함수 정보와 함수 선언부에 따라 조합되어 정리된다.
// 함수 오버로딩시 인자 수를 줄이거나 추가할 수 있다.
function add1(a: number, b: number): number;
function add1(a: string, b: string): string;
function add1(a: string, b: string, c: string): string;
function add1(a: Combinable, b: Combinable): Combinable {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// result2는 string 타입으로 유추되기 때문에 split 사용 가능
const result2 = add1("Max", " Schwarz");
result2.split;

// result2는 number 타입으로 유추되기 때문에 split 사용 불가
const result3 = add1(1, 1);
result3.split;

export {};

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  const value = cb(result);
  console.log("value: " + value);
}

printResult(add(5, 12));

let combineValues: (a: number, b: number) => number;
combineValues = add;
// combineValues = printResult; // error
// combineValues = 5; // error

console.log(combineValues(8, 8)); // 16

// let someValue: undefined; // undefined를 타입으로 지정할 수 있다.

addAndHandle(10, 20, (result) => {
  console.log(result);
  return result;
});
// addAndHandle 함수에서 cb의 리턴 타입을 void로 지정함으로써
// 반환할 수 있는 모든 결과를 무시하게 된다.

export {};

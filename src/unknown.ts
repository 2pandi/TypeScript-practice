let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput;
// Type 'unknown' is not assignable to type 'string'.
// userInput: any인 경우 위의 오류가 발생하지 않는다.
//   -> any는 타입 확인을 수행하지 않게 함.
//   -> unknown이 any보다 조금 더 제한적임.

if (typeof userInput === "string") {
  userName = userInput; // 에러 발생하지 않음.
}

// unknown이 any보다 나은 점은 할 수 없는 작업을 알 수 있도록 타입 검사를 수행할 수 있다는 점이다.

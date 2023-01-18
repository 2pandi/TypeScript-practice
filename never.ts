function generateError(message: string, code: number): never {
  throw { message, errorCode: code };

  // return message; // 에러 발생
  // Type 'string' is not assignable to type 'never'
}
// return 타입으로 void를 지정할 수도 있지만(타입 미지정시 void로 추론됨)
// never 타입을 명시적으로 설정함으로써 코드 품질의 관점에서 의도를 더 분명히 할 수 있다.
//  -> 이 함수는 아무것도 반환하지 않고 스크립트를 break 또는 crash할 것이라는 것을 개발자가 알 수 있다.

generateError("An error occurred!", 500);

// const result = generateError("An error occurred!", 500);
// console.log(result);
// console에 로그되지 않는다.
//   -> throw를 통해 에러가 발생하면 스크립트가 취소되기 때문.

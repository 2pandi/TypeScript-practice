/**
  [  고급 타입 (Advanced Typing Concepts)  ]
1. 교차 타입(Intersection Types)
2. 타입 가드(Type Guards)
3. 구별된 유니온(Discriminated Unions)
4. 형 변환(Type Casting)
5. 함수 오버로딩(Function Overloads)
 */

// 4. 형 변환(Type Casting)
// 형 변환은 타입스크립트가 어떤 값의 타입을 판단하지 못할 때 명시적으로 어떤 타입인지 알려주는 것이다.

// 태그 이름으로 element를 가져왔기 때문에 paragraph의 타입은 HTMLParagraphElement | null로 추론된다.
const paragraph = document.querySelector("p");

// 타입스크립트는 HTML 파일을 보고 분석하지 않기 때문에 해당 id 값을 가진 HTML 요소가 정확히 무엇인지 알 수 없다.
// 따라서 paragraph1의 타입은 HTMLElement | null로 추론된다.
const paragraph1 = document.getElementById("message-output");

// HTMLElement 타입
const userInputElement = document.getElementById("user-input")!;

// HTMLElement 타입은 일반적으로 모든 HTML 요소에 속하는 속성만 지원하고,
// 특정 HTML 요소에 특화된 속성은 지원하지 않는다. -> 에러 발생
// Property 'value' does not exist on type 'HTMLElement'.
userInputElement.value = "Hi there!";

// 형 변환 처리를 해주면 에러를 해결할 수 있다.

// 첫 번째 방법: 값 앞에 꺾쇠 괄호를 이용하여 그 값의 타입을 알려준다.
// userInputElement의 타입은 HTMLInputElement가 된다.
const userInputElement1 = <HTMLInputElement>(
  document.getElementById("user-input")
);

// 두 번째 방법: as 키워드를 이용한다.
// userInputElement의 타입은 HTMLInputElement가 된다.
const userInputElement2 = document.getElementById(
  "user-input"
) as HTMLInputElement;

userInputElement1.value = "Hi there!";
userInputElement2.value = "Hi there!";

// 한 프로젝트 내에서는 두 가지 방법 중에 한 가지만 사용하는 것이 좋다.
// 형 변환을 하는 것은 타입스크립트에게 "이 타입으로 처리 해라."라고 명시하는 것이기 때문에
// 그 코드에서 반환하는 값이 명시한 타입과 반드시 같도록 해주어야 한다.
// 그렇지 않으면 런타임 에러가 밣생하거나 예기치 않은 방식으로 작동할 수 있다.

// 불러오는 값이 null이 아니라는 것이 확실하지 않은 경우
// 느낌표보다는 if절로 null 체크를 해주는 것이 좋다.
const userInputElement3 = document.getElementById("user-input");

if (userInputElement3)
  (userInputElement3 as HTMLInputElement).value = "Hi there!";

export {};

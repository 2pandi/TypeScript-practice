/**
  [  고급 타입 (Advanced Typing Concepts)  ]
1. 교차 타입(Intersection Types)
2. 타입 가드(Type Guards)
3. 구별된 유니온(Discriminated Unions)
4. 형 변환(Type Casting)
5. 함수 오버로딩(Function Overloads)
 */

// 3. 구별된 유니온(Discriminated Unions)

// 구별된 유니온은 객체 타입간 유니온 타입을 대상으로 타입 가드를 구현할 때 도움을 주는 패턴이다.
// 객체 타입 대상이므로 클래스, 인터페이스 모두 적용 가능하다.
// 관련성이 높거나 비슷한 인터페이스나 객체들이 각각 다른 속성이나 메소드를 가지고 있을 때 사용한다.

// 아래 사례에서 Bird와 Horse 모두 비슷하지만 다른 이름의 속성을 가지고 있다.
interface Bird {
  // 속성 이름은 꼭 type이 아니어도 된다. kind 등등...
  // 비슷한 객체 또는 인터페이스에 공통된 추가 속성을 리터럴 타입(문자열)으로 부여하여
  // 이 속성에 따라서 분기를 줄 수 있다.
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  // 아래와 같이 in 을 사용하여 속성의 유무를 확인할 수 있지만
  // 확인할 객체가 많아질 경우 if절을 일일이 추가해주어야 햐고
  // 문자열 형식으로 작성시 오타가 발생할 수 있으므로 좋지 않다.
  // if ("flyingSpeed" in animal) console.log("Moving with speed: ");
  //
  // Bird와 Horse가 class인 경우 instanceof를 사용할 수 있겠지만
  // interface로 작성되었으므로 instanceof 또한 사용할 수 없다.

  // Bird와 Horse에 공통된 type이라는 속성을 추가하여 구별된 유니온으로 만들어 주었으므로
  // switch문을 사용하여 각 type에 따라 speed를 설정해줄 수 있다.
  // 이 때 IDE에서 자동완성 기능을 지원하기 때문에 앞선 예의 오타 문제도 잡아줄 수 있다.
  //   -> type으로 올 수 있는 것은 'bird'와 'horse' 뿐이다. -> 오타나면 경고 표시
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 20 }); // Moving with speed: 20
moveAnimal({ type: "horse", runningSpeed: 30 }); // Moving with speed: 30
// moveAnimal({ type: "horse", flyingSpeed: 20 });
// type에 따라 실행되는 속성을 정할 수 있기 때문에
// 어떤 객체에서 어떤 속성을 활용할 수 있고 활용할 수 없는지 판단이 가능해진다.
//   -> horse 타입에 flyingSpeed 속성을 넣으면 타입 에러가 발생한다.

export {};

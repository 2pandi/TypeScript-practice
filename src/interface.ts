// interface는 객체의 구조를 정의 / 확인하는 데 사용할 수 있다.
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// class명 뒤에 implements 키워드를 사용하여 class가 준수해야하는 interface를 지정할 수 있다.
// 아래와 같이 준수할 interface를 여러개 지정할 수도 있다. (상속과 다른 점)
// class Person implements Greetable, AnotherInterface { ... }
class Person implements Greetable {
  name: string;
  // interface에 정의하지 않은 요소(필드, 메소드 등)를 추가로 입력할 수도 있다.
  // 따라서 interface는 주로 구체적인 구현이 아닌 서로 다른 클래스 간의 기능을 공유하기 위해 사용된다.
  //   - interface 내에 구현이나 값을 입력하는 것이 아니라 구조와 클래스가 가져야 할 기능을 입력함.
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

// interface를 타입으로 사용 가능.
// Greetable 대신 Person을 사용할수도 있음. (Person은 결국 Greetable에 기반한 것)
let user1: Greetable;

user1 = new Person("Max");
user1.greet("Hi there - I am"); // Hi there - I am Max

// user1은 age와 name을 가진 일반 객체
console.log(user1); // {age: 30, name: 'Max'}

/** interface와 type의 차이
 * 1. interface는 객체의 구조를 설명하기 위해서"만" 사용한다.
 *   - interface는 class가 이행하고 준수해야 하는 약속처럼 사용될 수 있다.
 * 2. interface는 선언적 확장이 가능하다.
 *   - type은 새로운 속성을 추가하기 위해 다시 같은 이름으로 선언 불가
 * 3. interface는 extends로 확장, type은 &로 확장
 */

/** interface와 추상클래스(abstract class)의 차이
 * 1. 추상클래스는 클래스 내 추상 메소드가 하나 이상 포함되거나 abstract로 정의된 것
 *    interface는 모든 메소드가 추상 메소드
 * 2. 추상 클래스는 그를 상속받아 기능을 확장시키기 위해 사용(슈퍼클래스 기능)
 *    interface는 함수의 구현을 강제하기 위해 사용(구현 객체의 같은 동작 보장)
 * 3. 추상 클래스는 다중 상속 불가, interface는 여러개 설정 가능
 * 4. interface의 모든 변수는 public static, 모든 메소드는 public abstract
 *    추상 클래스는 static이 아닌 필드를 가질 수 있음(public, protected, private)
 */

export {};

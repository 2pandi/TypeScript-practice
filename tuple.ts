// Tuple: Added by TypeScript: Fixed-length array

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // -> tuple 타입
} = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: [2, "author"], // role의 값을 tuple로 지정하고자 함.
};

// person.role[1] = 10;
// 1번째 인덱스는 string 타입이어야 한다.
// Type 'number' is not assignable to type 'string'

person.role.push("admin");
/**
적용되어서는 안되지만..... tuple에서 push는 허용된다.
typescript에서 에러로 걸러지지 않음.
하지만 그에 맞지 않는 재할당은 막아준다. ⬇️ 참고

  person.role = [];
  Type '[]' is not assignable to type '[number, string]'.
  Source has 0 element(s) but target requires 2.

  person.role = [3, 'admin', 'writer']
  Type '[number, string, string]' is not assignable to type '[number, string]'.
  Source has 3 element(s) but target allows only 2.
 */

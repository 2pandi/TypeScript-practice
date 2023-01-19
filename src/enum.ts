// Enum: Added by TypeScript: Automatically enumerated global constant identifiers

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// 위의 작업을 enum으로 간단하게 표현할 수 있다.

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/**
 * compiled js code

var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));

console.log(Role)
// {0: 'ADMIN', 1: 'READ_ONLY', 2: 'AUTHOR', ADMIN: 0, READ_ONLY: 1, AUTHOR: 2}

 */

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: number;
} = {
  name: "Max",
  age: 30,
  hobbies: ["sports", "cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("is admin");
}

enum Role1 {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}
// 등호를 통해 숫자를 임의로 지정해줄 수도 있음.
// 위의 경우 ADMIN을 5로 설정하여 그 다음 식별자들은 READ_ONLY = 6, AUTHOR = 7이 자동으로 적용 됨.
// 모든 식별자를 각각 다른 값으로 할당하거나 문자열로 할당하는 것도 가능함. ex) READ_ONLY = 100, AUTHOR = 'AUTHOR'

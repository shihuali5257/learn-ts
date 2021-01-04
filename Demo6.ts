const numArr: number[] = [1, 2, 3];
const strArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined];
const arr: (string | number)[] = [1, "str"];

const xiaojiejies: { name: string; age: number }[] = [
  { name: "xiaohong", age: 18 },
  { name: "xiaoming", age: 18 },
];

// type alias 类型别名

type Lady = { name: string; age: number };

const xiaojiejies1: Lady[] = [
  { name: "xiaohong", age: 18 },
  { name: "xiaoming", age: 18 },
];

class Madam {
  name: string;
  age: number;
}

const xiaojiejies2: Madam[] = [
  { name: "xiaohong", age: 18 },
  { name: "xiaoming", age: 18 },
];

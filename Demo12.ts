class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const person = new Person("xiaoming");

class Teacher extends Person {
  constructor(public age: number) {
    super("xiaoming");
  }
}

const techer = new Teacher(18);

console.log(techer.name);
console.log(techer.age);

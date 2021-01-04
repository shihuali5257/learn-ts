// private， protected, public

// 类的内部和类的外部

class Person {
  public name: string;
  // protected name: string;
  // private name: string;
  public sayHello() {
    return this.name + "say hello";
  }
}

class Teacher extends Person {
  public sayBye() {
    return this.name;
  }
}

const person = new Person();

person.name = "xiaoming";
console.log(person.name);
console.log(person.sayHello());

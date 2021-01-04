class Person14 {
  public readonly _name: string;
  constructor(name: string) {
    this._name = name;
  }
}

const p1 = new Person14("xiaoming");

// p1._name = "xiaohong";

console.log(p1._name);

abstract class Girl14 {
  abstract skill();
}

class Waiter extends Girl14 {
  skill() {
    console.log("请喝水");
  }
}

class BaseTeacher extends Girl14 {
  skill() {
    console.log("按摩");
  }
}

class SeniorTeacher extends Girl14 {
  skill() {
    console.log("spa 按摩");
  }
}

class XiaoJieJie {
  constructor(private _age: number) {}
  get age() {
    return this._age - 10;
  }
  set age(age: number) {
    this._age = age + 3;
  }
}

const she = new XiaoJieJie(18);

she.age = 25;

console.log(she.age);

class Girl {
  static sayLove() {
    return "i love u";
  }
}

const her = new Girl();
console.log(Girl.sayLove());

class Lady {
  content = "hi boy";
  sayHello() {
    return this.content;
  }
}

const goddess = new Lady();

console.log(goddess.sayHello());

class XiaoJieJie extends Lady {
  sayHello() {
    // return "hi honey";
    return super.sayHello() + "你好";
  }
  sayLove() {
    return "i love u";
  }
}

const xiaojiejie = new XiaoJieJie();
console.log(xiaojiejie.sayHello());
console.log(xiaojiejie.sayLove());

// 类到关键字，继承，重写， super关键字

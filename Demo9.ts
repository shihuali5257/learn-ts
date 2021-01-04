interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

class Xiaojiejie implements Girl {
  name: "xiaohong";
  age: 18;
  bust: 94;
  say() {
    return "hello boy";
  }
}

interface Teacher extends Girl {
  teach(): string;
}

const girl = {
  name: "xiaoming",
  age: 18,
  bust: 94,
  //   waistline: 21,
  sex: "女",
  say() {
    return "hello boy";
  },
  teach: () => "我来教你如何操作",
};

const sreenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  (girl.age > 24 || girl.bust < 90) && console.log(girl.name + "你被淘汰");
};

sreenResume(girl);

const getResume = (girl: Teacher) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是" + girl.sex);
};

getResume(girl);

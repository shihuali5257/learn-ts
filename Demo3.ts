/**
 * 基础静态类型
 * number, string, undefined, boolean, symbol，null, void
 */
let count3: number = 10;
const name3: string = 'xiaohong';

/**
 * 对象静态类型
 * 对象类型，数组类型，类类型，函数类型
 */

const xiaoJiejie: {
  name: string;
  age: number;
} = {
  name: 'xiaohong',
  age: 18,
};

const xiaoJiejies: string[] = ['xiaohong', 'she', 'her'];

class Person {}
const xiaohong: Person = new Person();

const handleXiaoJieJie: () => string = () => {
  return 'xiaohong';
};

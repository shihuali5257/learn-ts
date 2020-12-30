/**
 * 类型注解 type annotation
 * 类型推断 type inference
 *
 * 如果ts能够自动分析变量类型，我们就什么也不需要做了
 * 如果ts无法分析变量类型的话，我们就需要使用类型注解
 */

let count4: number;
count4 = 10;

const one = 1;
const two = 2;
const there = one + two;

const getTotal = (one: number, two: number) => {
  return one + two;
};

const total = getTotal(1, 2);

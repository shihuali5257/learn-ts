// tsconfig
// const person: string = "xiaoming";

// 在默认状态下，typescript 将 DOM typings 作为全局的运行环境，所以当我们声明 name时， 与 DOM 中的全局 window 对象下的 name 属性出现了重名。

// 既然与全局的变量出现重名，那我们将脚本封装到模块（module）内。module 有自己的作用域，自然不会与全局作用域的变量产生冲突。在 Typescript 中，只要文件存在 import 或 export 关键字，都被视为 module

// noImplicitAny: 允许你的注解类型 any 不用特意标明

// const getName = (name: string) => {
//   return name;
// };

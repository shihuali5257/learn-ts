// // const sreenResume = (name: string, age: number, bust: number) => {
// //   age < 24 && bust >= 90 && console.log(name + "进入面试");
// //   age > 24 || (bust < 90 && console.log(name + "你被淘汰"));
// // };

// // sreenResume("xiaoming", 18, 94);

// // const getResume = (name: string, age: number, bust: number) => {
// //   console.log(name + "年龄是" + age);
// //   console.log(name + "胸围是" + bust);
// // };

// // getResume("xiaoming", 18, 94);

// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
// }

// const girl = {
//   name: "xiaoming",
//   age: 18,
//   bust: 94,
//   //   waistline: 21,
// };

// const sreenResume = (girl: Girl) => {
//   girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//   (girl.age > 24 || girl.bust < 90) && console.log(girl.name + "你被淘汰");
// };

// sreenResume(girl);

// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是" + girl.age);
//   console.log(girl.name + "胸围是" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是" + girl.waistline);
// };

// getResume(girl);

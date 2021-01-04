const getTotal5 = (one: number, two: number): number => {
  return one + two;
};

const total5 = getTotal(1, 2);

const errFunction = (): never => {
  throw new Error();
  console.log("Hello World");
};

const forNever = (): never => {
  while (true) {}
  console.log("Hello World");
};

const getSum = ({ one, two }: { one: number; two: number }): number => {
  return one + two;
};

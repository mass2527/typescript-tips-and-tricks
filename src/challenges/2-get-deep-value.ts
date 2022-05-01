export const getDeepValue = <T, U extends keyof T, V extends keyof T[U]>(
  obj: T,
  firstKey: U,
  secondKey: V
) => {
  return obj[firstKey][secondKey];
};

const obj = {
  foo: {
    a: true,
    b: 2,
  },
  bar: {
    c: "12",
    d: 18,
  },
};

const value = getDeepValue(obj, "foo", "b");

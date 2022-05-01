// export const deepEqualCompare = <Arg>(a: Arg, b: Arg): boolean => {
//   if (Array.isArray(a) || Array.isArray(b)) {
//     throw new Error("You cannot compare two arrays using deepEqualCompare");
//   }
//   return a === b;
// };

export const deepEqualCompare = <Arg>(
  a: Arg extends any[] ? `Don't pass an array!` : Arg,
  b: Arg extends any[] ? `Don't pass an array!` : Arg
): boolean => {
  return a === b;
};

deepEqualCompare([], []);

const func = (value: { name: number } | { age: number }) => {
  if ("name" in value) {
    console.log(value.name);
  } else {
    console.log(value.age);
  }
};

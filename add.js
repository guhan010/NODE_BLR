const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
// const calcccc = (module.exports = add);
// calcccc.sub = sub;
// calcccc.mul = mul;
// module.exports = add;
module.exports = { add, sub, mul };

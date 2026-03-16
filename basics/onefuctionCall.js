const fn = (a, b, c) => a + b + c;

var once = function (fn) {
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
    return undefined;
  };
};

const onceFn = once(fn);

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));

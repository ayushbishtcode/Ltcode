function memoize() {
  let cache = {};

  return function (...args) {
    let key = args.toString();

    if (key in cache) {
      return cache[key];
    }

    let result = sum(...args);
    cache[key] = result;

    return result;
  };
}

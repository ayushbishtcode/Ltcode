var addtwoparamaeters = async function (promise1, promise2) {
  const [a, b] = Promise.all([promise1, promise2]);
  return a + b;
};

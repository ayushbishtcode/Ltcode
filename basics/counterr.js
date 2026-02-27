let createCounter = function (n) {
  let count = n - 1;
  return function () {
    count++;
    return count;
  };
};

const counter = createCounter(13);
const output = document.getElementById("output");

output.innerHTML += counter() + "<br>";
output.innerHTML += counter() + "<br>";
output.innerHTML += counter() + "<br>";

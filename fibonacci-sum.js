let n = 5;

const fibonacciSum = (n) => {
  //Logic Based Solution
  let a = 0,
    b = 1,
    c = 0;
  while (c < n - 1) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
  // if(n<2) return n;
  // return fibonacciSum(n-2)+fibonacciSum(n-1)
};

console.log("output", n > 2 ? n : fibonacciSum(n));

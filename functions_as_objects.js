// BEGIN (write your solution here)
const magic = (...args) => {
  let currentSum = args.reduce((a, b) => a + b, 0);
  function inner(...args2) {
    currentSum += args2.reduce((a, b) => a + b, 0);
    return inner;
  }
  inner.valueOf = () => currentSum;
  return inner;
}

export default magic;

// 
// END
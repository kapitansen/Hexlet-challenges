const reverse = (str) => {
  const lastIndex = str.length - 1;
  // BEGIN (write your solution here)
  const iter = (index, acc) => { 
    if (index > lastIndex) return acc;
    acc = str[index] + acc;
    return iter(index++, acc);
  }
  // END
  return iter(0, '');
};
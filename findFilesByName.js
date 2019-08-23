import path from 'path';

// BEGIN (write your solution here)
const findFilesByName = (root, str) => {
  const iter = (n, currentPath, acc) => {

    if (n.type === 'file' && n.name.includes(str)) {
      return [...acc, path.join(currentPath, n.name)];
    }

    if (n.type === 'directory' && n.children.length > 0) {
      return n.children.reduce((cAcc, nn) => iter(nn, path.join(currentPath, n.name), cAcc), acc);
    }

    return acc;

  };

  return iter(root, '', []);
};
export default findFilesByName;
// END
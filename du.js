import { reduce } from '@hexlet/immutable-fs-trees';

// BEGIN (write your solution here)

function compareSecondColumn(a, b) {
  if (a[1] === b[1]) {
    return 0;
  }
  else {
    return (a[1] > b[1]) ? -1 : 1;
  }
}

const calculateFileSize = tree => reduce((acc, node) => {
  if (node.type === 'file') {
    return acc + node.meta.size;
  }
  return acc;
}, tree, 0);

const du = tree => {
  const result = tree.children.map(n => [n.name, calculateFileSize(n)]);
  result.sort(compareSecondColumn);
  return result;
}
export default du;
// END

// BEGIN (write your solution here)
const filter = (f, tree) => {
  if (!f(tree)) {
    return null;
  }
  if (tree.type == 'file') {
    return tree;
  }
  return {...tree, children: tree.children.map(c => filter(f, c)).filter(v => v)};
}
export default filter
// END

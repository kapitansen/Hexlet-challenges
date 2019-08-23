// BEGIN (write your solution here)
const map = (f, node) => {
  if (node.type === 'directory') {
    const newnode = f(node);
    return {...newnode, children: newnode.children.map(c => map(f, c))};
  }
  return f(node);
}

export default map;
// END
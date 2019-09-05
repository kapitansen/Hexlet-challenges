// BEGIN (write your solution here)
import Node from './Node';

function toString() {
  return `<${this.name}${this.buildAttrString()}>${this.body}${this.children.length > 0 ? this.children.join('') : ''}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}
// END
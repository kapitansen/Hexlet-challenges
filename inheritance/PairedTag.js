// BEGIN (write your solution here)

import Node from './Node';

export default class PairedTag extends Node {
  constructor (name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const newchildren = this.children.length > 0 ? this.children.join('') : '';
    return `<${this.name + this.buildAttrString()}>${this.body}${newchildren}</${this.name}>`;
  }
  
}
// END


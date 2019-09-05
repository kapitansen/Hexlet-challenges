// BEGIN (write your solution here)

import Node from './Node';

export default class SingleTag extends Node {
  
  toString() {
    return `<${this.name + this.buildAttrString()}>`;
  }
  
}
// END
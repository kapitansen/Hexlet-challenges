// BEGIN (write your solution here)
export default class Node {
  constructor (name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  buildAttrString() {
    return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
  }
}
// END
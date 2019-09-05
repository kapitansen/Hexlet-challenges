// BEGIN (write your solution here)
export default class SingleTag {
  constructor (name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }
    
  toString() {
    const buildAttrString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
    return '<' +this.name + buildAttrString(this.attributes) + '>';
  }
  
}
// END
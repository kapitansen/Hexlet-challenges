// BEGIN (write your solution here)
export default class PairedTag {
  constructor (name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const buildAttrString = attrs => Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
    const newchildren = this.children.length > 0 ? this.children.join('') : '';
    return '<' + this.name + buildAttrString(this.attributes) + '>' + this.body + newchildren + '</' +this.name+ '>';
  }
  
}

// END
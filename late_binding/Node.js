// BEGIN (write your solution here)
function buildAttrString() {
  return Object.keys(this.attributes).map(key => ` ${key}="${this.attributes[key]}"`).join('');
}

export default function Node(name, attributes = {}) {
	this.name = name;
  this.attributes = attributes;
  this.buildAttrString = buildAttrString;
}
// END
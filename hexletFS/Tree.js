class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChildren() {
    if (this.children.size > 0) return true;
    return false;
  }

  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  getDeepChild(keys) {
    if (keys.length == 0) return;
    const reducer = (acc, current) => {
      console.log('current ' + current);
      console.log('acc ' + acc);
      if (typeof acc !== 'undefined' && acc.hasChild(current)) return acc.getChild(current);
      return undefined;
    }
    return keys.reduce(reducer, this);
  }

  getChildren() {
    return [...this.children.values()];
  }
  // END
}

export default Tree;

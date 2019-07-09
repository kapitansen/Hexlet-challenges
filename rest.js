class Enumerable {
  constructor(collection, operations) {
    this.collection = collection;
    this.operations = operations || [];
  }

  build(fn) {
    const newOperations = this.operations.slice();
    newOperations.push(fn);
    return new Enumerable(this.collection.slice(), newOperations);
  }

  // BEGIN (write your solution here)
  where(...args) {
    return this.build(coll => args.reduce((acc, item) => {
      if (typeof item === 'function') {
        return acc.filter(item);
      }
      const funcForObj = elem => Object.keys(item).every(key => item[key] === elem[key]);
      return acc.filter(funcForObj);
    }, coll));
    // forEach(acc) > this.build(coll=>);
    // return this.build(coll => coll.filter(fn));
  }
  // END

  get length() {
    return this.toArray().length;
  }

  toArray() {
    if (!this.memo) {
      this.memo = this.operations.reduce((acc, func) => func(acc), this.collection);
    }

    return this.memo;
  }
}

export default Enumerable;
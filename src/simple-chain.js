const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    value = String(value);
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length || !Number(position)) {
      this.arr = [];
      throw Error;
  }
  this.arr.splice(position - 1, 1);
  return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = '( '+ this.arr.join(' )~~( ') + ' )';
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;
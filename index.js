class SortedList {
  constructor() {
    this.items = [],
      this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.length++;
    this.items.sort((a, b) => {
      return a - b;
    })
    return this.items;
  }

  get(pos) {
    if (this.items.length < 0 || pos > this.items.length) {
      throw new Error("OutofBounds")
    }
    return this.items[pos];
  }

  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[this.items.length - 1]
  }

  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList")
    }
    return this.items[0]
  }

  sum() {
    
  }

  avg() {}
}

module.exports = SortedList;
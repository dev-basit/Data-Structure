class MyArray {
  constructor(length = 0) {
    this.data = new Array(length).fill(0);
    this.count = 0;
  }

  print() {
    for (let i = 0; i < this.data.length; i++) {
      console.log(this.data[i]);
    }
  }

  length() {
    return this.count;
  }

  indexOf(value) {
    for (let i = 0; i < this.count; i++) {
      if (this.data[i] === value) return i;
    }

    return -1;
  }

  // push
  insert(data) {
    if (this.data.length === this.count) {
      // dont need to copy old items into new array double the size of original in dynamic programming languages
    }

    this.data[this.count++] = data;
    return this.count;
  }

  pop() {
    delete this.data[this.count - 1];
    return --this.count;
  }

  removeAt(index) {
    if (index < 0 || index >= this.count) throw new Error("index is invalid");

    for (let i = index; i < this.count; i++) {
      this.data[i] = this.data[i + 1];
    }

    return --this.count;
  }
}

const arr1 = new MyArray(5);
arr1.insert(4);
arr1.insert(14);
arr1.pop(7);
arr1.removeAt(3);
console.log(arr1.indexOf(10));
console.log(arr1.length());
console.log(arr1.pop());

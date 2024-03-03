// Array implementation, yaha p ap built in length property b use kr skty ho
class Stack {
  constructor(data = [], length = 0) {
    this.data = data;
    this.length = length;
  }

  printStack() {
    let output = [];
    for (let i = 0; i < this.length; i++) output.push(this.data[i]);

    console.log("Stack elements are: ", output);
  }
}

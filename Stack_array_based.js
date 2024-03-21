// Array implementation, here we wil assue we have fixed size.
class Stack {
  constructor(size = 0) {
    this.items = [];
    this.count = 0;
    this.size = size; // Javascript have dynamic size array, so I am taking extra field to remember original length or total size of stack
  }

  // Add item to the top of stack
  push(data) {
    if (this.count === this.size) throw new Error("Stack is full. Stack Overflow Exception"); // for static programming languages: (this.count === this.items.length), item length is defined at the time of calling constructor

    this.items[this.count++] = data;
  }

  // Remove item from the top of stack, return the item removed
  pop() {
    if (this.count === 0) throw new Error("Stack is empty. Illegal State Exception");

    // Following 3 lines can be written as: return this.item[--this.count]
    let temp = this.items[this.count - 1];
    this.count--;
    return temp;
  }

  // return top element, don't remove it
  peek() {
    if (this.count === 0) throw new Error("Stack is empty. Illegal State Exception");

    return this.items[this.count - 1];
  }

  isEmpty() {
    // Following 2 lines can be written as: return this.count
    if (this.count > 0) return false;
    else return true;
  }

  // toArray or toString
  printStack() {
    let output = [];
    for (let i = 0; i < this.count; i++) output.push(this.items[i]);

    console.log("Stack total size: ", this.size);
    console.log("Stack elements are: ", output);
    console.log("Stack curr no of elements: ", this.count);
    console.log("\n");
    return output;
  }
}

let stack = new Stack(5);
stack.printStack();
stack.push(4);
// stack.push(45);
// stack.push(11);
// stack.push(35);
// stack.push(75);
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// stack.pop();
// console.log(stack.peek());
// console.log(stack.isEmpty());
// stack.pop();
// console.log(stack.isEmpty());
stack.printStack();

// Array implementation, yaha p ap built in length property b use kr skty ho
class Queue {
  constructor(data) {
    this.data = data;
    this.length = 1;
  }

  printQueue() {
    let output = [];
    for (let i = 0; i < this.length; i++) output.push(this.data[i]);

    console.log("Queue elements are: ", output);
  }

  // add item at the end of queue
  enqueue(data) {
    this.data[this.length++] = data;
    this.printQueue();
  }

  // remove item from the top or beginning
  dequeue() {
    this.length--;
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data.length--;
    this.printQueue();
    // return temp;
  }

  // return beginning element, don't remove it
  peek() {
    let temp = this.data[0];
    this.printQueue();
    return temp;
  }

  isEmpty() {
    if (this.length) return false;

    return true;
  }
}

let myQueue = new Queue([1]);
myQueue.enqueue(2);
console.log(myQueue);
myQueue.enqueue(5);
console.log(myQueue);
myQueue.enqueue(15);
console.log(myQueue);
console.log("Queue is empty? ", myQueue.isEmpty());
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.printQueue());
console.log(myQueue.peek());
console.log(myQueue);
console.log("Queue is empty? ", myQueue.isEmpty());
// console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.dequeue());
myQueue.enqueue(5);
console.log(myQueue);
myQueue.enqueue(15);
console.log(myQueue);
console.log("Queue is empty? ", myQueue.isEmpty());
console.log(myQueue);

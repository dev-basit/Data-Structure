// Array implementation, yaha p ap built in length property b use kr skty ho
class Queue {
  constructor(size = 0) {
    this.items = new Array(size).fill(null); // simulating statically typed programming languages, they have fixed size
    this.front = 0;
    this.rear = 0;
    this.count = 0;
  }

  // Add item at the rear of queue
  enqueue(data) {
    if (this.count === this.items.length || this.rear === this.items.length)
      throw new Error("Queue is full. Queue Overflow Exception");

    this.items[this.rear++] = data;
    this.count++;
  }

  // Remove item from the top or front of queue, return the item removed
  dequeue() {
    if (this.front >= this.rear) throw new Error("No Elements present.");

    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front++;
    this.count--;

    return item;
  }

  // return rear most element, don't remove it
  peek() {
    if (this.count === 0) throw new Error("No Elements present.");

    return this.items[this.rear - 1];
  }

  isEmpty() {
    // Following 2 lines can be written as: return this.count

    if (this.count > 0) return false;
    else return true;
  }

  printQueue() {
    console.log("");
    console.log(this);
    console.log("");
  }
}

let queue = new Queue(5);
queue.printQueue();
// queue.enqueue(2);
// queue.printQueue();
// queue.enqueue(5);
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();
// console.log("peek element: ", queue.peek());
// console.log("Is queue empty? ", queue.isEmpty());

class Heap {
  constructor(count = 0) {
    this.items = new Array(count).fill(null);
    this.size = 0;
  }

  //
  insertIterative_Mosh(value) {
    if (this.isFull()) throw new Error("Heap is full. Illegal State Exception"); // you can also implement logic to check if array size is full then throw error, this is usefull in statically typed programming languages

    this.items[this.size++] = value;

    // do not bubble up, if length = 1
    if (this.size === 1) return;

    this.bubbleUp(this.size - 1);
  }

  isFull() {
    return this.size === this.items.length;
  }

  bubbleUp(index) {
    while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  parent(index) {
    return parseInt((index - 1) / 2);
  }

  swap(first, second) {
    let tempValue = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = tempValue;
  }

  // remove root, return it as well
  remove() {
    if (this.isEmpty()) throw new Error("Heap is empty. Illegal State Exception");

    const root = this.items[0];

    this.items[0] = this.items[--this.size];
    this.items[this.size] = null;

    this.bubbleDown();

    return root;
  }

  isEmpty() {
    return this.size === 0;
  }

  bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  isValidParent(index) {
    if (!this.hasLeftChild(index)) return true;

    if (!this.hasRightChild(index)) return this.items[index] >= this.leftChild(index);

    return this.items[index] >= this.leftChild(index) && this.items[index] >= this.rightChild(index);
  }

  largerChildIndex(index) {
    if (!this.hasLeftChild(index)) return index;

    if (!this.hasRightChild(index)) return this.leftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) < this.size;
  }

  hasRightChild(index) {
    return this.rightChildIndex(index) < this.size;
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }

  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }

  leftChildIndex(index) {
    return index * 2 + 1;
  }

  rightChildIndex(index) {
    return index * 2 + 2;
  }

  heapSortDescending() {
    const sorted = [];
    while (!this.isEmpty()) {
      sorted.push(this.remove());
    }

    console.log("Sorted in descending order: ", sorted);
    return sorted;
  }

  heapSortAscending() {
    const sorted = new Array(this.size).fill(null);

    for (let i = sorted.length - 1; i >= 0; i--) {
      sorted[i] = this.remove();
    }

    console.log("Sorted in ascending order: ", sorted);
    return sorted;
  }

  // heapify
  heapifyMosh(array) {
    // not optimized
    // for (let i = 0; i < array.length; i++) this.heapifyMosh2(array, i);

    // optimized
    let lastParentIndex = parseInt(array.length / 2 - 1);
    for (let i = lastParentIndex; i >= 0; i--) this.heapifyMosh2(array, i);
  }

  heapifyMosh2(array, index) {
    let largerIndex = index;

    let leftIndex = index * 2 + 1;
    if (leftIndex < array.length && array[leftIndex] > array[largerIndex]) largerIndex = leftIndex;

    let rightIndex = index * 2 + 2;
    if (rightIndex < array.length && array[rightIndex] > array[largerIndex]) largerIndex = rightIndex;

    if (index === largerIndex) return;

    // swap
    let temp = array[index];
    array[index] = array[largerIndex];
    array[largerIndex] = temp;

    // recursive call
    heapifyMosh2(array, largerIndex);
  }

  kthLargestItem(largest) {
    // assume we have list or items already inserted

    if (largest < 1 || largest > this.size) throw new Error("Invalid largest");

    for (let i = 0; i < largest - 1; i++) this.remove();

    return this.max();
  }

  max() {
    if (this.isEmpty()) throw new Error("No items available");

    return this.items[0];
  }

  toString() {
    console.log("");
    console.log("this.items ", this.items);
    console.log("this.size ", this.size);
    console.log("this.items.length ", this.items.length);
    console.log("");
  }
}

let heap = new Heap(15);
heap.toString();
heap.insertIterative_Mosh(10);
heap.toString();
heap.insertIterative_Mosh(5);
heap.toString();
heap.insertIterative_Mosh(17);
heap.toString();
heap.insertIterative_Mosh(4);
heap.toString();
heap.insertIterative_Mosh(22);
heap.toString();
heap.insertIterative_Mosh(3);
heap.toString();
heap.insertIterative_Mosh(19);
heap.toString();
heap.insertIterative_Mosh(59);
heap.toString();

heap.remove();
heap.toString();
heap.remove();
heap.toString();
heap.remove();
heap.toString();
heap.remove();
heap.toString();
heap.remove();
heap.toString();
heap.remove();
heap.toString();
heap.remove();
heap.toString();
// heap.remove();
// heap.toString();
// heap.remove();
// heap.toString();

heap.insertIterative_Mosh(19);
heap.toString();
heap.insertIterative_Mosh(1);
heap.toString();
heap.insertIterative_Mosh(49);
heap.toString();
heap.insertIterative_Mosh(39);
heap.toString();
heap.insertIterative_Mosh(2);
heap.toString();

// heap.heapSortDescending();
// heap.heapSortAscending();
// heap.toString();

// heap.heapSortDescending();
// heap.heapSortAscending();
// heap.toString();

// console.log(heap.kthLargestItem(2));
// heap.toString();

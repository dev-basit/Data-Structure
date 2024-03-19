class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    if (data) {
      const newNode = new Node(data);
      this.head = this.tail = newNode;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length = 0;

    this.toArray();
  }

  //prepend
  addFirst(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    this.toArray();
    return newNode;
  }

  // append
  addLast(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    this.toArray();
    return newNode;
  }

  removeFirst() {
    if (!this.head) {
      throw new Error("List is empty.");
    } else if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (this.head.next) {
      let temp = this.head.next;
      this.head.next = null;
      this.head = temp;
    }

    this.length--;
    this.toArray();
  }

  removeLast() {
    if (!this.head) {
      throw new Error("List is empty.");
    } else if (this.head === this.tail) {
      this.tail = this.head = null;
    } else if (this.head.next) {
      let currentNode = this.head;
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
    }

    this.length--;
    this.toArray();
  }

  length() {
    // There are 2 ways to solve this problem
    // 1. Define private length field, increment it after adding element and decrement it after removing element to list
    return this.length;

    // 2. Create a count varibale here, traverse the list, and increment count while traversing. This will be costly if our list is large
    // if (!this.head) return 0;
    // let count = 0;
    // let currentNode = this.head;
    // while (currentNode != null) {
    //   count++;
    //   currentNode = currentNode.next;
    // }
    // return count;
  }

  indexOf(data) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.data === data) {
        console.log(`Index of "${data}" is  ${index}`);
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    console.log("Value doesnt exist.");
    return -1;
  }

  // Find whether a value or data is present in linked list or not
  contains(data) {
    // we can refator this by calling indexof function => return indexOf(data)
    if (!this.head) return false;

    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        console.log("True");
        return true;
      }
      currentNode = currentNode.next;
    }

    console.log("False");
    return false;
  }

  insertAt(index, data) {
    if (!this.head) return;

    if (index < 0 || index >= this.length) throw new Error("Index out of range.");

    if (index === 0) this.addFirst(data);
    else if (index === this.length - 1) this.addLast(data);
    else {
      let position = 0;
      let currentNode = this.head;

      while (position < index - 1) {
        currentNode = currentNode.next;
        position++;
      }

      let newNode = new Node(data);
      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
      this.length++;
      this.toArray();
    }
  }

  // delete at specific index
  removeAt(index) {
    if (!this.head) return;

    if (index < 0 || index >= this.length) throw new Error("Index out of range.");

    if (index === 0) this.removeFirst();
    else if (index === this.length - 1) this.removeLast();
    else {
      let position = 0;
      let currentNode = this.head;

      while (position < index - 1) {
        currentNode = currentNode.next;
        position++;
      }

      let tempNode = currentNode.next.next;
      currentNode.next = tempNode;
      this.length--;
      this.toArray();
    }
  }

  // Convert list to array and return it
  toArray() {
    let list = [];
    let currentNode = this.head;

    while (currentNode != null) {
      list.push(currentNode.data);
      currentNode = currentNode.next;
    }

    console.log("Linked List: ", list);
    console.log("Length: ", this.length);

    return list;
  }

  // Steps / pseudo code
  // for 1st node
  // 1) select 1st node
  // 2) break its next pointer to node 2,
  // 3) and point it to null
  // 4) while breaking its next pointer node (node 2), store it somewhere for later use

  // for 2nd node
  // 1) select or use node 2 that is stored in previous step
  // 2) break its next pointer to node 3,
  // 3) and point it to node 1 (prevNode)
  // 4) while breaking its next pointer node (node 3), store it somewhere for later use

  // and so on for remaininng element

  // ZTM method
  reverse() {
    if (!this.head) return;

    let prev = null;
    let current = this.head;

    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
  }

  // also updates the head and tail pointers
  reverseMosh() {
    if (!this.head) return;

    console.log("Before reverse:");
    this.toArray(); // prints the array

    let prev = null;
    let current = this.head;

    while (current != null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    // update pointers
    this.tail = this.head;
    this.head = prev;

    console.log("After reverse:");
    this.toArray();
  }

  // Time Complexity O(nlogn) time & o(n) space
  reverse2(headNode) {
    // traverse from head to tail, and add each node data to array
    let data = [];
    let currentNode = headNode;

    while (currentNode != null) {
      data.push(currentNode.data);
      currentNode = currentNode.next;
    }

    // reverse the array
    let reverseData = data.reverse();

    // build new linkedlist from that reversed array
    let reverseList = new LinkedList(reverseData[0]);
    for (let i = 1; i < reverseData.length; i++) reverseList.addLast(reverseData[i]);

    // return this new linkedlist
    return reverseList;
  }
}

let list = new LinkedList();
console.log("list ", list);
list.addFirst(5);
list.addLast(20);
list.addLast(10);
list.addFirst(1);
list.toArray();
// list.indexOf(0);
// list.contains(5);
// list.removeFirst();
// list.removeFirst();
// list.removeLast();
// console.log(list);
// list.reverseMosh();
// console.log(list);
// list.insertAt(2, 55);
// list.insertAt(0, 35);
// console.log(list);
// list.removeAt(3);
// console.log(list);
// list.removeAt(list.length - 1);
// list.removeAt(list.length - 1);
// console.log("list", list);

// list.toArray();
// list.reverse(list.head);

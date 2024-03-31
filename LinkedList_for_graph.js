// node will be passed from outside, added 3 extra methods to remove node by a given value
export default class LinkedList {
  constructor(node = "") {
    if (node) {
      this.head = this.tail = node;
    } else {
      this.head = null;
      this.tail = null;
    }

    this.length = 0;
  }

  //prepend
  addFirst(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return newNode;
  }

  // append
  addLast(node) {
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
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

  // do not pass node, instead pass node value
  indexOf(data) {
    let index = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      if (currentNode.label === data) {
        console.log(`Index of "${data}" is  ${index}`);
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    console.log("Value doesnt exist.");
    return -1;
  }

  // do not pass node, instead pass node value
  // Find whether a value or data is present in linked list or not
  contains(data) {
    // we can refator this by calling indexof function => return indexOf(data)
    if (!this.head) return false;

    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.label === data) {
        // console.log("True");
        return true;
      }
      currentNode = currentNode.next;
    }

    // console.log("False");
    return false;
  }

  insertAt(index, node) {
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

      // let newNode = new Node(data);
      let temp = currentNode.next;
      currentNode.next = node;
      node.next = temp;
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

  // for directed unweighted graph,
  removeByValue(value) {
    if (!this.head) {
      throw new Error("List is empty.");
    } else if (value === this.head.label && value === this.tail.label) {
      this.tail = this.head = null;
    } else if (this.head.next) {
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode != null) {
        if (currentNode.label === value) {
          if (!prevNode) {
            this.head = this.head.next;
            break;
          }

          prevNode.next = currentNode.next;

          if (!currentNode.next) this.tail = prevNode;

          break;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    this.length--;
    // this.toArray();
  }

  // for undirected weighted graph,
  removeByValueUndirectedWeightedgraph(value) {
    if (!this.head) {
      throw new Error("List is empty.");
    } else if (value === this.head.to.label && value === this.tail.to.label) {
      this.tail = this.head = null;
    } else if (this.head.next) {
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode != null) {
        if (currentNode.to.label === value) {
          if (!prevNode) {
            this.head = this.head.next;
            break;
          }

          prevNode.next = currentNode.next;

          if (!currentNode.next) this.tail = prevNode;

          break;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    this.length--;
    // this.toArray();
  }

  // for undirected weighted graph 2 OOp,
  removeByValueUndirectedWeightedgraph_2_oop(value) {
    if (!this.head) {
      throw new Error("List is empty.");
    } else if (value === this.head.to && value === this.tail.to) {
      this.tail = this.head = null;
    } else if (this.head.next) {
      let currentNode = this.head;
      let prevNode = null;

      while (currentNode != null) {
        if (currentNode.to === value) {
          if (!prevNode) {
            this.head = this.head.next;
            break;
          }

          prevNode.next = currentNode.next;

          if (!currentNode.next) this.tail = prevNode;

          break;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
      }
    }

    this.length--;
    // this.toArray();
  }

  // Convert list to array and return it
  toArray() {
    let list = [];
    let currentNode = this.head;

    while (currentNode != null) {
      list.push(currentNode);
      currentNode = currentNode.next;
    }

    // console.log("Linked List: ", list);
    // console.log("Length: ", this.length);

    return list;
  }

  toString() {
    console.log(this);
  }
}

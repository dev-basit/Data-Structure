class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(data) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
    this.printList();
  }

  // toString or toArray
  printList() {
    let array = [];
    let currentNode = this.head;

    while (currentNode != null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    console.log(array);

    return array;
  }

  // append
  addLast(data) {
    let newNode = new Node(data); // mosh nai if else ko oper n6y lka h
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      this.printList();
    } else this.addBeginning(data);
  }

  //prepend
  addBeginning(data) {
    let newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = this.tail = newNode;
    }

    this.length++;
    this.printList();
  }
}

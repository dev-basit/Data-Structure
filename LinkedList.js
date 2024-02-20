class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class LinkedList {
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

  indexOf(data) {
    let currentNode = this.head;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.data === data) {
        console.log(index);
        return index;
      }
      currentNode = currentNode.next;
      index++;
    }

    console.log("value didnt exist");
    return false; // or return -1
  }

  // whether a value or data is present in linked list or not
  contains(data) {
    // we can refator this and call indexof function => return indexOf(data)
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.data === data) {
        console.log("value is present or contains ", true);
        return true;
      }
      currentNode = currentNode.next;
    }

    console.log("value didnt exist");
    return false;
  }

  insertAt(index, data) {
    if (index === 0) {
      this.addBeginning(data);
    } else if (index >= this.length) {
      //
      this.addLast(data);
    } else {
      let newNode = new Node(data);
      let i = 0;
      let currentNode = this.head;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      let temp = currentNode.next;
      currentNode.next = newNode;
      newNode.next = temp;
      this.length++;

      this.printList();
    }
  }

  removeFirst() {
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else if (this.length > 1) this.head = this.head.next; // refactor: if(this.head.next) this.head = this.head.next
    // js compiler will automatically delete temp or initial this.head
    if (this.head) this.length--;
    this.printList();
  }

  removeLast() {
    // length === 1
    if (this.head === this.tail) {
      this.tail = this.head = null;
    } else if (this.length > 1) {
      let currentNode = this.head;
      while (currentNode.next.next != null) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      this.tail.next = null;
    } else {
      console.log("Linked list doesnt exist");
      return;
    }
    if (this.length > 0) this.length--;

    this.printList();
  }

  // delete at specific index
  removeAt(index) {
    if (index >= this.length) {
      console.log("error: invalid index, plz enter correct index");
      this.printList();
      return;
    } else if (index === 0) this.removeFirst();
    else if (index === this.length - 1) this.removeLast();
    else {
      let currentNode = this.head;
      let i = 0;
      while (i < index - 1) {
        currentNode = currentNode.next;
        i++;
      }
      let tempNode = currentNode.next.next;
      currentNode.next = tempNode;
      this.length--;
      this.printList();
    }
  }

  // reverse(headNode) {
  //   // traverse from head to tail, and add each node data to array
  //   let data = [];
  //   let currentNode = headNode;

  //   while (currentNode != null) {
  //     data.push(currentNode.data);
  //     currentNode = currentNode.next;
  //   }

  //   // reverse the array
  //   let reverseData = data.reverse();

  //   // build new linkedlist from that reversed array
  //   let reverseList = new LinkedList(reverseData[0]);
  //   for (let i = 1; i < reverseData.length; i++) reverseList.addLast(reverseData[i]);

  //   // return this new linkedlist
  //   return reverseList;
  // }
}

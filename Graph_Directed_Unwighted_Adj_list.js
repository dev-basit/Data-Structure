import LinkedList from "./LinkedList_for_graph.js";
import Queue from "./Queue_linkedlist_based_for_graph.js";

class Node {
  constructor(label) {
    this.label = label;
  }
}

// Directed unweighted graph
class Graph_Directed_Unweighted {
  constructor() {
    this.nodes = new Map();
    this.adjacencyList = new Map();
  }

  addNode(label) {
    let node = new Node(label);
    this.nodes.set(label, node);
    this.adjacencyList.set(node, new LinkedList());
  }

  addEdge(from, to) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);
    if (!fromNode || !toNode) throw new Error("Invalid node keys");

    let linkedList = this.adjacencyList.get(fromNode);
    if (!linkedList.contains(toNode.label)) linkedList.addLast(toNode);
  }

  removeNode(label) {
    let node = this.nodes.get(label);
    if (node == null) return; // you can also throw exception

    for (let item of this.adjacencyList.keys()) {
      let linkedList = this.adjacencyList.get(item);
      if (linkedList.length > 0) linkedList.removeByValue(node.label);
    }

    this.adjacencyList.delete(node);
    this.nodes.delete(node.label);
  }

  removeEdge(from, to) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);
    if (fromNode == null || toNode == null) return; // you can also throw exception

    this.adjacencyList.get(fromNode).removeByValue(toNode.label);
  }

  print() {
    console.log();
    for (let item of this.adjacencyList.keys()) {
      let linkedList = this.adjacencyList.get(item);

      // if (linkedList.length > 0)
      console.log(item.label, " is connected to ", linkedList.toArray());
      // linkedList.toString();
    }
    console.log();
  }

  // recursive: root type is string
  traverseDepthFirst_recursice(root) {
    let node = this.nodes.get(root);
    if (!node) throw new Error("No node found");

    this.traverseDepthFirst2_Private_recursive(node, new Set());
  }

  traverseDepthFirst2_Private_recursive(root, visited) {
    if (visited.has(root)) return;

    console.log(root.label);
    visited.add(root);

    // toArray method convert linkedlist items into array and return array
    for (let neighbour of this.adjacencyList.get(root).toArray()) {
      if (!visited.has(neighbour)) this.traverseDepthFirst2_Private_recursive(neighbour, visited);
    }

    // use above for loop or this
    // let linkedList = this.adjacencyList.get(root);
    // if (linkedList && linkedList.length > 0) {
    //   let currentNode = linkedList.head;
    //   while (currentNode != null) {
    //     this.traverseDepthFirst2_Private_recursive(currentNode, visited);
    //     currentNode = currentNode.next;
    //   }
    // }
  }

  // iterative
  traverseDepthFirst_iterative(root) {
    let node = this.nodes.get(root);
    if (!node) throw new Error("No node found");

    let visited = new Set();
    let stack = [];
    stack.push(node);

    while (stack.length !== 0) {
      let current = stack.pop();

      if (visited.has(current)) continue;

      console.log(current.label);

      visited.add(current);

      // toArray method convert linkedlist items into array and return array
      for (let neighbour of this.adjacencyList.get(current).toArray()) {
        if (!visited.has(neighbour)) stack.push(neighbour);
      }

      // use above for loop or this
      // let linkedList = this.adjacencyList.get(current);
      // if (linkedList && linkedList.length > 0) {
      //   let currentNode = linkedList.head;
      //   while (currentNode != null) {
      //     if (!visited.has(currentNode)) stack.push(currentNode);
      //     currentNode = currentNode.next;
      //   }
      // }
    }
  }

  // recursive
  // traverseBreadthFirst_recursice(root) {
  //   let node = this.nodes.get(root);
  //   if (!node) throw new Error("No node found");

  //   this.traverseBreadthFirst2_Private_recursive(node, new Set());
  // }

  // traverseBreadthFirst2_Private_recursive(root, visited) {
  //   if (visited.has(root)) return;

  //   console.log(root);
  //   visited.add(root);

  //   for (let node in this.adjacencyList.get(root)) {
  //     if (!visited.has(node)) traverseDepthFirst2(node, visited);
  //   }
  // }

  // iterative
  traverseBreadthFirst_iterative(root) {
    let node = this.nodes.get(root);
    if (!node) throw new Error("No node found");

    let visited = new Set();
    let queue = new Queue();
    queue.enqueue(node);

    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      if (visited.has(current)) continue;

      console.log(current.label);
      visited.add(current);

      for (let neighbour of this.adjacencyList.get(current).toArray()) {
        if (!visited.has(neighbour)) queue.enqueue(neighbour);
      }
    }
  }

  // topological sort
  topologicalSort_recursive() {
    let set = new Set();
    let stack = [];

    for (let node of this.nodes.values()) this.topologicalSort_recursive_private(node, set, stack);

    let sorted = [];

    while (stack.length > 0) sorted.push(stack.pop().label);
    console.log("Topological sort: ", sorted);
    return sorted;
  }

  topologicalSort_recursive_private(node, visited, stack) {
    if (visited.has(node)) return;

    visited.add(node);

    for (let neighbour of this.adjacencyList.get(node).toArray())
      this.topologicalSort_recursive_private(neighbour, visited, stack);

    stack.push(node);
  }

  hasCycle() {
    let allVertices = new Set(this.nodes.values());

    let visiting = new Set();
    let visited = new Set();

    while (allVertices.size > 0) {
      let current = Array.from(allVertices)[0];

      if (this.hasCycle_private(current, allVertices, visiting, visited)) return true;
    }

    return false;
  }

  hasCycle_private(node, all, visiting, visited) {
    all.delete(node);
    visiting.add(node);

    for (let neighbour of this.adjacencyList.get(node).toArray()) {
      if (visited.has(neighbour)) continue;

      if (visiting.has(neighbour)) return true;

      if (this.hasCycle_private(neighbour, all, visiting, visited)) return true;
    }

    visiting.delete(node);
    visited.add(node);

    return false;
  }
}

const graph = new Graph_Directed_Unweighted();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("A", "C");

// graph.removeEdge("A", "C");
// graph.removeEdge("A", "D");
// graph.removeEdge("C", "A");

// graph.removeNode("C");
// graph.removeNode("A");
// graph.removeNode("B");
// graph.removeNode("D");
// graph.traverseDepthFirst_recursice("A");
// graph.traverseDepthFirst_recursice("C");
// graph.traverseDepthFirst_iterative("A");
// graph.traverseBreadthFirst_iterative("A");

// graph.addNode("A");
// graph.addNode("B");
// graph.addNode("C");
// graph.addNode("P");

// graph.addEdge("X", "A");
// graph.addEdge("X", "B");
// graph.addEdge("A", "P");
// graph.addEdge("B", "P");
// graph.topologicalSort_recursive();

// console.log(graph.hasCycle());
graph.print();

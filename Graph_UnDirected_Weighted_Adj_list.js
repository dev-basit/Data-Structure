import LinkedList from "./LinkedList_for_graph.js";
import Queue from "./Queue_linkedlist_based_for_graph.js";

class Node {
  constructor(label) {
    this.label = label;
  }
}

class Edge {
  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }
}

// UnDirected weighted graph
class Graph_Undirected_Weighted {
  constructor() {
    this.nodes = new Map();
    this.adjacencyList = new Map(); // now here we will store Edges as values
  }

  addNode(label) {
    let node = new Node(label);
    this.nodes.set(label, node);
    this.adjacencyList.set(node, new LinkedList());
  }

  addEdge(from, to, weight) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);
    if (!fromNode || !toNode) throw new Error("Invalid node keys");

    let linkedListFromNode = this.adjacencyList.get(fromNode);
    let linkedListToNode = this.adjacencyList.get(toNode);
    if (!linkedListFromNode.contains(toNode.label) && !linkedListToNode.contains(fromNode.label)) {
      linkedListFromNode.addLast(new Edge(fromNode, toNode, weight));
      linkedListToNode.addLast(new Edge(toNode, fromNode, weight));
    }
  }

  removeNode(label) {
    let node = this.nodes.get(label);
    if (node == null) return; // you can also throw exception

    // remove from all the linkedlist the nodes whose to label is equal to label, and at the end delete the node linkedlist and node as well
    for (let item of this.nodes.values()) {
      let linkedList = this.adjacencyList.get(item);
      if (linkedList.length > 0) linkedList.removeByValueUndirectedWeightedgraph(label);
    }

    this.adjacencyList.delete(node);
    this.nodes.delete(node.label);
  }

  removeEdge(from, to) {
    let fromNode = this.nodes.get(from);
    let toNode = this.nodes.get(to);
    if (fromNode == null || toNode == null) return; // you can also throw exception

    // its is undirected graph, so remove both the edges
    this.adjacencyList.get(fromNode).removeByValueUndirectedWeightedgraph(toNode.label);
    this.adjacencyList.get(toNode).removeByValueUndirectedWeightedgraph(fromNode.label);
  }

  print() {
    console.log();

    for (let item of this.adjacencyList.keys()) {
      let linkedList = this.adjacencyList.get(item);

      let linkedListItems = linkedList.toArray();
      let edges = [];
      for (let egde of linkedListItems) {
        edges.push(egde.to.label);
      }

      console.log(item.label, " is connected to ", edges);
      // linkedList.toString();
      console.log();
    }

    console.log();
  }

  // // recursive: root type is string
  // traverseDepthFirst_recursice(root) {
  //   let node = this.nodes.get(root);
  //   if (!node) throw new Error("No node found");

  //   this.traverseDepthFirst2_Private_recursive(node, new Set());
  // }

  // traverseDepthFirst2_Private_recursive(root, visited) {
  //   if (visited.has(root)) return;

  //   console.log(root.label);
  //   visited.add(root);

  //   // toArray method convert linkedlist items into array and return array
  //   for (let neighbour of this.adjacencyList.get(root).toArray()) {
  //     if (!visited.has(neighbour)) this.traverseDepthFirst2_Private_recursive(neighbour, visited);
  //   }

  //   // use above for loop or this
  //   // let linkedList = this.adjacencyList.get(root);
  //   // if (linkedList && linkedList.length > 0) {
  //   //   let currentNode = linkedList.head;
  //   //   while (currentNode != null) {
  //   //     this.traverseDepthFirst2_Private_recursive(currentNode, visited);
  //   //     currentNode = currentNode.next;
  //   //   }
  //   // }
  // }

  // // iterative
  // traverseDepthFirst_iterative(root) {
  //   let node = this.nodes.get(root);
  //   if (!node) throw new Error("No node found");

  //   let visited = new Set();
  //   let stack = [];
  //   stack.push(node);

  //   while (stack.length !== 0) {
  //     let current = stack.pop();

  //     if (visited.has(current)) continue;

  //     console.log(current.label);

  //     visited.add(current);

  //     // toArray method convert linkedlist items into array and return array
  //     for (let neighbour of this.adjacencyList.get(current).toArray()) {
  //       if (!visited.has(neighbour)) stack.push(neighbour);
  //     }

  //     // use above for loop or this
  //     // let linkedList = this.adjacencyList.get(current);
  //     // if (linkedList && linkedList.length > 0) {
  //     //   let currentNode = linkedList.head;
  //     //   while (currentNode != null) {
  //     //     if (!visited.has(currentNode)) stack.push(currentNode);
  //     //     currentNode = currentNode.next;
  //     //   }
  //     // }
  //   }
  // }

  // // recursive
  // // traverseBreadthFirst_recursice(root) {
  // //   let node = this.nodes.get(root);
  // //   if (!node) throw new Error("No node found");

  // //   this.traverseBreadthFirst2_Private_recursive(node, new Set());
  // // }

  // // traverseBreadthFirst2_Private_recursive(root, visited) {
  // //   if (visited.has(root)) return;

  // //   console.log(root);
  // //   visited.add(root);

  // //   for (let node in this.adjacencyList.get(root)) {
  // //     if (!visited.has(node)) traverseDepthFirst2(node, visited);
  // //   }
  // // }

  // // iterative
  // traverseBreadthFirst_iterative(root) {
  //   let node = this.nodes.get(root);
  //   if (!node) throw new Error("No node found");

  //   let visited = new Set();
  //   let queue = new Queue();
  //   queue.enqueue(node);

  //   while (!queue.isEmpty()) {
  //     let current = queue.dequeue();
  //     if (visited.has(current)) continue;

  //     console.log(current.label);
  //     visited.add(current);

  //     for (let neighbour of this.adjacencyList.get(current).toArray()) {
  //       if (!visited.has(neighbour)) queue.enqueue(neighbour);
  //     }
  //   }
  // }

  // // topological sort
  // topologicalSort_recursive() {
  //   let set = new Set();
  //   let stack = [];

  //   for (let node of this.nodes.values()) this.topologicalSort_recursive_private(node, set, stack);

  //   let sorted = [];

  //   while (stack.length > 0) sorted.push(stack.pop().label);
  //   console.log("Topological sort: ", sorted);
  //   return sorted;
  // }

  // topologicalSort_recursive_private(node, visited, stack) {
  //   if (visited.has(node)) return;

  //   visited.add(node);

  //   for (let neighbour of this.adjacencyList.get(node).toArray())
  //     this.topologicalSort_recursive_private(neighbour, visited, stack);

  //   stack.push(node);
  // }

  // hasCycle() {
  //   let allVertices = new Set(this.nodes.values());

  //   let visiting = new Set();
  //   let visited = new Set();

  //   while (allVertices.size > 0) {
  //     let current = Array.from(allVertices)[0];

  //     if (this.hasCycle_private(current, allVertices, visiting, visited)) return true;
  //   }

  //   return false;
  // }

  // hasCycle_private(node, all, visiting, visited) {
  //   all.delete(node);
  //   visiting.add(node);

  //   for (let neighbour of this.adjacencyList.get(node).toArray()) {
  //     if (visited.has(neighbour)) continue;

  //     if (visiting.has(neighbour)) return true;

  //     if (this.hasCycle_private(neighbour, all, visiting, visited)) return true;
  //   }

  //   visiting.delete(node);
  //   visited.add(node);

  //   return false;
  // }
}

const graph = new Graph_Undirected_Weighted();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");

graph.addEdge("A", "B", 3);
graph.addEdge("B", "C", 6);
graph.addEdge("A", "C", 4);

// graph.removeNode("A");
// graph.removeNode("B");
// graph.removeNode("C");

// graph.removeEdge("A", "C");
// graph.removeEdge("A", "B");
// graph.removeEdge("C", "B");

graph.print();

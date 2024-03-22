class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.height = null;
  }
}

class AVL_Tree {
  constructor(node = null) {
    this.root = node;
  }

  // return whether a given value exists or not
  searchingRecursively(rootNode, value) {
    if (!rootNode) return false;

    if (rootNode.value === value) return true;

    if (value < rootNode.value) return this.searchingRecursively(rootNode.left, value);
    if (value > rootNode.value) return this.searchingRecursively(rootNode.right, value);
  }

  // same as searching, same method ztm (lookup)
  findIterativeMosh(value) {
    if (this.root === null) return false;

    let currentNode = this.root;

    while (currentNode !== null) {
      if (value < currentNode.value) currentNode = currentNode.left;
      else if (value > currentNode.value) currentNode = currentNode.right;
      else return true; /// else if(value === currentNode.value) return true
    }

    return false;
  }

  findMinimumValueRecursively(rootNode) {
    if (!rootNode.left) return rootNode.value;

    return this.findMinimumValueRecursively(rootNode.left);
  }

  findMinimumValueIterativelyMosh() {
    let currentNode = this.root;
    let lastNode = currentNode;

    while (currentNode != null) {
      lastNode = currentNode;
      currentNode = currentNode.left;
    }

    return lastNode.value;
  }

  findMinimumValueRecursivelyInBinaryTree(rootNode) {
    if (rootNode.left === null && rootNode.right === null) return rootNode.value;

    let left = this.findMinimumValueRecursivelyInBinaryTree(rootNode.left);
    let right = this.findMinimumValueRecursivelyInBinaryTree(rootNode.right);

    return Math.min(Math.min(left, right), rootNode.value);
  }

  // same as inset AVL mosh
  insertRecursiveZtm(currentNode = this.root, value) {
    if (currentNode == null) return new Node(value);

    if (value < currentNode.value) currentNode.left = this.insertRecursive(currentNode.left, value);
    else currentNode.right = this.insertRecursive(currentNode.right, value);

    currentNode.height = 1 + Math.max(this.height(currentNode.left), this.height(currentNode.right));
    // or   setHeight(currentNode)

    currentNode = balance(currentNode);

    return currentNode;
  }

  balance(node) {
    if (this.isLeftHeavy(node)) {
      if (this.balanceFactor(node.left < 0)) node.left = this.rotateLeft(node.left);

      return this.rotateRight(node);
      //
    } else if (this.isRightHeavy(node)) {
      if (this.balanceFactor(node.right > 0)) node.right = this.rotateRight(node.right);

      return this.rotateLeft(node);
    }

    return node;
  }

  height(node) {
    return node ? node.height : -1;
  }

  setHeight(node) {
    node.height = 1 + Math.max(this.height(node.left), this.height(node.right));
  }

  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }

  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balanceFactor(node) {
    return node ? this.height(node.left) - this.height(node.right) : 0;
  }

  rotateLeft(node) {
    let newRoot = node.right;
    node.right = newRoot.left;
    newRoot.left = node;

    setHeight(node);
    setHeight(newRoot);

    return newRoot;
  }

  rotateRight(node) {
    let newRoot = node.left;
    node.left = newRoot.right;
    newRoot.right = node;

    setHeight(node);
    setHeight(newRoot);

    return newRoot;
  }

  // same ztm method
  // insertIterativeMosh(value) {
  //   let newNode = new Node(value);

  //   if (this.root == null) {
  //     this.root = newNode;
  //     return;
  //   }

  //   let currentNode = this.root;
  //   while (true) {
  //     if (value < currentNode.value) {
  //       if (currentNode.left === null) {
  //         currentNode.left = newNode;
  //         break;
  //       }

  //       currentNode = currentNode.left;
  //     } else {
  //       if (currentNode.right === null) {
  //         currentNode.right = newNode;
  //         break;
  //       }

  //       currentNode = currentNode.right;
  //     }
  //   }
  // }

  //
  deleteGFG(rootNode, value) {
    if (rootNode === null) return rootNode;

    if (value < rootNode.value) rootNode.left = this.deleteGFG(rootNode.left, value);
    else if (value > rootNode.value) rootNode.right = this.deleteGFG(rootNode.right, value);
    else {
      if (rootNode.left === null) return rootNode.right;
      else if (rootNode.right === null) return rootNode.left;

      rootNode.value = findMinimumValueRecursively(rootNode.right);
      rootNode.right = this.deleteGFG(rootNode.right, rootNode.value);
    }

    return rootNode;
  }

  findNodeHavingMaxValueRecursively(rootNode) {
    if (!rootNode.right) return rootNode;

    return findNodeHavingMaxValueRecursively(rootNode.right);
  }

  //
  preOrderTraversal(rootNode = this.root) {
    if (rootNode == null) return;

    console.log(rootNode.value);
    this.preOrderTraversal(rootNode.left);
    this.preOrderTraversal(rootNode.right);
  }

  postOrderTraversal(rootNode = this.root) {
    if (rootNode == null) return;

    this.postOrderTraversal(rootNode.left);
    this.postOrderTraversal(rootNode.right);
    console.log(rootNode.value);
  }

  inOrderTraversal(rootNode = this.root) {
    if (rootNode == null) return;

    this.preOrderTraversal(rootNode.left);
    console.log(rootNode.value);
    this.preOrderTraversal(rootNode.right);
  }

  // jugaar, real method is using queus
  levelOrderTraversal(height) {
    for (let i = 0; i <= height; i++) {
      printNodesAtKthDistance(this.rootNode, height, i);
    }
  }

  findHeightOfTree(rootNode) {
    if (rootNode === null) return -1;

    if (rootNode.left === null && rootNode.right === null) return 0;

    let heightOfLeftSubtree = this.findHeightOfTree(rootNode.left);
    let heightOfRightSubtree = this.findHeightOfTree(rootNode.right);

    return 1 + Math.max(heightOfLeftSubtree, heightOfRightSubtree);
  }

  // compare by values of each node
  compareTwoBinaryTreesMosh(firstTreeNode, secondTreeNode) {
    if (firstTreeNode === null && secondTreeNode === null) return true;

    if (firstTreeNode !== null && secondTreeNode !== null) {
      return (
        firstTreeNode.value === secondTreeNode.value &&
        this.compareTwoBinaryTrees(firstTreeNode.left, secondTreeNode.left) &&
        this.compareTwoBinaryTrees(firstTreeNode.right, secondTreeNode.right)
      );
    }

    return false;
  }

  // validate if the tree is BST
  isBinarySearchTree(currentNode, min, max) {
    if (currentNode === null) return true;

    if (currentNode.value < min || currentNode.value > max) return false;

    return (
      this.isBinarySearchTree(currentNode.left, min, currentNode.value - 1) &&
      this.isBinarySearchTree(currentNode.right, currentNode.value + 1, max)
    );
  }

  printNodesAtKthDistance(currentNode, distance) {
    if (currentNode == null) return;

    if (distance == 0) {
      console.log("currentNode value ", currentNode.value);
      return;
    }

    this.printNodesAtKthDistance(currentNode.left, distance - 1);
    this.printNodesAtKthDistance(currentNode.right, distance - 1);
  }
}

// let node1 = new Node(5);
// console.log(node1);
// let node2 = new Node(10);
// let node3 = new Node(4);
// let node4 = new Node(12);
// let node5 = new Node(2);
let BST = new BinaryTree(node1);

console.log(BST);
// BST.insertRecursive(BST, node1);
// BST.insertRecursive(10);
// BST.insertRecursive(7);
// BST.insertRecursive(12);
// BST.insertRecursive(2);
// BST.insertRecursive(20);
// BST.insertRecursive(1);

BST.insertIterativeMosh(1);

// console.log(BST);
// BST.preOrderTraversal();

// BST.deleteRecursively(node1, 1);
// BST.deleteRecursively(node1, 2);

// console.log("root node", node1);
// console.log(BST);
// BST.preOrderTraversal();

// BST.deleteRecursively(node1, 5);
// console.log("\n\nDeelting root node, value is 5\n\n");

// console.log("root node", node1);
// BST.preOrderTraversal();
// console.log(BST);

// BST.deleteRecursively(node1, 10);

// console.log("\n\nDeelting node, value is 10\n\n");

// console.log("root node", node1);
// console.log(BST);
// BST.preOrderTraversal();

// console.log("\n\nDeelting root node again,  \n\n");

// console.log("root node", node1);
// BST.preOrderTraversal();
// console.log(BST);
// BST.deleteRecursively(node1, 2);

// console.log("\n\nDeelting root node again,  \n\n");

// console.log("root node", node1);
// BST.preOrderTraversal();
// console.log(BST);
// BST.deleteRecursively(node1, 1);

// console.log("\n\nDeelting root node again,  \n\n");

// BST.deleteRecursively(node1, 1);
// console.log("root node", node1);
// BST.preOrderTraversal();
// console.log(BST);

//minimum
// console.log(BST.findMinimumValueRecursively(node1));

// BST.insertRecursive(-10);
// console.log(BST.findMinimumValueRecursively(node1));

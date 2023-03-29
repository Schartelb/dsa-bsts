class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    let current = this.root
    let newNode = new Node(val)
    if (current == null) {
      this.root = newNode
      return this
    }
    let queue = [current]
    while (queue.length) {
      let current = queue.shift()
      if (newNode.val > current.val) {
        if (!current.right) { current.right = newNode } else {
          queue.push(current.right)
        }
      }
      if (newNode.val < current.val) {
        if (!current.left) { current.left = newNode } else {
          queue.push(current.left)
        }
      }
    }
    return this
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {
    let current = this.root
    let newNode = new Node(val)
    if (current == null) {
      this.root = newNode
      return this
    }
    function _insertRecursively(newNode, current) {
      if (newNode.val > current.val) {
        if (!current.right) { current.right = newNode } else {

          _insertRecursively(newNode, current.right)
        }
      }
      if (newNode.val < current.val) {
        if (!current.left) { current.left = newNode } else {
          _insertRecursively(newNode, current.left)
        }
      }
    }
    _insertRecursively(newNode, current)
    return this
  }


  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    let queue = [current]
    while (queue.length) {
      let current = queue.shift()
      if (val > current.val) {
        if (current.right) { queue.push(current.right) }
      }
      if (val < current.val) {
        if (current.left) { queue.push(current.left) }
      }
      if (val == current.val) { return current }
    }

    return undefined
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    let current = this.root
    function _insertRecursively(val, current) {
      if (val > current.val) {
        if (current.right) { return _insertRecursively(val, current.right) }
      } else if (val < current.val) {
        if (current.left) { return _insertRecursively(val, current.left) }
      } else if (current.val === val) { return current }
    }
    return _insertRecursively(val, current)
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visited = [],
      current = this.root;

    let traverse = node => {
      visited.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visited = [],
      current = this.root;

    let traverse = node => {
      if (node.left) traverse(node.left);
      visited.push(node.val);
      if (node.right) traverse(node.right);
    };

    traverse(current);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visited = [],
      current = this.root;

    let traverse = node => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.val);
    };

    traverse(current);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visited = [],
      queue = [],
      current = this.root;
    queue.push(current);
    while (queue.length) {
      current = queue.shift();
      visited.push(current.val);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    };
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;

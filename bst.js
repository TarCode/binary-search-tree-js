/*
    Based on: https://khan4019.github.io/front-end-Interview-Questions/bst.html
*/

// To create a Binary Search Tree:

// Create a node:
function Node(val) {
    this.value = val
    this.left = null
    this.right = null
}


// Create a constructor for the BST
function BinarySearchTree() {
    this.root = null
}

/*
    The structure of a Binary Search Tree is as follows:

    - Every node value on the left is smaller than the parent node (root)
    - Every node value on the right is larger than the parent node (root)

    This would require you to find the appropriate location when inserting
*/

BinarySearchTree.prototype.push = function(val) {
    var root = this.root

    if (!root) {
        this.root = new Node(val)
        return
    }

    var currentNode = root
    var newNode = new Node(val)

    while(currentNode) {
        if (val < currentNode.value) {
            if(!currentNode.left) {
                currentNode.left = newNode
                break
            } else {
                currentNode = currentNode.left
            }
        } else {
            if (!currentNode.right) {
                currentNode.right = newNode
                break
            } else {
                currentNode = currentNode.right
            }
        }
    }
}

// Depth First Search 

// Pre Order Traversal
function preOrder(node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}

// In Order Traversal
function inOrder(node) {
    if (node) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}

// Post Order Traversal
function postOrder(node) {
    if (node) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}

// Min Value
function minNode(node) {
    if (!node) {
        return 0
    }
    if (node.left) {
        return minNode(node.left)
    }
    return node.value
}

// Max Value
function maxNode(node) {
    if (!node) {
        return 0
    }
    if (node.right) {
        return maxNode(node.right)
    }
    return node.value
}


// Create instance of BST
var bst  = new BinarySearchTree()

// Push values to BST
bst.push(40)
bst.push(25)
bst.push(10)
bst.push(32)
bst.push(78)


// Call search methods
console.log("***DEPTH FIRST SEARCH***");
console.log("Pre order traversal: ");
preOrder(bst.root)

console.log("\nIn order traversal: ");
inOrder(bst.root)

console.log("\nPost order traversal: ");
postOrder(bst.root)
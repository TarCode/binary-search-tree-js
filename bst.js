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
function dfs(node) {
    if (node) {
        console.log(node.value);
        dfs(node.left)
        dfs(node.right)
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

var bst  = new BinarySearchTree()

// console.log("BST BEFORE", bst)

bst.push(2)
bst.push(1)
bst.push(5)
bst.push(1)

// console.log("BST AFTER", bst);

console.log("***DEPTH FIRST SEARCH***");
dfs(bst.root)

console.log("\n***IN ORDER TRAVERSAL***");
inOrder(bst.root)
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
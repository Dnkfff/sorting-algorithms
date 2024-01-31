'use strict'

class Node {
    data: number;
    left: Node | null;
    right: Node | null;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Binary Search tree class 
class BinarySearchTree {
    root: Node | null;

    constructor() {
        this.root = null;
    }

    insert(data: number) {
        const newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node: Node, newNode: Node) {
        if (newNode.data < node.data) {
            if (node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            if (node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode);
        }
    }

    remove(data: number) {
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node: Node | null, key: number): Node | null {
        if (node === null)
            return null;

        else if (key < node.data) {
            node.left = this.removeNode(node.left, key);
            return node;
        }

        else if (key > node.data) {
            node.right = this.removeNode(node.right, key);
            return node;
        }

        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if (node.left === null) {
                node = node.right;
                return node;
            }

            else if (node.right === null) {
                node = node.left;
                return node;
            }

            var aux = this.findMinNode(node.right);
            node.data = aux.data;

            node.right = this.removeNode(node.right, aux.data);
            return node;
        }
    }

    findMinNode(node: Node): Node {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }

    search(node: Node | null, data: number): Node | null {
        if (node === null)
            return null;

        else if (data < node.data)
            return this.search(node.left, data);

        else if (data > node.data)
            return this.search(node.right, data);

        else
            return node;
    }

    getRootNode(): Node | null {
        return this.root;
    }
}

let BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);
BST.remove(5);
BST.remove(7);
BST.remove(15);

var root = BST.getRootNode();
console.log(root);
console.log("inorder traversal");

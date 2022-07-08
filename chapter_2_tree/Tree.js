import Node from "./Node.js";
import Queue from "./Queue.js";

export default class Tree {
    constructor(data) {
        let node = new Node(data);
        this.root = node;
    }

    traverseDF(callback) {
        (function recurse(currentNode) {
            for (let i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }

            callback(currentNode);

        })(this.root);
    }

    traverseBF(callback) {
        let queue = new Queue();

        queue.enqueue(this.root);

        let currentTree = queue.dequeue();
        while (currentTree) {
            for (let i = 0, length = currentTree.children.length; i < length; i++) {
                queue.enqueue(currentTree.children[i]);
            }

            callback(currentNode);
            currentTree = queue.dequeue();

        }

    }

    contains(callback, traversal) {
        traversal.call(this, callback);
    }

    add(data, toData, traversal = this.traverseDF) {
        let child = new Node(data);
        let parent = null;

        this.contains(node => node.data === toData ? parent = node : parent, traversal);

        if (parent) {
            parent.children.push(child);
            child.parent = parent;
        } else {
            throw new Error('Cannot add node to a non-existent parent.');
        }
    }

    remove(data, fromData, traversal = this.traverseDF) {
        let parent = null;

        this.contains(node => node.data === fromData ? parent = node : parent, traversal);

        if (parent) {
            const index = this.findIndex(parent.children, data);

            if (index !== undefined) return parent.children.splice(index, 1);
            else throw new Error('Node to remove does not exist.');

        } else {
            throw new Error('Parent does not exist.');
        }
    }

    findIndex(arr, data) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].data === data) return i;
        }
    }
}


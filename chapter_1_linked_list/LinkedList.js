import Node from "./Node.js";

export default class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToStart(value) {
        let newNode = new Node(value, this.head);

        if (this.head) {
            this.head.previous = newNode;
        }

        this.head = newNode;

        if (!this.tail) {
            this.tail = newNode;
        }

        return this;
    }

    addToEnd(value) {
        const newNode = new Node(value);

        if (this.tail) {
            this.tail.next = newNode;
        }

        newNode.previous = this.tail;

        this.tail = newNode;

        if (!this.head) {
            this.head = newNode;
        }

        return this;

    }

    deleteNode(value) {
        if (!this.head) {
            return null;
        }

        let deletedNode = null;
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                deletedNode = currentNode;

                if (deletedNode === this.head) {
                    this.head = deletedNode.next;

                    if (this.head) {
                        this.head.previous = null;
                    }

                    if (deletedNode === this.tail) {
                        this.tail = null;
                    }
                } else if (deletedNode === this.tail) {
                    this.tail = deletedNode.previous;
                    this.tail.next = null;
                } else {
                    const previousNode = deletedNode.previous;
                    const nextNode = deletedNode.next;

                    previousNode.next = nextNode;
                    nextNode.previous = previousNode;
                }
            }

            currentNode = currentNode.next;
        }

        return deletedNode;
    }

    findNode(value) {
        if (!this.head) {
            return null;
        }

        let currentValue = this.head;

        while (currentValue) {
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentValue = currentValue.next;
        }
    }

    deleteFromEnd() {
        if (!this.tail) {
            return null;
        }

        let deletedNode = this.tail;

        if (deletedNode.previous) {
            this.tail = deletedNode.previous;
            this.tail.next = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedNode;
    }

    deleteFromStart() {
        if (!this.head) {
            return null;
        }

        let deletedNode = this.head;

        if (deletedNode.next) {
            this.head = deletedNode.next;
            this.head.previous = null;
        } else {
            this.head = null;
            this.tail = null;
        }

        return deletedNode;
    }

    arrayToNode(values) {
        values.forEach(value => this.addToEnd(value));

        return this;
    }

    toArray() {
        const nodes = [];

        let currentNode = this.head;

        while (currentNode) {
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }

        return nodes;
    }
}
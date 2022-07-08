export default class Queue {
    constructor() {
        this.queue = {};
        this.tail = 0;
        this.head = 0;
    }
}

Queue.prototype.enqueue = function(element) {
    this.queue[this.tail++] = element;
}

Queue.prototype.dequeue = function() {
    if (this.tail === this.head)  return undefined

    const element = this.queue[this.head];
    delete this.queue[this.head];

    return element;
}
import LinkedList from "./LinkedList.js";

export default class Queue {
    constructor() {
        this.queue = new LinkedList;
    }

    enqueue(item) {
        this.queue.addToStart(item);
    }

    dequeue() {
        this.queue.deleteFromEnd();
    }

    addQueueBlockToContainer(value){
        let container = document.getElementsByClassName('container')[1];
        let divElement = document.createElement('div');
        divElement.className = 'block';
        divElement.innerHTML = value;
        container.appendChild(divElement);
    }

    renderQueue(){
        let currentNode = this.queue.head;

        while (currentNode) {
            this.addQueueBlockToContainer(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    clearRenderedQueue(){
        const container = document.getElementsByClassName("container")[1];
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

}
import LinkedList from "./LinkedList.js";

export default class Stack {
    constructor() {
        this.stack = new LinkedList;
    }

    push(item) {
        this.stack.addToStart(item);
    }

    pop() {
        this.stack.deleteFromStart();
    }

    addStuckBlockToContainer(value){
        let container = document.getElementsByClassName('container')[0];
        let divElement = document.createElement('div');
        divElement.className = 'block';
        divElement.innerHTML = value;
        container.appendChild(divElement);
    }

    renderStuck(){
        let currentNode = this.stack.head;

        while (currentNode) {
            this.addStuckBlockToContainer(currentNode.value);
            currentNode = currentNode.next;
        }
    }

    clearRenderedStuck(){
        const container = document.getElementsByClassName("container")[0];
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    }

}
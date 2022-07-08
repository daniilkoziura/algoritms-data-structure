import Stuck from "./Stuck.js";
import Queue from "./Queue.js";

class Main {
    constructor() {
        this.stuckInstance = new Stuck();
        this.queueInstance = new Queue();
    }
}

let main = new Main();

document.getElementById('add-in-stuck').addEventListener('click', () => {
    main.stuckInstance.clearRenderedStuck();
    main.stuckInstance.push(Math.floor(Math.random() * 101));
    main.stuckInstance.renderStuck();
});

document.getElementById('remove-from-stuck').addEventListener('click', () => {
    main.stuckInstance.clearRenderedStuck();
    main.stuckInstance.pop();
    main.stuckInstance.renderStuck();
});

document.getElementById('add-in-queue').addEventListener('click', () => {
    main.queueInstance.clearRenderedQueue();
    main.queueInstance.enqueue(Math.floor(Math.random() * 101));
    main.queueInstance.renderQueue();
});

document.getElementById('remove-from-queue').addEventListener('click', () => {
    main.queueInstance.clearRenderedQueue();
    main.queueInstance.dequeue();
    main.queueInstance.renderQueue();
});
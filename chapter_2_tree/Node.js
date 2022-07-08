export default class Node {
    constructor(data, parent = null, children = []) {
        this.data = data;
        this.parent = null;
        this.children = [];
    }
}
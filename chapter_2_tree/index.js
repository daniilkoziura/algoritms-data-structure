import Tree from "./Tree.js";

export default class MainSecond {
    constructor() {
        this.selectElement = this.initParentSelector()
        this.tree = new Tree("MainFolder");
    }

    initParentSelector() {
        let container = document.getElementById('data-to-tree');
        let selectElement = document.createElement('select');
        selectElement.id = 'select-tree';
        container.appendChild(selectElement);
        return selectElement;
    }

    removeParentSelector() {
        const previousSelect = document.getElementById('select-tree');
        if (previousSelect) previousSelect.remove();
    }

    renderParentOptions() {
        this.removeParentSelector();
        this.selectElement = this.initParentSelector();

        const options = this.getDataForSelection();
        options.forEach(option => {
            this.createOption(option);
        })
    }

    getDataForSelection() {
        let data = [];
        (function recurse(currentNode) {
            for (let i = 0, length = currentNode.children.length; i < length; i++) {
                recurse(currentNode.children[i]);
            }
            data.push(currentNode.data);
        })(this.tree.root)
        return data;
    }

    getDataForRenderTree() {
        const options = {};
        options[this.tree.root.data] = {};

        (function recurse(currentNode) {
            for (let i = 0, length = currentNode.children.length; i < length; i++) {

                const parent = currentNode.children[i].parent.data;
                const currentValue = currentNode.children[i].data;

                if (parent) {
                    (function optionRecurse(options, parent, currentValue) {
                        for (let key in options) {
                            if (key === parent) options[key][currentValue] = {};
                            else optionRecurse(options[key], parent, currentValue);
                        }
                    })(options, parent, currentValue);
                } else {
                    options[currentValue] = {};
                }

                recurse(currentNode.children[i]);
            }

        })(this.tree.root);

        return options;
    }

    renderTree() {
        let container = document.getElementById('tree-container');
        let data = this.getDataForRenderTree();
        container.append(this.createTreeDom(data));
    }

    clearTree() {
        let container = document.getElementById('tree-container');
        container.innerHTML = '';
    }

    createTreeDom(obj) {
        if (!Object.keys(obj).length) return;

        let ul = document.createElement('ul');

        for (let key in obj) {
            let li = document.createElement('li');
            li.innerHTML = key;

            let childrenUl = this.createTreeDom(obj[key]);
            if (childrenUl) {
                li.append(childrenUl);
            }

            ul.append(li);
        }

        return ul;
    }

    createOption(option) {
        let optionElement = document.createElement("option");
        optionElement.value = option;
        optionElement.text = option;
        this.selectElement.appendChild(optionElement);
    }
}

const main = new MainSecond();

document.getElementById('add-in-tree').addEventListener('click', () => {
        let inputData = document.getElementById("data-in-tree").value;
        let inputDataTo = document.getElementById("select-tree").value;

        if (inputData) main.tree.add(inputData, inputDataTo, main.tree.traverseDF);
        main.clearTree();
        main.renderParentOptions();

        main.renderTree();
    }
);

document.getElementById('remove-from-tree').addEventListener('click', () => {
    let inputData = document.getElementById("data-in-tree").value;
    let inputDataFrom = document.getElementById("select-tree").value;

    if (inputData) main.tree.remove(inputData, inputDataFrom, main.tree.traverseDF);

    main.clearTree();
    main.renderParentOptions();
    main.renderTree();
});

main.clearTree();
main.renderParentOptions();
main.renderTree();

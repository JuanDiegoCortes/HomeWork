class Node {
    constructor(person) {
        this.person = person;
        this.children = [];
    }

    addChild(childNode) {
        this.children.push(childNode);
    }

    isLeaf() {
        return this.children.length === 0;
    }
}

class NaryTree {
    constructor() {
        this.root = null;
    }

    search(fullName, node = this.root) {
        if (!node) {
            return null;
        }
        if (node.person.nombreCompleto === fullName) {
            return node;
        }
        for (const child of node.children) {
            const found = this.search(fullName, child);
            if (found) {
                return found;
            }
        }
        return null;
    }

    insert(fullName, birthDate, parentFullName) {
        const newPerson = new Persona(fullName, birthDate);
        const newNode = new Node(newPerson);
        if (!parentFullName) {
            if (!this.root) {
                this.root = newNode;
            } else {
                return null;
            }
        } else {
            const parentNode = this.search(parentFullName);
            if (parentNode) {
                parentNode.addChild(newNode);
            } else {
                return null;
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.person.nombreCompleto, node.person.cumpleaños);
        node.children.forEach(child => {
            this.preOrder(child);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(child => {
            this.postOrder(child);
        });
        console.log(node.person.nombreCompleto, node.person.cumpleaños);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        if (node.isLeaf()) {
            console.log(node.person.nombreCompleto, node.person.cumpleaños);
        } else {
            const midIndex = Math.floor(node.children.length / 2);
            for (let i = 0; i < midIndex; i++) {
                this.inOrder(node.children[i]);
            }
            console.log(node.person.nombreCompleto, node.person.cumpleaños);
            for (let i = midIndex; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

class Persona {
    constructor(nombreCompleto, cumpleaños) {
        this.nombreCompleto = nombreCompleto;
        this.cumpleaños = cumpleaños;
    }
}


const familyTree = new NaryTree();
familyTree.insert('Jose Manuel Cortes', '1960-01-01'); 
familyTree.insert('Manuel Alejandro Cortes', '19-05-10', 'Jose Manuel Cortes'); 
familyTree.insert('Juan Diego Cortes', '2004-08-20', 'Manuel Alejandro Cortes'); 


console.log('Preorden:');
familyTree.preOrder();


console.log('Postorden:');
familyTree.postOrder();


console.log('Inorden:');
familyTree.inOrder();
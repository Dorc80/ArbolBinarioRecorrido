function BST() {
    this.root = null;
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function (val) {

    let currentNode = this.root;

    if (this.root == null) {
        this.root = new Node(val);
        return this;
    }

    let salir = false;

    while (!salir) {

        if (val < currentNode.value) {
            if (currentNode.left == null) {
                currentNode.left = new Node(val);
                salir = true;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if (currentNode.right == null) {
                currentNode.right = new Node(val);
                salir = true;
            } else {
                currentNode = currentNode.right;
            }
        }

    }

    return this;

}

/**
 * VLR
 */
BST.prototype.recorrerPreorden = function (_runner) {

    let runner = _runner ? _runner : this.root;

    console.log(runner.value);

    if (runner.left) {
        this.recorrerPreorden(runner.left);
    }

    if (runner.right) {
        this.recorrerPreorden(runner.right);
    }

}

/**
 * LRV
 */
BST.prototype.recorrerPostorden = function (_runner) {

    let runner = _runner ? _runner : this.root;

    if (runner.left) {
        this.recorrerPostorden(runner.left)
    }

    if (runner.right) {
        this.recorrerPostorden(runner.right);
    }

    console.log(runner.value);

}

/**
 * LVR
 */
BST.prototype.recorrerInorden = function (_runner) {

    let runner = _runner ? _runner : this.root;

    if (runner.left) {
        this.recorrerInorden(runner.left);
        console.log(runner.value);
        if (runner.right) {
            this.recorrerInorden(runner.right);
        }
    } else {
        console.log(runner.value);
        if (runner.right) {
            this.recorrerInorden(runner.right);
        }
    }

}

let first = new BST();

console.log('Insertar');
first.insert(40).insert(20).insert(25).insert(50);
console.log(JSON.stringify(first.root));

console.log('Preorden');
first.recorrerPreorden();

console.log('Postorden(');
first.recorrerPostorden();

console.log('Inorden');
first.recorrerInorden();
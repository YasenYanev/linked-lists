import Node from './node.js';

// Traverse list function mods:
// a1 = 'at';
// a2 = 'pop';
// b1 = 'contains'
// b2 = 'find';

export default class LinkedList {
  constructor() {
    this.listSize = 0;
    this.headNode = null;
    this.tailNode = null;
  }

  #traverseList(
    mode,                     // Mode
    index = this.listSize,    // Starting index
    compareValue = undefined, // Value to compare to(if any)
    nodeObj = this.headNode   // Current node
  ) {
    if ((mode === 'a1' && index === 0) || (mode === 'a2' && index === 2)) {
      return nodeObj;
    }

    if (mode === 'b1' || mode === 'b2') {
      if (nodeObj.value !== compareValue && index <= 0) {
        return null;
      }
      if (nodeObj.value === compareValue) {
        return {
          b1: true,
          b2: this.listSize - index,
        };
      }
    }

    return this.#traverseList(mode, index - 1, compareValue, nodeObj.next);
  }

  append(value) {
    const node = new Node(value);
    if (this.headNode === null) {
      this.headNode = node;
      this.tailNode = node;
    } else {
      this.tailNode.next = node;
      this.tailNode = node;
    }

    this.listSize += 1;
  }

  prepend(value) {
    const node = new Node(value, this.headNode);
    node.next = this.headNode;
    this.headNode = node;

    this.listSize += 1;
  }

  at(index) {
    if (index < 0 || index >= this.listSize) {
      return null;
    }
    return this.#traverseList('a1', index);
  }

  pop() {
    const penultimateNode = this.#traverseList('a2');
    penultimateNode.next = null;
    this.tailNode = penultimateNode;

    this.listSize -= 1;
  }

  contains(value) {
    return this.#traverseList('b1', undefined, value).b1;
  }

  find(value) {
    return this.#traverseList('b2', undefined, value).b2;
  }

  toString() {
    if (this.headNode === null) return 'List is empty';
    let counter = 0;
    let string = `(${this.headNode.value})`;

    while (counter < this.listSize) {
      const currentNode = this.at(counter);
      string += ` -> (${
        currentNode.next !== null ? currentNode.next.value : currentNode.next
      })`;
      counter += 1;
    }

    return string;
  }

  get size() {
    return this.listSize;
  }

  get head() {
    return this.headNode;
  }

  get tail() {
    return this.tailNode;
  }
}

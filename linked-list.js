import Node from './node.js';

function getValue(index, nodeObj) {
  if (index === 0) {
    return nodeObj;
  }
  return getValue(index - 1, nodeObj.next);
}

export default class LinkedList {
  constructor() {
    this.listSize = 0;
    this.headNode = null;
    this.tailNode = null;
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
    return getValue(index, this.headNode);
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

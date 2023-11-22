/* eslint-disable no-else-return */
import Node from './node.js';

function traverseList(index, nodeObj, mode) {
  if (mode === 'getNode' && index === 0) {
    return nodeObj;
  } else if (mode === 'pop' && index === 2) {
    return nodeObj;
  }
  // getIndex
  return traverseList(index - 1, nodeObj.next, mode);
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
    return traverseList(index, this.headNode, 'getNode');
  }

  pop() {
    const penultimateNode = traverseList(this.listSize, this.headNode, 'pop');
    console.log(penultimateNode);
    penultimateNode.next = null;
    this.tailNode = penultimateNode;

    this.listSize -= 1;
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

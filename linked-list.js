/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
import Node from './node.js';

export default class LinkedList {
  constructor() {
    this.listSize = 0;
    this.headNode = null;
    this.tailNode = null;
  }

  append(value) {
    this.listSize += 1;
    const node = new Node(value);
    this.headNode === null ? (this.headNode = node) : (this.tailNode = node);
  }

  prepend(value) {
    this.listSize += 1;
    const node = new Node(value, this.headNode);
    this.headNode = node;
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

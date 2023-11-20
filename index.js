import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('First Node');

list.append('Second Node');

list.append('Third Node');

console.log(list);

list.prepend('Fourth Node');
console.log(list);

console.log(list.at(0));

import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('First Node');
list.append('Second Node');
list.append('Third Node');
list.append('Fourth Node');

console.log(list);

list.pop();

console.log(list);

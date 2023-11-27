import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('First Node');
list.append('Second Node');
list.append('Third Node');
list.append('Fourth Node');
list.append('Fifth Node');

console.log(list.at(4));
console.log(list.find('Fifth Node'));

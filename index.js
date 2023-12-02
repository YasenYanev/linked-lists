import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('First Node');  // Adds a new node with the specified value to the
list.append('Second Node'); // end of the linked list. If the list is empty,
list.prepend('Third Node'); // the node is added to the start
console.log(list);

list.prepend('Fourth Node'); // Adds a new node with the given value to the beginning of the list
console.log(list);

console.log(list.at(1)); // Returns the node at the specified index, or an error message if the index is invalid

list.pop(); // Removes the last element from the list
console.log(list);

console.log(list.contains('First Node')); // Returns true if the specified value is present in the list, otherwise false

console.log(list.find('First Node')); // Returns the index of the node containing the specified value or null if not found

console.log(list.toString()); // Returns a representation of the linked list as a string

console.log(list.size) // Returns the total number of nodes in the list
console.log(list.head) // Returns the first node in the list
console.log(list.tail) // Returns the last node in the list
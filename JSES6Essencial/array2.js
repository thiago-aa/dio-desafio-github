// Criando array
const arr = Array.of(1 , 2, 3);
const arr2 = new Array(1, 2, 3);
const arr3 = [1, 2, 3]; 
const arr4 = Array(3); // Vai criar um array com 3 espaços vazios
const arr5 = Array(1, 2, 3); // Cria array [1, 2, 3] 

const divs = document.querySelectorAll('div');
const arr6 = Array.from(divs); // Cria uma nova instancia de array a partir de um array-like

// As funções push, pop, unshift e shift além de adicionar/remover itens do array, também retornam o length do array.

// Flat: retorna um novo array com todos os elementos de um novo com todos os elementos de um subarray concatenados de forma recursiva de acordo com a profundidade especificada
const arr7 = [1, 2, [3, 4]];
arr7.flat(); // [1, 2, 3, 4]

const arr8 = [1, 2, [3, 4 [5, 6]]];
arr8.flat(2) // [1, 2, 3, 4, 5, 6]

// Keys: retorna um Array Iterator que contem as chaves pra cada elemento desse array 
const arr9 = [1, 2, 3, 4];
const arrIterator = arr.keys();
arrIterator.next(); // {value: 0, done: false}
arrIterator.next(); // {value: 1, done: false}
arrIterator.next(); // {value: 2, done: false}
arrIterator.next(); // {value: 3, done: true}

// values: retorna um Array Iterator que contem os valores pra cada elemento desse array 
const arr10 = [1, 2, 3, 4];
const arrIterator = arr.values();
arrIterator.next(); // {value: 1, done: false}
arrIterator.next(); // {value: 2, done: false}
arrIterator.next(); // {value: 3, done: false}
arrIterator.next(); // {value: 4, done: true}

// entries: retorna o par chave e valor
// Keys: retorna um Array Iterator que contem as chaves pra cada elemento desse array 
const arr10 = [1, 2, 3, 4];
const arrIterator = arr.keys();
arrIterator.next(); // {value: [0, 1], done: false}
arrIterator.next(); // {value: [1, 2], done: false}
arrIterator.next(); // {value: [2, 3], done: false}
arrIterator.next(); // {value: [3, 4], done: true}
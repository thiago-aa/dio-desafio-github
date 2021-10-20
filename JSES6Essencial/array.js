const persons = ['Luiz', 'Andre', 'Luiza', 'Andreia'];

// Verificar o tamanho
console.log(persons.length);

// Verificar se é array
console.log(Array.isArray(persons));

// Iterar com o forEach. Primeiro parametro é o item vigente, o segundo o indice, e o terceiro o array

persons.forEach((person, index, arr) => {
    console.log(`O(a) ${person} é a pessoa número ${index + 1}`)
});

// Filtrar array
const andre = persons.filter(person => person === 'andre');

// Retornar um novo array
const newPersons = persons.map(person => {
    person = person + '2';
    return person;
});

// Reduce
const concatPersons = persons.reduce((allNames, person) => {
    allNames = allNames + person + ', ';
    return allNames;
}, '');
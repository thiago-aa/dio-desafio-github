// Retorna o tamanho de uma String
const textSize = 'texto'.length;
console.log(`Quantidade de letras: ${textSize}`);

// Retorna um array quebrando a string por um delimitador
const splittedText = 'texto'.split('x');
console.log(`\nArray com as posições separadas pelo delimitador: ${splittedText}`);

// Busca por um valor e substitui por outro
const replacedText = 'texto'.replace('text', 'txet');
console.log(`\nSubstituição de valor: ${replacedText}`);

// Retorna a fatia de um valor
const lastChar = 'texto'.slice(-1);
console.log(`\nÚltima letra de uma string: ${lastChar}`);

// Retorana N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'texto'.substr(0,2);
console.log(`As duas primeiras letras são: ${twoCharsBeforeFirstPos}`);
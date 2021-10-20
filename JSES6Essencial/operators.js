//Aritméticos
// Incremento e decremento
const a = ++2; // Recebe logo o 3
const b = 2++; // Recebe 2 e depois incrementa resultando 3

// Negação e adição
+'3'; // Retorna 3
+true; // Retorna 1
+false; // Retorna 0
-true; // Retorna -1

//Atribuição
// Adição
x += y;

// Subtração
x -= y;

// Multiplicação
x += y;

// Divisão
x += y;

// resto
x %= y;

// Lógicos
let a1 = true && 'retorno'; // retorna o 'retorno'
let a2 = false && 'retorno'; // retorna o false

let a3 = true || 'retorno'; // retorna o true
let a4 = false || 'retorno'; // retorna o 'retorno'
let a5 = 'retorno1' || 'retorno2'; // retorna 'retorno1'

//Binarios
// In
something in someItems;
var arvores = ['pau-brasil', 'cedro', 'carvalho', 'loureiro'];
 2 in arvores // true
 5 in arvores // false
 'pau-brasil' in arvores // false
 'pau-brasil' in arvores[0] // true

 let meuCarro = {marca: 'honda', modele: 'Civic'};
marca in meuCarro // true
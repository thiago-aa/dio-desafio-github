'use strict';


//herança
function Animal(qtdePatas) {
  this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
  Animal.call(this, 4);
  this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug); // Cachorro {qtdePatas: 4, morde: false}

Cachorro.prototype.latir = function() {
  console.log('au au');
} // Declara a propriedade no prototype, assim a propriedade não é declarada novamente toda vez que se criar uma nova instância

// Class
class Animal {
  constructor(qtdePatas) {
    this.qtdePatas = 4
  }
}

class Cachorro extends Animal {
  constructor(morde) {
    super(4);
    this.morde = morde;
  }
}
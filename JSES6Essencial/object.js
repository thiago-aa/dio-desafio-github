let user = {
    name: 'Guilherme'
};

// Alterando propriedades
user.name = 'Gustavo';
user['name'] = 'Gian';

//Criando uma propriedade
user.lastName = 'Silva Pereira';

// Deletando uma propriedade
delete user.name;

user = {
    name: 'Guilherme',
    lastName: 'Silva'
};

// Retorna as chaves do objeto
console.log(`Propriedades do objeto user: ${Object.keys(user)}`);

// Retorna os valores do objeto
console.log(`Valores do objeto user: ${Object.values(user)}`);

// Margear propriedades de objetos
Object.assign(user, {fullName: 'Guilherme Silva'});

// Previne alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);
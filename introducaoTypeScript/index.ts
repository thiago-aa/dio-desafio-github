console.log("TypeScript");

function soma(a: number, b: number) {
  return a + b;
}

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal { //Herda de animal
  visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; // Se for 'OU', pode não ter um dado de uma das interfaces, se for & precisa ter o dado das duas interfaces 

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: 'terrestre',
  domestico: false
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: "terrestre",
  visaoNoturna: true,
  domestico: false
}

const animal2: IDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: 'medio',
  tipo: 'terrestre'
}
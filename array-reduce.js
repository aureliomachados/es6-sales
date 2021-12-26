let numeros = [0, 1, 2, 3, 4];

let soma = numeros.reduce((acumulador, atual ) => {return acumulador + atual}, 0);

console.log(soma);

let somaComDez = numeros.reduce((acumulador, atual) => { return acumulador + atual}, 10);

console.log(somaComDez);
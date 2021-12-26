let misture = ingredientes => {
    console.log('Misturando todos os ingredientes');
    return 'Massa pronta';
}

let assar = (massa, temperatura, preAquecer) => {
    console.log('assando massa...');
    return 'Uhummmm bolo de fubá está pronto';

}

let ingredientes = ['ovos', 'leite', 'açucar', 'fubá', 'Óleo', 'farinha', 'fermento'];

let massa = misture(ingredientes);
let bolo = assar(massa, 100, true);

console.log(bolo);
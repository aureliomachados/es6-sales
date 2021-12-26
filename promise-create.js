function timeOutPromise(message, interval){
    return new Promise((resolve, reject) => {
        if(message === '' || typeof message !== 'string'){
            reject('Mensagem vazia ou não é do tipo string');
        }
        else if(interval < 0 || typeof interval !== 'number'){
            reject('Intervalo negativo ou não é do tipo número');
        }
        else{
            setTimeout(() => {
                resolve(message);
            }, interval);
        }
    })
}

//usando a função timeOutPromise que retorna uma promessa
timeOutPromise('Olá', 5000)
.then(message => {
    console.log(message);
})
.catch(e => {
    console.log('Erro: ' + e);
})
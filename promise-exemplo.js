fetch('coffe.jpg')
.then(response => {
    if(!response.ok){
        throw new Error(`Erro HTTP! status: ${response.status}`);
    }else{
        return response.blob();
    }
})
.then(myBlob => {
    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(e => {
    console.log('Houve algum problema com a operação fetch: ' + e.message);
});
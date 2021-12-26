function Person(){
    this.idade = 0;

    setInterval(() => {
        this.idade++;
    }, 1000);
}
let p = new Person();

console.log(p.idade);


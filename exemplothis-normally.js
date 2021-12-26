function Person(){
    this.idade = 0;

    setInterval(function envelhece(){
        this.idade++;
    }, 1000);
}
let p = new Person();

console.log(p.idade);
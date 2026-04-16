class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    action(ataque){

        if(this.tipo == "Guerreiro"){
            this.ataque = "espada";
        } 
        else if(this.tipo == "Mago"){
            this.ataque = "magia";
        } 
        else if(this.tipo == "Monge"){
            this.ataque = "artes marciais";
        } 
        else if(this.tipo == "Ninja"){
            this.ataque = "shuriken";
        }

        console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let herois = [
    new heroi("Carlos", 19, "Guerreiro"),
    new heroi("Rebeca", 19, "Mago"),
    new heroi("João", 21, "Monge"),
    new heroi("Isaac", 18, "Ninja")
];

for(let i = 0; i < herois.length; i++) {
    herois[i].action();
    console.log(`o ${herois[i].tipo} atacou usando ${herois[i].ataque}`);
}
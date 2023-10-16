let amigo = {
    nome: 'José', 
    sexo: 'M', 
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }}


amigo.engordar(2)    
console.log(`${amigo.nome} pesa ${amigo.peso}`) 

/*
let carro = {
    cor: 'preto',
    velocidade: 60,
    acelerar(a=0) {
        console.log('Acelerou!')
        this.velocidade += a
    },
    desacelerar(d=0) {
        console.log('Desacelerou!')
        this.velocidade -= d
    }
}


console.log(`O carro ${carro.cor} está a ${carro.velocidade}Km/h`) 

carro.acelerar(10)
console.log(`O carro ${carro.cor} está, agora, a ${carro.velocidade}Km/h`) 

carro.desacelerar(20)
console.log(`O carro ${carro.cor} está, agora, a ${carro.velocidade}Km/h`) 
*/
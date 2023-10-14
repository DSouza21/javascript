var valores = [] // Array que vai receber os valores
function adicionar() {
    var num = document.getElementById('inum')
    var n = Number(num.value)
    var res = document.getElementById('res')
    if ((num.value.length == 0) || (n < 1 || n > 100)) { // Verificar se a caixa está vazia ou se o número está entre 1 e 100 
        window.alert('Valor inválido ou já encontrado na lista.')
    } else 
        if (valores.indexOf(n) == -1) { // Verificar se o número informado já foi adicionado anteriormente 
            res.innerHTML = ''
            valores.push(n) // adicionar números dentro do array
            var sel = document.getElementById('add')
            var opcoes = document.createElement('option')
            opcoes.text = `Valor ${n} adicionado.` // Mostrar os números dentro do select
            sel.appendChild(opcoes) 
        } else {
            window.alert('Valor inválido ou já encontrado na lista.')
        }
} 

function finalizar() {
    if (valores.length == 0) { // Verificar se existe número adicionado
        window.alert('Adicione valores antes de finalizar!')
    } else { // Aqui vai o resultado dos números cadastrados
        var res = document.getElementById('res')
        res.innerHTML = ''
        // Parágrafos para exibir o resultado dos números adicionados
        var cad = document.createElement('p')
        var maior = document.createElement('p')
        var menor = document.createElement('p')
        var somar = document.createElement('p')
        var media = document.createElement('p')
        cad.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.`
        res.appendChild(cad) // Mostrar quantos números foram cadastrados
        var vMaior = 0
        for (let pos in valores) { // Pecorrer array e pegar o maior número
            if (valores[pos] > vMaior) {
                vMaior = valores[pos]
            }
        }
        maior.innerHTML = `O maior valor informado foi ${vMaior}.`
        res.appendChild(maior) // Mostrar maior número adicionado
        var vMenor = 100
        for (let pos in valores) { // Pecorrer array e pegar o menor número
            if (valores[pos] < vMenor) {
                vMenor = valores[pos]
            }
        }
        menor.innerHTML = `O menor valor informado foi ${vMenor}.`
        res.appendChild(menor) // Mostrar menor número adicinado
        var soma = 0
        for (var pos in valores) { // Percorrer dentro do array e somar todos os valores
            soma += valores[pos]
        }
        somar.innerHTML = `Somando todos os valores, temos ${soma}.`
        res.appendChild(somar) // Mostrar resultado da soma
        media.innerHTML = `A média dos valores digitados é ${soma / valores.length}.`
        res.appendChild(media) // Mostrar resultado da divisão
    }
}
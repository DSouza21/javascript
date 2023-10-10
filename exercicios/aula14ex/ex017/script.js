function contar() {
    var inicio = document.getElementById('iinicio').value
    var i = Number(inicio)
    var fim = document.getElementById('ifim').value
    var f = Number(fim)
    var passo = document.getElementById('ipasso').value
    var p = Number(passo)
    var res = document.getElementById('res')   

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        if (p == 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
            res.innerHTML = ''
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449;`
            }
            res.innerHTML += `&#x1F3C1;`
        } else {
            res.innerHTML = ''
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449; `
            }
            res.innerHTML += `&#x1F3C1;`
        }
    }
} 
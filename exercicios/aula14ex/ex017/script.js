function contar() {
    var inicio = document.getElementById('iinicio').value
    var fim = document.getElementById('ifim').value
    var passo = document.getElementById('ipasso').value
    var res = document.getElementById('res')   
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1 
        }
        if (i > f) {
            // Contagem regressiva
            res.innerHTML = ''
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449;`
            }
        } else if (i < f) {
            // Contagem crescente
            res.innerHTML = ''
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449;`
            }
        } else { 
            res.innerHTML = ''
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449;`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
} 
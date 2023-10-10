function gerar() {
    var num = document.getElementById('inum').value 
    var n = Number(num)
    var lista = document.getElementById('itabu')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        lista.innerHTML = ``
        var c = 1
        var res
        while (c <= 10) {
            res = n * c
            lista.innerHTML += `<option> ${n} x ${c} = ${res} </option>`
            c++
        }
    }
} 
function tabuada() {
    var num = document.getElementById('inum').value 
    var lista = document.getElementById('itabu')
    if (num.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var n = Number(num)
        lista.innerHTML = ''
        var c = 1
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            lista.appendChild(item)
            c++
        }
    }
} 
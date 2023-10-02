function carregar() {
    var mensagem = window.document.getElementById('msg')
    var imagem = window.document.getElementById('img')
    var agora = new Date()
    var hora = agora.getHours()
    mensagem.innerHTML = `Agora são ${hora} horas`
    if (hora < 12) {
        // BOM DIA!
       imagem.src = 'imagens/manha.png' 
       window.document.body.style.backgroundColor = '#d2ae60'
    } else if (hora <= 18) {
        // BOA TARDE!
        imagem.src ='imagens/tarde.png'
        window.document.body.style.backgroundColor = '#f8af6a'
    } else {
        // BOA NOITE!
        imagem.src ='imagens/noite.png'
        window.document.body.style.backgroundColor = '#4a394a'
    }
} 
var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()

window.document.getElementsByTagName('div')[0].innerHTML = `Agora são ${hora}h${min}min`
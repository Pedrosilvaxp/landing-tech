// Scroll servicos
const servArea = document.querySelector('.servicos')
const serv = document.querySelector('.linkserv')
serv.addEventListener('click', function() {
    event.preventDefault()
    servArea.scrollIntoView({ behavior:'smooth' })
})
// Scroll sobre 
const sobArea = document.querySelector('.sobre')
const sobre = document.querySelector('.linksob')
sobre.addEventListener('click', function() {
    event.preventDefault()
    sobArea.scrollIntoView({ behavior:'smooth' })
})
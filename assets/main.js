const form = document.getElementById('myForm')
const inputs = document.getElementsByClassName('inputs')
const spans = document.getElementsByTagName('span')
const required = []
form.addEventListener('submit', (event) => {
    event.preventDefault()
})
verificarNome = () => {
    let nome = document.getElementById('name')
    if (nome.value.length == 0){
        inputs[0].style.borderColor = 'red'
        spans[0].innerHTML = 'Campo obrigatório'
        required[0] = false
    }
    else{
        inputs[0].style.border = 'none'
        spans[0].innerHTML = ''
        required[0] = true
    }  
}
verificarEmail = () => {
    let email = document.getElementById('email')
    if (email.value.length == 0){
        inputs[1].style.borderColor = 'red'        
        spans[1].innerHTML ='Campo obrigatório'
        required[1] = false
    }
    else{
        inputs[1].style.border = 'none'
        spans[1].innerHTML = ''
        required[1] = true
    }
}
validate = () => {
    if (required[0] == true && required[1] == true){
        let sendForm = document.getElementById('sendForm')
        sendForm.addEventListener('click', () => {submit()})
    }
    else{
        verificarNome()
        verificarEmail()
    }
}
function submit(){
    spans[2].style.color = 'green'
    spans[2].style.marginLeft ='105px'
    spans[2].innerHTML = 'Cadastro efetuado com sucesso.'
    setTimeout (() => {form.submit()}, 2000)
}
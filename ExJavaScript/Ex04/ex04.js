function verificar() {
    idade = document.getElementById('idade')
    res = document.getElementById('res')

    if (idade.value >= 18) {
        res.innerHTML = 'Você é maior de idade'
    } else {
        res.innerHTML = 'Você é menor de idade'
    }
}
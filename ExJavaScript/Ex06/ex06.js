function calcular(){
    let p = document.getElementById('p1').value
    let alt = document.getElementById('alt1').value
    let res = document.getElementById('res')
    let tipo = ''

    let imc = (parseFloat(p) / (parseFloat(alt) * parseFloat(alt)))

    if(imc < 18,50) {
        tipo = 'Magreza'
    } else if(imc >= 18,50 && imc <= 24,90){
        tipo = 'Saudável'
    } else if(imc >= 25,00 && imc <= 29,90){
        tipo = 'Sobrepeso'
    } else if(imc >= 30 && imc <= 34,90) {
        tipo = 'Obesidade Grau 1'
    } else if(imc >= 35 && imc <= 39,90){
        tipo = 'Obesidade Severa Grau 2'
    } else {
        tipo = 'Obesidade Mórbida Grau 3'
    }
    res.innerHTML = 'Seu imc é ' + imc +
    ' Sua classificação é ' + tipo
}
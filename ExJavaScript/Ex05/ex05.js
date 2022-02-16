function calcular (){
    let nota1 = document.getElementById("n1").value
    let nota2 = document.getElementById("n2").value
    let nota3 = document.getElementById("n3").value
    let res = document.getElementById('res')

    res.innerHTML = 'A média aritmética é igual a ' + ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3)


}
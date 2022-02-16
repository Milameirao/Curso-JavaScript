function verificar() {
  var num1 = document.getElementById('n1')
  var num2 = document.getElementById('n2')
  var num3 = document.getElementById('n3')
  var res = document.getElementById('res')

    if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0) {
        //window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }else if (num1.value > num2.value && num1.value > num3.value) {
        res.innerHTML = 'O número ' + num1.value + ' é o maior número!'

    }else if (num2.value > num1.value && num2.value > num3.value){
        res.innerHTML = 'O número ' + num2.value + ' é o maior número!'

    }else if (num3.value > num2.value && num3.value > num1.value){
    res.innerHTML = 'O número ' + num3.value + ' é o maior número!'
    }
}
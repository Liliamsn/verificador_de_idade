function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txt1')
    var res = window.document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else{
        var fsex = window.document.getElementsByName('radsex')
        var img = window.document.getElementById('imagem')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked){
            
            if (idade >= 0 && idade <=10){
                img.src = `boy-child.jpg`
            } else if (idade < 21){
                img.src = `boy.jpg`
            } else if (idade < 51){
                img.src = `homem.jpg`
            } else {
                img.src = `man_.jpg`
            }
        } else if (fsex[1].checked){

            if (idade >= 0 && idade <= 10){
                img.src = `girl-child.jpg`
            } else if (idade < 21){
                img.src = `girl.jpg`
            } else if (idade < 51){
                img.src = `mulher.jpg`
            } else {
                img.src = `woman_.jpg`
            }
        }
        
    }   
}

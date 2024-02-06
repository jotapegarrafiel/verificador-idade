function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if(fAno.value.length == 0 || Number(fAno.value) > ano){
        window.alert(`[ERRO]Dados inseridos de forma errada, tente novamente!`)
    }
    let fSex = document.getElementsByName('radsex')
    let idade = ano - Number(fAno.value)
    let genero = ''
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fSex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'homem_crianca.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'homem_jovem.png')
        } else if (idade < 52){
            //Adulto
            img.setAttribute('src', 'homem_adulto.png')
        } else {
            //Idoso
            img.setAttribute('src', 'homem_idoso.png')
        }
    } else if (fSex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //Criança
            img.setAttribute('src', 'mulher_crianca.png')
        } else if (idade < 21){
            //Jovem
            img.setAttribute('src', 'mulher_jovem.png')
        } else if (idade < 52){
            //Adulto
            img.setAttribute('src', 'mulher_adulta.png')
        } else {
            //Idoso
            img.setAttribute('src', 'mulher_idosa.png')
        }
    }
    res.style.textAlign = 'Center'
    res.innerHTML = `Detectamos que você é ${genero} com ${idade} anos`
    res.appendChild(img)
}

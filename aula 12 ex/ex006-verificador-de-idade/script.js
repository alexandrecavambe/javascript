let verify = document.querySelector('#verify')
verify.addEventListener("click", verificar)
let data = new Date()
let anoatual = data.getFullYear()
let textano = document.querySelector('#text')
let idade
let result = document.querySelector('#res')
let fsex = document.getElementsByName('radsex')
let img = document.createElement('img')
img.setAttribute('id', 'img')

function verificar(){
    if(textano.value.length === 0 || textano.value > anoatual){
        result.innerHTML = '[ERRO]: Por favor, verifique os dados.'
    }else{
        idade = anoatual - Number(textano.value)

        let genero

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 15){
                //criança
                img.setAttribute('src', 'imagens/bebe-m.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso-m.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'

            if(idade >= 0 && idade < 14){
                //criança
                img.setAttribute('src', 'imagens/bebe-f.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso-f.jpg')
            }
        }

        result.innerHTML = `Detectamos: ${genero} com ${idade} anos. <br>`
        result.appendChild(img)
    }
}

window.addEventListener("load", carregar)
let corpo = document.body
 
 let imagem = document.querySelector('#img')
 let msg = document.querySelector('#text')

 function carregar(){
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        imagem.src = 'imagem/manhã.jpg'
        corpo.style.backgroundColor = '#ebdca5'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        imagem.src = 'imagem/tarde.jpg'
        corpo.style.backgroundColor = '#817142'
    }else{
        //Boa noite!
        imagem.src = 'imagem/noite.jpg'
        corpo.style.backgroundColor = '#0B1C2D'
    }
}

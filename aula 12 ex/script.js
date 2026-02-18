
window.addEventListener("load", carregar)
let corpo = document.body
 
 let imagem = document.querySelector('#img')
 let msg = document.querySelector('#text')

 function carregar(){
    let data = new Date()
    let hora = data.getHours()
    hora = 18
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        imagem.src = 'manhã.jpg'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        imagem.src = 'tarde.jpg'
    }else{
        //Boa noite!
        imagem.src = 'noite.jpg'
    }
}

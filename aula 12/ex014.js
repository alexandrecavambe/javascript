//Pegando a hora do sistema:
agora = new Date()
let hora = agora.getHours()
console.log(`Agora é exatamente ${hora} horas`)
if(hora < 12 || hora === 24){
    console.log("Bom dia")
}else if(hora < 18){
    console.log("Boa tarde!")
}else if(hora < 24){
    console.log("Boa Noite")
}else{
    console.log(`Não existe ${hora} horas!`)
}
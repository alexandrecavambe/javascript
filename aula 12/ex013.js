let idade = 17
    console.log(`Você tem ${idade} anos.`)

/* 
if(idade < 16){
    console.log("Não vota")
}else{
    if(idade < 18){
        console.log("Voto opcional")
    }else{
        if(idade < 67){
            console.log("Voto obrigatório")
        } else{
            console.log("Voto opcional")
        }
    }
}*/

//Outra forma de usar estrutura condicional aninhada

if(idade < 16){
    console.log("Não vota")
}else if(idade < 18 || idade >= 67){
    console.log("voto opcional")
}else{
    console.log("voto obrigatório")
}
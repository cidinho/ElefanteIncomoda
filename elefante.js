/**
 * Código para repodução da Música: Um Elefante incomoda muita gente
 */

 /**
  * Retorna a frase correspondente ao número de elefantes informado
  * 
  * @param numElefantes 
  */
function gerarVerso(numElefantes) {
    let texto = ''
    const acao = (numElefantes > 1) ? 'incomodam' : 'incomoda'
    let acaoIncremento = acao
    const animal = (numElefantes > 1) ? 'Elefantes' : 'Elefante'

    if (numElefantes % 2 == 0) {
        texto = numElefantes + ' ' + animal + ' '
        for (var i = 2; i <= numElefantes; i++) {
            acaoIncremento = acao + ', ' + acaoIncremento
        }
        texto += acaoIncremento  + ' muito mais!'

    } else {
        texto = numElefantes + ' ' + animal + ' ' + acao + ' muita gente...'
    }

    return texto
}

function escreverVersos(numTotalElefantes){
    for(var i=1;i<=numTotalElefantes;i++){
        //Acrescenta um parágrafo com o verso correspondente
        //ao número de elefantes
        let texto = '<p>'+gerarVerso(i)+'</p>'
        $('#musica').append(texto)
    }
    //Imprimindo na ordem inversa
    for(var i=numTotalElefantes;i>=1;i--){
        //Acrescenta um parágrafo com o verso correspondente
        //ao número de elefantes
        let texto = '<p>'+gerarVerso(i)+'</p>'
        $('#musica').append(texto)
    }
}
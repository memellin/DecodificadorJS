const palavras = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}
const alphabet = ['a', 'e', 'i', 'o', 'u'];

function codificar(){
    let word = document.getElementById("texto__original").value; // Pega o texto digitado pelo usuário
    word = word.toLowerCase(); // Transforma todas as letras em minúsculas
    let word2 = ""; // Variável que irá armazenar o texto criptografado
    for(let i = 0; i < word.length; i++) {
        word[i] === alphabet[0] ? word2 += palavras.a : word[i]; // Se a letra atual for igual a letra a, substitui pela palavra criptografada
        word[i] === alphabet[1] ? word2 += palavras.e : word[i];
        word[i] === alphabet[2] ? word2 += palavras.i : word[i];
        word[i] === alphabet[3] ? word2 += palavras.o : word[i];
        word[i] === alphabet[4] ? word2 += palavras.u : word[i];
    };
    document.getElementById("texto__criptografado").value = word2; // Adiciona o texto criptografado no campo de texto
    console.log(word2);
}

function decodificar(){
    let word = document.getElementById("texto__criptografado").value;
    word = word.toLowerCase();
    let word2 = "";
    for(let i = 0; i < word.length; i++) {
        let letraDecodificada = null;
        // Verifica se a letra atual corresponde a alguma palavra criptografada
        for (let letra in palavras) {
            if (palavras[letra] === word.substring(i, i + palavras[letra].length)) {
                letraDecodificada = letra;
                break;
            }
        }
        // Se a letra foi decodificada, adiciona ao resultado, senão, mantém a letra original
        if (letraDecodificada !== null) {
            word2 += letraDecodificada;
            i += palavras[letraDecodificada].length - 1; // Pula a quantidade de caracteres da palavra criptografada
        } else {
            word2 += word[i];
        }
    }
    document.getElementById("texto__criptografado").value = word2;
    console.log(word2);
}

function copiar(){
   // Seleciona o elemento de texto criptografado
   let textoCriptografado = document.getElementById("texto__criptografado").value;
  
   // Copia o texto para a área de transferência
   navigator.clipboard.writeText(textoCriptografado)
   .then(() => {
       // Mostra uma mensagem de confirmação para o usuário
       alert("Texto copiado para a área de transferência!");
   })
   .catch(err => {
       // Em caso de erro, exibe uma mensagem de erro
       console.error('Falha ao copiar texto: ', err);
   });
}

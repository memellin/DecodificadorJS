function codificar(){
    let word = document.getElementById("texto__original").value;
    let word2 = "";
    for(let i = 0; i < word.length; i++) {
        word[i] === 'a' ? word2 += 'ai' : word[i];
        word[i] === 'e' ? word2 += 'enter' : word[i];
        word[i] === 'i' ? word2 += 'ines' : word[i];
        word[i] === 'o' ? word2 += 'ober' : word[i];
        word[i] === 'u' ? word2 += 'ufat' : word[i];
    };
    document.getElementById("texto__criptografado").value = word2;
    console.log(word2);
}

function decodificar(){
    
}

function copiar(){

}

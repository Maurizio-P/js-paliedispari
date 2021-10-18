const wordUser = prompt("inserisci una parola")
const reverseword = pali()

function pali(){
    let stringadivisa = wordUser.split("")
    let stringareverse = stringadivisa.reverse()
    let stringainvertita = stringareverse.join("")

    return stringainvertita
}

if(wordUser === reverseword){
    alert("la tua parola è palindroma!")
    console.log("la tua parola è palindroma!")
}else{
    alert("la parola immessa non è palindroma")
    console.log("la parola immessa non è palindroma")
}
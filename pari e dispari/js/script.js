/* COSA FARE:

1 - Devo scegliere se pari o dispari (2 button?)
2 - Inserisco un numero compreso tra 1 e 5
3 - Genero un numero compreso tra 1 e 5 da assegnare al pc
4 - Sommo il mio numero con quello del pc, per verificare se pari o dispari
5 - In base alla mia scelta iniziale, dichiaro chi ha vinto

*/

console.log("start")

const btnPari = document.querySelector(".btn-pari")
const btnDispari = document.querySelector(".btn-dispari")

btnPari.addEventListener("click", function(){
    let numberUser =  parseInt(prompt("Scegli un numero tra 1 e 5"))
    let numberPC = createNumber()
    console.log("numero PC", numberPC)
    if (numberUser >= 1 && numberUser < 6){
        console.log("numero dopo check", numberUser)
        const somma = sommaNumeri(numberUser, numberPC)
        console.log("somma: ", somma)
        
        function numeroPari(){
            return somma % 2 === 0 
        }

        if (numeroPari()){
            console.log(`Hai vinto, il numero ${somma} è pari`)
            alert(`Hai vinto, il numero ${somma} è pari`)
        }else{
            console.log(`Hai perso, il numero ${somma} è dispari`)
            alert(`Hai perso, il numero ${somma} è dispari`)
        }
    } else {
        alert("inserisci un numero valido")
    }
    
})

btnDispari.addEventListener("click", function(){
    let numberUser =  parseInt(prompt("Scegli un numero tra 1 e 5"))
    let numberPC = createNumber()
    console.log("numero PC", numberPC)
    if (numberUser >= 1 && numberUser < 6){
        console.log("numero dopo check", numberUser)
        const somma = sommaNumeri(numberUser, numberPC)
        console.log("somma: ", somma)

        function numeroPari(){
            return somma % 2 === 0 
        }

        if (numeroPari()){
            console.log(`Hai perso, il numero ${somma} è pari`)
            alert(`Hai perso, il numero ${somma} è pari`)
        }else{
            console.log(`Hai vinto, il numero ${somma} è dispari`)
            alert(`Hai vinto, il numero ${somma} è dispari`)
        }
    } else {
        alert("inserisci un numero valido")
    }
})

function createNumber(){
    return Math.ceil(Math.random()* 5)
}

function sommaNumeri(num1, num2){
    return num1 + num2
}
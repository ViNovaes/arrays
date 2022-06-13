// MÉTODOS DE ARRAY

//OBJETO
// let pessoa = {
    // nome:'John Snow',
    // idade:57,
    // altura: 1.91,
    // casado: true
// }

//ARRAY
//let alunos = ["Caio","Amanda","Victória","Hugo","Diego","Herick","Erik"]
//let supermercado = ["Feijão","Arroz","Macarrão","Banana","Uva"]
//TODO ARRAY COMEÇA COM ÍNDICE 0
//para saber o tamanho de um array
//console.log(`Tamanho do array: ${supermercado.length}`)
//console.log(supermercado[2])
//console.log(alunos[0])

/* for each
let redesSociais = ["Youtube","Instagram","Twitter","Facebook"]
redesSociais.forEach((redesSociais) =>{
    console.log(redesSociais)
})
*/



//push acrescenta
//series.push("The Walking Dead")

//pop remove
//series.pop()

//remover o primeiro elemento de um array
// series.shift()

//remove um elemento e a quantidade desse elemento
//ex>.: quero remover LOST e apenas UM elemento
//series.splice(0,1)

//UNSHIFT - adiciona um ou mais elemento no inicio de um array
//series.unshift("La Casa de Papel")

//let series = ["Lost","Breaking Bad","Peaky Blinders","Breaking Bad"]

//let acrescentaVirgula = series.join(',')
//let notasImdb = series.join('9.5')

//let exemplo = "Aprendendo JS"

//let posicao = exemplo.indexOf("JS")

//console.log(posicao)

/*
let num = [7,13,17,22,12,21,50]

let resultado = num.map(function(valor){
    return valor * 2
})

console.log(resultado)

*/

/* MÉTODO FILTER

let lista = [8,14,18,25,22]
let lista2 = []

lista2 = lista.filter(function(item){
    if(item < 15){
        return true
    } else{
        return false
    }
})

console.log(lista2)
*/


const videoGames = [
    {nome: "Ps5", preco: 4500, fabricante: "Sony"},
    {nome: "Xbox Series", preco:2500, fabricante: "Microsoft" },
    {nome: "Xbox Series X", preco:4500, fabricante: "Microsoft"},
    {nome:"Nintendo Switch", preco: 2500, fabricante:"Nintendo"}
]

console.log(videoGames.filter(function(p){
    if(p.preco >= 1500 && p.fabricante == "Microsoft"){
        return p
    }
}))
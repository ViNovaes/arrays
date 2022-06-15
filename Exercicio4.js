
let lista = [45,4,9,16,25]
let lista2 = []

lista2 = lista.find(function (item){
    if(item < 16 ){
        return true
    }
})
-
console.log(lista2)
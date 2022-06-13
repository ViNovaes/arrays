

const alunos = [
    {nome: "Ana Paula", idade: 15, sexo: "Feminino"},
    {nome: "Carlos", idade: 17, sexo: "Masculino"},
    {nome: "Cristiano", idade: 14, sexo: "Masculino"},
    {nome: "Aline", idade: 13, sexo: "feminino"},
    {nome: "Pedro", idade: 15, sexo: "masculino"},
    {nome: "sofia", idade: 12, sexo: "feminino"},
    {nome: "paloma", idade: 16, sexo: "feminino"}
]
console.table(alunos.filter(function(menor){
    if (menor.idade >= 15 && menor.idade <=17)
        return menor
}
))
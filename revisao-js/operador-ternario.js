let nota = 7.2
let situacao

/*
if(nota >= 6){
    situacao = 'Aprovado'
}
else{
    situacao = 'Reprovado'
}
*/

/*
if(nota >= 6) situacao = 'Aprovado'
else situacao = 'Reprovado'
*/

nota = 5.3
//As três partes do operador ternário
//1º parte: condição (que iria depois do IF)
//Entre a 1° e a 2º parte -> ?
//2º parte: o resultado, caso a condição seja VERDADEIRA
//Entre a 2º e a 3º parte -> :
//3º parte: o resultado, caso a condição seja falsa
situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'


console.log(situacao)

let user = 'zemane'
let userType

userType = user === 'admin' || user === 'root' ? 'SuperUser' : 'OrdinaryUser'

console.log(userType)
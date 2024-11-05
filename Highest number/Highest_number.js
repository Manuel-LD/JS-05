/*Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, determine and output the highest of those numbers.*/

const numeros = []
alert("A continuación escribirá 10 numeros")
for (let i = 0; i < 10; i++) { 
    let dato = prompt("Escriba un numero:");
    numeros.push(dato)
}

console.log(Math.max(...numeros));
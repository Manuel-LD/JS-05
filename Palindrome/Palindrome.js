/*Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.*/

let texto = prompt("Introduce una palabra o frase para verificar si es un palíndromo:");

let textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
let textoInvertido = textoLimpio.split('').reverse().join('');

if (textoLimpio === textoInvertido) {
    alert("Es un palíndromo");
} else {
    alert("No es un palíndromo");
}

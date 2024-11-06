/*Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.*/

let n = parseInt(prompt("Ingresa un numero entero n:"));

function recursiveSum(num) {
    if (num === 1) {
        return 1;
    }
    return num + recursiveSum(num - 1);
}

alert(`La suma de los numeros del 1 al ${n} es igual a: ${recursiveSum(n)}`);
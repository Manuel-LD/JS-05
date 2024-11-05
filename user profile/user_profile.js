/*Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/

const username = prompt("Escriba su nombre: ");
const age = prompt("Escriba su edad: ");
const movies = []


for (let i = 0; i < 3; i++) { 
    let dato = prompt("Escriba una pelicula que le guste:");
    movies.push(dato)
}

console.log(`Mi nombre es ${username} tengo ${age} años y las peliculas ${movies[0]}, ${movies[1]}, ${movies[2]} son de mis favoritas`);

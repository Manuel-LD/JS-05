/*Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".*/

const alarma = prompt("Ingrese en cuantos segundos aparezca la alarma: ")
const time = alarma*1000;


setTimeout(() => {
    alert(`Time for bed after ${alarma} seconds`);
  }, time);
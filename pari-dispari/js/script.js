const UserEvenOdd = prompt('pari o dispari)')
const UserNumber = prompt('Inserisci un numero da 1 a 5')

let randomIndex;

for (let i = 0; i < 5; i++) {

    randomIndex = randomNumber(1, 5);
}

const somma = UserNumber + randomIndex

if (isEven(somma)) {
    alert
}







function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else {
    return false
    }
}
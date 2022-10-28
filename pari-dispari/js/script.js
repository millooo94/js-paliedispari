const UserEvenOdd = prompt('pari o dispari');
const UserNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

const randomPCNumber = randomNumber(1, 5);

console.log('numero random', randomPCNumber);

const numberSum = UserNumber + randomPCNumber;

console.log('somma', numberSum);

if ((isEven(numberSum) && UserEvenOdd == 'pari') || (!isEven(numberSum) && UserEvenOdd == 'dispari')) {
    alert('hai vinto!')
    
} else {
    alert ('hai perso!')
};



function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
};

function isEven(number) {
    if (number % 2 == 0) {
        return true
    } else {
    return false
    }
};
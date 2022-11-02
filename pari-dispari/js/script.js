let UserEvenOdd
let UserNumber
let myTimeout
const elePcMessage = document.querySelector('.pc-message')
const eleUserMessage = document.querySelector('.user-message')
const eleSumMessage = document.querySelector('.sum-message')
const eleEvenOddMessage = document.querySelector('.even-odd-message')
const eleButtonS = document.querySelector('.btn-1');
const eleButtonE = document.querySelector('.btn')
const eleMessage1 = document.querySelector('.message1')
const eleText = document.querySelector('.text')
const eleNumber = document.querySelector('.number')
const eleForm = document.querySelector('form');

eleForm.addEventListener('submit', function (event) {

    event.preventDefault();

    if (eleMessage1.innerHTML == 'Pari o Dispari?') {
        if (eleText.value != 'pari' && eleText.value != 'dispari') {
            eleText.classList.add('error');
            myTimeout = setTimeout(timeout, 500);
            eleText.value = ''
        } else {
            UserEvenOdd = eleText.value
            eleText.classList.add('hidden')
            eleNumber.classList.remove('hidden')
            eleNumber.value = ''
            eleMessage1.innerHTML = 'Inserisci un numero da 1 a 5' 
        }

    } else {

        if (eleNumber.value < 1 || eleNumber.value > 5) {
            eleNumber.classList.add('error');
            myTimeout = setTimeout(timeout, 500);
            eleNumber.value = ''

        } else {

            UserNumber = parseInt(eleNumber.value) 
            eleUserMessage.innerHTML = UserNumber
            const randomPCNumber = randomNumber(1, 5);
            elePcMessage.innerHTML = randomPCNumber;
            console.log('numero random', randomPCNumber);
    
            const numberSum = UserNumber + randomPCNumber;
            eleSumMessage.innerHTML = numberSum;
            console.log('somma', numberSum);
    
            if ((isEven(numberSum) && UserEvenOdd == 'pari') || (!isEven(numberSum) && UserEvenOdd == 'dispari')) {
                eleEvenOddMessage.innerHTML = 'hai vinto!'
                eleEvenOddMessage.classList.remove('hidden')
                eleEvenOddMessage.classList.remove('negative')
                eleEvenOddMessage.classList.add('positive')
                
            } else {
                eleEvenOddMessage.innerHTML = 'hai perso!'
                eleEvenOddMessage.classList.remove('hidden')
                eleEvenOddMessage.classList.remove('positive')
                eleEvenOddMessage.classList.add('negative')
            };
            

            eleForm.classList.add('hidden')
            eleButtonS.classList.remove('hidden')
        }
        }
}) 

eleButtonS.addEventListener('click', function () {

    eleForm.classList.remove('hidden')
    eleMessage1.innerHTML = 'Pari o Dispari?'
    eleButtonS.classList.add('hidden')
    eleUserMessage.innerHTML = ''
    elePcMessage.innerHTML = ''
    eleSumMessage.innerHTML = ''
    eleEvenOddMessage.classList.add('hidden')
    eleNumber.classList.add('hidden')
    eleText.classList.remove('hidden')
    eleText.value = ''
})




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


function timeout() {

    eleText.classList.remove('error');
}




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


function timeout() {

    eleText.classList.remove('error');
}
const userWord = prompt('Dammi una parola');


if (isPalindrome(userWord)) {
    alert('palindrome');
} else {
    alert('not palindrome');
    
}


function isPalindrome(word) {

    if (Array.from(word).toString() == (Array.from(word).reverse()).toString()) {
        return true 
    } else {
        return false
    }
};
//Coding Challenge #1 --> get vowels from string
function getVowels(str) {
    var vowelsCount = 0;
    var string = str.toString().toLowerCase();
    for (var i = 0; i <= string.length - 1; i++) {
        if (string.charAt(i) == string.charAt(i).match(/[aeiou]/g)) {
            vowelsCount += 1;
        }
    }
    console.log(vowelsCount);
    return vowelsCount;
}
//getVowels("This is a random sentence asdfasdf.");


//Coding Challenge #2 --> is this a palindrome
function palindrome(word) {
    var low = word.toLowerCase().replace(/\s+/g, "");
    var rev = low.split("").reverse("").join("").replace(/\s+/g, "");

    if (low === "" || word.length < 3) {
        console.log("Nope.");
        return "Hmm...something is off.";
    } else if (low === rev) {
        console.log("Yep.");
        return "Ahh Yeah!";
    } else {
        console.log("Nope.");
        return "Sorry, not a palindrome";
    }
}
//palindrome("Racecar");


//Coding Challenge #3 --> combine and alternate two arrays
function alternate(arrayLetters, arrayNumbers) {
    var final = [];
    var lettersLength = arrayLetters.length;
    var numbersLength = arrayNumbers.length;
    var loop;

    if (lettersLength > numbersLength) {
        loop = arrayLetters;
    } else {
        loop = arrayNumbers;
    }

    for (var j = 0; j <= loop.length - 1; j++) {
        if (lettersLength > 0) {
            final.push(arrayLetters[j]);
        } else {
            break;
        }
        if (numbersLength > 0) {
            final.push(arrayNumbers[j]);
        } else {
            break;
        }
        lettersLength--;
        numbersLength--;
    }
    console.log(final);
}
alternate(["a", "b", "c", "d", "e", "f", "g", "h"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);



//Coding Challenge #4 --> return min, max, average, length of a set of numbers
function math_wiz(numberArray) {

    
}
math_wiz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

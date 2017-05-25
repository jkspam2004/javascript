function palindrome(str) {
    var newstr = str.replace(/[_*#,:\/\-\\.\(\) ]/g, '');
    console.log(str);
   
    var chars = newstr.toLowerCase().split("");
    var lo = 0;
    var hi = newstr.length - 1;
    while (lo < hi) {
       if (chars[lo] != chars[hi]) {
           return false;
       } else {
           lo++;
           hi--;
       }
    }
    return true;
}

console.log(palindrome("_eye")); // true
console.log(palindrome("race car")); // true
console.log(palindrome("A man, a plan, a canal. Panama")); // true
console.log(palindrome("never odd or even")); // true
console.log(palindrome("nope")); // false
console.log(palindrome("almostomla")); // flase
console.log(palindrome("My age is 0, 0 si ega ym.")); // true
console.log(palindrome("1 eye for of 1 eye.")); // false
console.log(palindrome("0_0 (: /-\ :) 0-0")); // false
console.log(palindrome("five|\_/|four")); // false

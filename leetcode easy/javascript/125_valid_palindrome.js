/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and 
removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.


Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome. */

/* Initial Solution (11 ms)*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // convert string to lowercase
    // remove all non-alphanumeric characters (keep only a-z, A-Z, 0-9)
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

    let left = 0;
    let right = s.length - 1;

    // Compare characters from both ends
    while (left < right) {
        // // If characters don't match, not a palindrome
        if (s[left] !== s[right]) {
            return false;
        }
        
        left++;
        right--;
    }
    return true;
};

/* Solution #2: Convert str to array, split/reverse/join array, compare str (w/o non-alpha chars) to reversed str */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  // convert string to lowercase and remove all non-alpha chars
    let newStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    // convert str to array, reverse array & join together to create reversed str
    let reversedStr = newStr.split("").reverse().join("");

    if (newStr === reversedStr) {
        return true;
    }

    return false;
};

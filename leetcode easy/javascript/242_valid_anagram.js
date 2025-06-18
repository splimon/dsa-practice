/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    countS = {};
    countT = {};

    // if lengths are different, can't be anagrams
    if (s.length !== t.length) {
        return false;
    }

    // count letters in s
    for (let char of s) {
        // look at curr letter
        // If it’s already in the count, add 1
        // if not, start at 0 and make it 1
        countS[char] = (countS[char] || 0) + 1;
    }

    // count letters in t
    for (let char of t) {
        countT[char] = (countT[char] || 0) + 1;
    }

    // compare the two count objects
    for (let char in countS) {
        if (countS[char] !== countT[char]) {
            return false;
        }
    }
    return true;
};

/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // store count for each char
    countChar = {}; 

    // first pass: count frequencies
    // loop through each char in str
    for (let char of s) {
        // if char in hashmap, add 1 to its count
        // if not, start at 0 and add 1
        countChar[char] = (countChar[char] || 0) + 1;
    }

    // 2nd pass: find first character with count 1
    // loop through string again by index
    for (let i = 0; i < s.length; i++) {
        // check if curr char count is 1, meaning it's unique
        if (countChar[s[i]] === 1) {
            // return index of first unique char
            return i;
        }
    }
    return -1;
};

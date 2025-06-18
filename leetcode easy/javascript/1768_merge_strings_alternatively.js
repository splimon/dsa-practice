/*
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.
Return the merged string.

Example 1:
Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
*/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    // to store final string
    let mergedStr = "";
    
    // Loop through each index until we reach the end of the longer word
    for (let i = 0; i < word1.length || i < word2.length; i++) {

        // If word1 has a character at index i, add it to the result
        if (i < word1.length) {
            mergedStr += word1.charAt(i);
        }
        // If word2 has a character at index i, add it to the result
        if (i < word2.length) {
            mergedStr += word2.charAt(i);
        }
    } 
    return mergedStr;
};

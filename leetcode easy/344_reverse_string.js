/*
Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    // initialize 2 pointers
    // left -> start at beginning of array
    // right -> start at end of array
    let left = 0;
    let right = s.length - 1;

    // keep swapping pointers while left ptr is before right ptr
    while (left < right) {
        // swap characters at positions left & right
        [s[left], s[right]] = [s[right], s[left]];

        left++; // move left pointer one step to right
        right--; // move right pointer one step to left
    }
};

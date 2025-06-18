/* Given an integer x, return true if x is a palindrome, and false otherwise. 

Example 1:
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.

Example 2:
Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome. */

/* Solution w/ methods (13 ms runtime) */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // .toString() -> converts x (num) into a string
    // .split('') -> splits string into arr of chars. Ex: "121" → ["1", "2", "1"]
    // .reverse() -> reverses the array
    // .join('') -> join array back to string. Ex: ["1", "2", "1"] → "121"
    let reversed = x.toString().split('').reverse().join('');

    // compare reversed string to original string
    return reversed === x.toString();
};


/* Solution w/ 2 pointers (5 ms runtime) */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // neg num is not a palindrome bc of minus sign
    if (x < 0) return false;

    // Initialize two pointers:
    // 'left' starts at the beginning of the string
    // 'right' starts at the end of the string
    let input = x.toString();
    let left = 0;
    let right = input.length - 1;

    // Loop while the left pointer is before the right pointer
    while (left < right) {
        // If characters at left and right match, move both pointers inward
        if (input[left] === input[right]) {
            left++;
            right--;
            continue; // continue to next iteration
        }
        // If characters do not match, it's not a palindrome
        return false;
    }

    // If we get through the whole loop without returning false,
    // all characters matched → it is a palindrome
    return true;
};

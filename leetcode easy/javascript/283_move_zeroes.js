/* Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0] */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function moveZeros(nums) {
    // set left pointer to 0 index
    let left = 0;

    // set right pointer to 0 index
    // loop through array with right pointer
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] !== 0) {
            [nums[left], nums[right]] = [nums[right], nums[left]]; // if elem at right pointer is not 0, swap values
            left++; // increment left pointer
        }
    }
    return nums;
};

console.log(moveZeros([0, 1, 0, 3, 12])); // output: [ 1, 3, 12, 0, 0 ]

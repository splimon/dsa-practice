/* You are given an integer array nums. 
The unique elements of an array are the elements that appear exactly once in the array.
Return the sum of all the unique elements of nums.

Example 1:
Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.

Example 2:
Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    // key: num, value: # of times num appears
    countNums = {}; // create object to keep track of freq of each number
    let sum = 0; // sum of unique nums

    // count frequency of each num in array
    for (let i = 0; i < nums.length; i++) {
        countNums[nums[i]] = (countNums[nums[i]] || 0 ) + 1;
    }

    // Get all the keys (numbers as strings) from the countNums object
    let keys = Object.keys(countNums); 

    // check which nums appear once & sum together
    for (let i = 0; i < keys.length; i++) {
        let num = keys[i]; // current number as string

        // Check if the current number appeared exactly once
        if (countNums[num] === 1) {
            sum += Number(num); // convert string key back to number & add to sum
        }
    }
    return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));

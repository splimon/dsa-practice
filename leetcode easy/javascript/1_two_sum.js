/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashMap = {};

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        
        // if diff in hashMap, return index of diff & curr index
        if (hashMap[diff] !== undefined) {
            return [hashMap[diff], i];
        }

        // if not, set the num in the hashmap to the index
        hashMap[nums[i]] = i;
    }
};

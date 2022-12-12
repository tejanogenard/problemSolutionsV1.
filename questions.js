/* 
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]ā€¦nums[i]).
Return the running sum of nums.

ex 1. 
Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

soooo.... 
    if given an list [1,2,3,4] we'll loop through that list keeping track of a the running sum and every
    iteration we are going to add the running sum's iteration to the total output list.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    total = 0
    runningTotal = []
    for(let i = 0; i < nums.length; i++) {
        total += nums[i]
        runningTotal.push(total)
    }
    return runningTotal
};



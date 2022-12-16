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

/*
1929. Concatenation of Array

Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

ex1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

ex2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
*/

var getConcatenation = function(nums) {
    /* 
        1. loop through the array and make a copy of every element into a new array
        2. Concatenate the new array to the old one 
        3. return the two combined arrays together. 
    */
        double = []

        for (let i=0; i < nums.length; i++){
            double.push(nums[i])
            console.log(double)
        }

        return array3 = nums.concat(double);
};
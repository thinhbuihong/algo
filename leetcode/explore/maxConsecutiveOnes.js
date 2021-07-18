// Given a binary array nums,
// return the maximum number of consecutive 1's in the array.

//example
// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits 
//		are consecutive 1s. The maximum number of consecutive 1s is 3.


const findMaxConsecutiveOnes = function (nums) {
	let max = 0;
	let count = 0;
	for (let num of nums) {
		if (num) {
			count += 1;
		} else {
			max = Math.max(max, count);
			count = 0;
		}

	}
	return Math.max(max, count)
};
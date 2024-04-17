//  * https://leetcode.com/problems/contains-duplicate/

/*
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 */

const containsDuplicate = (nums: number[]) => {
  const length = nums.length;
  for (let element = 0; element < length; element++) {
    //O(n)
    for (let i = element + 1; i < length; i++) {
      //  Time O(n)
      const isDuplicate = nums[element] === nums[i];
      if (isDuplicate) return true;
    }
  }

  return false;
};

containsDuplicate([1, 2, 3, 1]);

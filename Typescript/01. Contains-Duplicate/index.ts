//  * https://leetcode.com/problems/contains-duplicate/

/*
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 */

const containsDuplicate1 = (nums: number[]) => {
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

/*
 * Sort the array and compare elements to its neighbor 
    Sort - HeapSort Space O(1) , QuickSort Space O(log(N)) , MergeSort Space O(N) 

    Time - O(N * logN) for sorting the array and O(N) for comparing the adjacent

           Total - O(N * logN)


Space - O(1 || log(N) || N) Depends which sorting algorithms we are using
*/

const containsDuplicate2 = (nums: number[]) => {
  nums.sort(
    (a, b) => a - b
  ); /* Time O(N * log(N)) and Space O(1 || log(N) || N) */
  console.log(nums);
  const length = nums.length;
  for (let element = 0; element < length; element++) {
    const neighbor = element + 1;
    const isDuplicate = nums[element] === nums[neighbor];
    if (isDuplicate) return true;
  }
};

/*
 * Sort the array and compare elements to its neighbor 
  Sort - HeapSort Space O(1) , QuickSort Space O(log(N)) , MergeSort Space O(N) 
*/

const containsDuplicate3 = (nums: number[]) => {
  const numsSet = new Set();

  for (const element of nums) {
    if (numsSet.has(element)) {
      return true;
    }
    numsSet.add(element);
  }
  return false;
};

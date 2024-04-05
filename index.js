function hasTargetSum(array, target) {
  // Write your algorithm here
  const numSet = new Set();

  for (let num of array) {
    const complement = target - num;
    if (numSet.has(complement)) {
      return true;
    }
    numSet.add(num);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here

 Time complexity: O(n), where n is the length of the input array. 
 We iterate through the array once, performing constant time operations inside the loop.

 */


/* 
  Add your pseudocode here
 
 1. Create an empty Set called numSet.
 2. Iterate through each number in the input array.
 3. For each number, calculate its complement (target - num).
 4. Check if the complement exists in the numSet. If it does, return true.
 5. If the complement doesn't exist, add the current number to the numSet.
 6. If no two numbers are found that sum up to the target, return false.

*/

 
/*
  Add written explanation of your solution here

  This function uses a set to keep track of numbers encountered during iteration through the input array. 
  For each number, it calculates its complement (the difference between the target and the current number). 
  If the complement exists in the set, it means there are two numbers in the array that sum up to the target, and the function returns true. 
  If no such pair is found after iterating through the entire array, the function returns false.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

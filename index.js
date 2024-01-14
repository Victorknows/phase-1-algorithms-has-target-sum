function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = [];
  for (let num of array) {
    if (seenNumbers.includes(target - num)) {
      return true; 
    }
    seenNumbers.push(num)

  }
  return false;
}


/* 
  Write the Big O time complexity of your function here
   Time complexity: O(n)
   The function iterates through the array once, so its time complexity is linear in the size of the input array.
*/

/* 
  Add your pseudocode here
  1.Creates an empty array and name it seenNumbers
  2.Iterate through the array
  3.For each number, check if (target - current number) is in the array.
  4.If yes, return true.
  5.If no, add the current number to the array.
  6.If the loop completes, return false.
*/

/*
  Add written explanation of your solution here
     The function uses an array to keep track of the numbers seen so far.
  While iterating through the array, for each number, it checks if the complement
  of that number with respect to the target is already in the array using the includes method.
  If yes, it means a pair has been found whose sum is equal to the target, and the function returns true.
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

//Two sum is an Amazon recruiting coding problem
//Problem description: Given an array of integers "sums" and an integer "target", return indices of the two numbers such that they add up to "target".
//You may assume that each input would have exactly one solution, and you may not use the the same element twice.
//You can return the answer in any order


function twoSum (nums, target){
  for (let i = 0; i < nums.length - 1; i++){
    for (let j = i + 1; j < nums.length; j++){
      if (nums[i] + nums[j] == target){
        return [i, j];
      }
    }
  }
}

function test (output, expectedOutput) {
  if (output[0] == expectedOutput[0] && output[1] == expectedOutput[1]) {
    console.log("Test Passed!");
  }
  else {
    console.log("Test Failed.")
  }
}

//Test variables
let testNum;
let nums;
let target;
let expectedOutput;
let output;

//Example #1
nums = [2, 7, 11, 15];
target = 9;
expectedOutput = [0,1];
output = twoSum(nums, target);
test(output, expectedOutput);

//Example #2
nums = [3, 2, 4];
target = 6;
expectedOutput = [1,2];
output = twoSum(nums, target);
test(output, expectedOutput);

//Example #3
nums = [3, 3];
target = 6;
expectedOutput = [0,1];
output = twoSum(nums, target);
test(output, expectedOutput);

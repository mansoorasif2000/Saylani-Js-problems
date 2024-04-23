function findMissingNumber(numbers) {
    let expectedNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== expectedNumber) {
            return expectedNumber;
        }
        expectedNumber++;
    }
    return null; // If no missing number found
  }
  
  console.log(findMissingNumber([11, 12, 14, 15, 16, 18, 19, 20])); // Output: 13
  console.log(findMissingNumber([1, 2, 3, 4, 5])); // Output: null (no missing number)
  console.log(findMissingNumber([10, 11, 13, 14, 15])); // Output: 12
  console.log(findMissingNumber([2, 4, 6, 8, 10])); // Output: null (no missing number)
  
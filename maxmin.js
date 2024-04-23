function findMinMax(numbers) {
    let min = numbers[0];
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return { min, max };
  }
  console.log(findMinMax([1, 2, 3, 4, 5])); // Output: { min: 1, max: 5 }
  console.log(findMinMax([10, -3, 8, 0, 17])); // Output: { min: -3, max: 17 }
  console.log(findMinMax([-5, -10, -2, -8])); // Output: { min: -10, max: -2 }
  console.log(findMinMax([0])); // Output: { min: 0, max: 0 }
  
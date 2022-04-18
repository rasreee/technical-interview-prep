/**
 * We can use a double for loop to check for pairs of values from
 * the array which add up to equal the target value and exit the program
 * as soon as a pair is found.
 *
 * Time Complexity: O(N^2) since we check every possible pair of indices.
 *
 *
 * We can improve this by 2X by keeping track of which pairs of indices we've already
 * checked to reduce the number of iterations needed.
 *
 * Time Complexity: O(N^2/2) ~ O(N^2) since the constant divisor is overpowered by the
 * exponent.
 */

function twoSum(nums: number[], target: number): number[] {
  const N = nums.length;

  for (let firstIndex = 0; firstIndex < N; firstIndex += 1) {
    const firstValue = nums[firstIndex];

    for (let secondIndex = 0; secondIndex !== firstIndex && secondIndex < N; secondIndex += 1) {
      const secondValue = nums[secondIndex];

      if (firstValue + secondValue === target) return [firstIndex, secondIndex];
    }
  }

  throw new Error('Expected exactly one solution but found none.');
}

export { twoSum };

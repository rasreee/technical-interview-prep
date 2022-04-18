import times from 'lib/times';

/**
 * [238] Product of Array Except Self
 *
 * Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 */
function productExceptSelf(nums: number[]): number[] {
  /**
   * Approach #1:
   *
   * For each value:
   *    1. Find the list of numbers excluding the current index
   *    2. Compute the product of all the items in that list
   *    3. Set the the resulting list to this value at the current index
   *
   * Time Complexity: O(N^2)
   *
   * ----------------------------------------------------------------
   *
   * Approach #2:
   *
   * Initialize a map where each key is an index of an item and each value
   * is a number equal to 1 at initialization (call this `products`)
   *
   * For each item in `nums`:
   *    1. For each entry in `products` EXCEPT the one corresponding to the
   *       current item:
   *         Multiply its value by `currentValue` where `currentValue` is
   *         the value of the current iteration's item
   *
   * Return the list of values of the `products` map.
   *
   * Time Complexity: O(N^2)
   *
   *
   * Approach #3:
   *
   * Initialize an array called `result` to return at the end
   *
   * Initialize an array of all possible indices for `nums` called `allIndices`
   *
   * For each index `i` in `allIndices`:
   *    - Get the list of indices without the `i` and assign it to `multipliers`
   *      by cloning `allIndices` and deleting `i` from it, NOT by using a filter() operation,
   *      since that would be O(N) for each item
   *    - Compute the product of `multipliers` and call it `product`
   *    - Set `result` at the `i` to equal `product`
   *
   * Return result
   */

  const N = nums.length;
  const answer: number[] = times(N, () => 1);

  for (let i = 1; i < N; i += 1) {
    answer[i] = nums[i - 1] * answer[i - 1];
  }

  let product = 1;
  for (let i = N - 1; i >= 0; i -= 1) {
    answer[i] = answer[i] * product;
    product *= nums[i];
  }

  return answer;
}

export { productExceptSelf };

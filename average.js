// @ts-check

/**
 * @param {number[]} numbers
 * @return {number}
 */
export function average (numbers) {
  const sum = numbers.reduce((acc, number) => acc + number)
  return sum / numbers.length
}

export function testAverage () {
  console.debug(average([3, 3, 3, 4]))
  console.debug(average([1, 1, 1, 4]))
  // console.debug(average(['a', 1, 1]))
}

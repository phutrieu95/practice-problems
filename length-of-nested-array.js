// The .length property on an array will return the number of elements in the array.
// For example, the array below contains 2 elements:

// [1, [2, 3]]
// // 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non - nested items in the
// nested array.In the above case, [1, [2, 3]] contains 3 non - nested items, 1, 2 and 3.

// Write a function that returns the total number of non - nested items in a nested array.

const lengthOfNestedArrays = arr => {
  return (arr.length ? arr.join('').replace(/(,)/g, '').length : 0)
}

lengthOfNestedArrays([1,[1,2,[1,2,3,[1,2,3,4]]]])

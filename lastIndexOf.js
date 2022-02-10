// Array.prototype.lastIndexOf()
// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

// Parameters
// searchElement
// Element to locate in the array.

// fromIndex Optional
// The position in the array at which to start searching backwards. Defaults to the array's length minus one (arr.length - 1), causing the whole array to be searched.

// A fromIndex value greater than or equal to the length of the array also causes the whole array to be searched. (In this case, you can think of it conceptually as causing the method to start its search at a nonexistent position beyond the end of the array, but to then go backwards from there looking for the real end position of the array, at which point it starts searching backwards through the actual array elements.)

// A fromIndex value greater than 0 is taken as the offset from the beginning of the array.

// A fromIndex value less than 0 is taken as the offset from the end of the array — in other words, it is taken as specifying the position at array.length + fromIndex. Therefore, if array.length + fromIndex is less than 0, the array is not searched, and the method returns -1. (In this case, because fromIndex specifies a nonexistent position before the beginning of the array, you can think of it conceptually as causing the method to start its search at that nonexistent position and to then go backwards from there looking for array elements, which it never finds.)

// Return value
// The last index of the element in the array; -1 if not found.


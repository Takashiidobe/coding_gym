const twoSum = (arr, k) => {
  const sums = [];
  const hashTable = {};

  //check each element in the array;
  for (i in arr) {
    //calculate k - current element to find the inverse of it
    let sumMinusElement = k - arr[i];

    //check if this number exists in the hash table
    //if so, then we found a pair of numbers that sum to k
    if (hashTable[sumMinusElement] !== undefined) {
      sums.push([arr[i], sumMinusElement]);
    }

    //add the current number to the hash table
    hashTable[arr[i]] = arr[i];
  }

  //checks if we have a matching pair to be true
  return sums.length > 0 ? true : false;

  //if we want, we can check out the matching pairs
  // return sums
};

// --Takashiidobe

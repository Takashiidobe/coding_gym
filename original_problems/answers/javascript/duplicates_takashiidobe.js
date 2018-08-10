// Remove duplicates

const testArray = [1, 2, 3, 4, 4];
const answer = [1, 2, 3, 4];

const removeDuplicates = array => {
  return Array.from(new Set(array));
};

// --Takashiidobe

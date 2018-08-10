let array = [10, 5, 2, 7, 8, 7];
let k = 3;

function subArray(array, k) {
  for (i = 0; i <= array.length - k; i++) {
    console.log(Math.max.apply(null, array.slice(i, i + k)));
  }
}
subArray(array, k);

// Takashiidobe

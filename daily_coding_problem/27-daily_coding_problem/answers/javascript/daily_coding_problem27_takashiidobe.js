function isBalanced(str) {
  let arr;
  let answerArr = [];
  arr = str.split("");
  //a balanced expression can not be odd in length
  if (arr.length % 2 === 1) {
    return false;
  }

  for (i in arr) {
    if (arr[i] === "[") {
      arr.indexOf("]") > -1
        ? answerArr.push(arr[i], arr[arr.indexOf("]")])
        : false;
    } else if (arr[i] === "{") {
      arr.indexOf("}") > -1
        ? answerArr.push(arr[i], arr[arr.indexOf("}")])
        : false;
    } else if (arr[i] === "(") {
      arr.indexOf("(") > -1
        ? answerArr.push(arr[i], arr[arr.indexOf("}")])
        : false;
    }
  }

  if (answerArr.length % 2 === 1) {
    return false;
  }
  return true;
}

// Takashiidobe

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum){
    return [];
  }else{
    const rangeArr = rangeOfNumbers(startNum, endNum - 1)
    rangeArr.push(endNum)
    return rangeArr
  }
  
};

console.log(
  rangeOfNumbers(1, 5));
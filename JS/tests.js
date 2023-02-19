const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  for (let i = 0; i < 3; i++){
    if (i == 0){
      s[i] = 2
    }else if (i == 1){
      s[i] = 5
    }else if (i == 2){
      s[i] = 7
    }
  }
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

console.log(s);
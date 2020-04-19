function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let target = i;
    for (let j = i - 1; j >= 0; j--) {
      if (array[target] < array[j]) {
        [array[j], array[target],] = [array[target], array[j]];
        target = j;
      } else {
        break
      }
    }
  }
  return array
}

console.log(insertSort([2, 5, 3, 7, 9, 1]))
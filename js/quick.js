let sortMe = [2, 6, 4, 10, 8, 16, 12, 14];

function quickSort(arr) {


  if (arr.length <= 1) {
    return arr;
  } else {
    let pivot = arr.shift();
    let leftArr = [];
    let rightArr = [];
    let sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        leftArr.push(arr[i]);
      } else {
        rightArr.push(arr[i])
      }
    }
    return sortedArr .concat(quickSort(left), pivot, quickSort(right));
  }
}



let sorted = quickSort(sortMe);
console.log(sorted);